import { useContext, useState } from "react"
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native"
import { BasicCard } from "../../components/card"
import { CustomTabComponent } from "../../components/tab"
import { GroceryContext } from "../../context/groceryContext"
import { styles } from "../style"
import { BannerImages, Groceries, TabList } from "../utils"

export const GroceryHome = ({navigation}) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const [selectedList, setSelectedList] = useState(TabList[0])
    const [tabData,setTabData]=useState(Groceries)
    const handleChangeTab = (val) => {
        setSelectedList(val)
        if (val?.value > 1) {
            setTabData(Groceries?.filter((x) => { return x?.type === (val.value === 2 ? "Fruits" : val?.value ===3 ? "Vegetables":val?.value === 4 ? "Pulses" : val?.value===5?"Snacks":"Others") }))
        }
        else {
            setTabData(Groceries)
        }
    }
   
    return (
        <View style={[styles.homeContainer, { height: windowHeight, padding: 16 }]}>
            <View style={styles.profileSection}>
                <Image source={require('../../../assets/images/avatar.png')} style={styles.avatarImage} />
                <View style={{ marginLeft: 8 }}>
                    <Text style={styles.greeting}>Hi,</Text>
                    <Text style={styles.personName}>Sahana</Text>
                </View>
            </View>
            <View style={styles.bannerSection}>
                <ScrollView horizontal={true}>
                    {BannerImages()?.map((x) => {
                        return (
                            <Image key={x?.id} source={x.url} style={[styles.bannerImage, { width: windowWidth }]} />

                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ marginTop: 16 }}>
                <FlatList
                    data={TabList}
                    renderItem={({ item }) => <CustomTabComponent list={item} onChangeTab={handleChangeTab} selectedList={selectedList} />}
                    keyExtractor={item => item.value}
                    horizontal
                />
            </View>
            <View style={{ marginTop: 16,height:windowHeight-430 }}>
                <FlatList
                    data={tabData}
                    numColumns={2}
                    keyExtractor={(item) => item.value}
                    renderItem={({ index, item }) => (
                        <BasicCard item={item}/>
                    )} />
            </View>

        </View>
    )
}