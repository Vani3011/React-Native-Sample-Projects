import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"


export const TabComponent = ({ list = {}, onChangeTab = () => false,selectedList={}}) => {
    return (
        <View style={styles.horizontalSection}>
            <TouchableOpacity onPress={() => onChangeTab(list)}>
                <View style={list?.value===selectedList?.value?styles.selectedRoundedTab:styles.roundedTab}>
                    <Text style={list?.value===selectedList?.value?styles.selectedTabText:styles?.tabText}>{list?.name}</Text>
                    {list.icon!==null&&
                    <Image source={list.icon} style={styles.icon}/>
                    }
                    </View>
            </TouchableOpacity>
            {/* {list?.map((x) => {
                return (
                    <TouchableOpacity onPress={() => onChangeTab(x?.value)}>
                        <View styles={styles.roundedTab}>
                            <Text>{x?.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })} */}

        </View>
    )
}

export const CustomTabComponent = ({ list = {}, onChangeTab = () => false,selectedList={}}) => {
    return (
        <View style={styles.horizontalSection}>
            <TouchableOpacity onPress={() => onChangeTab(list)}>
                <View style={list?.value===selectedList?.value?styles.selectedRoundedTabCustom:styles.roundedTabCustom}>
                {list.icon!==null&&
                <View style={list?.value===selectedList?.value?styles.selImageBox:styles.imageBox}>
                    <Image source={list.icon} style={styles.CustomIcon}/>
                    </View>
                    }
                    <Text style={list?.value===selectedList?.value?styles.selectedTabText:styles?.tabText}>{list?.name}</Text>
                 
                    </View>
            </TouchableOpacity>
            {/* {list?.map((x) => {
                return (
                    <TouchableOpacity onPress={() => onChangeTab(x?.value)}>
                        <View styles={styles.roundedTab}>
                            <Text>{x?.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })} */}

        </View>
    )
}