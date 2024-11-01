import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../style"
import Icon from "react-native-vector-icons/MaterialIcons";
import { BasicCard, WishListCard } from "../../components/card";
import { useContext } from "react";
import { GroceryContext } from "../../context/groceryContext";
import { Groceries } from "../utils";
const MyCart = ({navigation,details=""}) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const {selectedGroceryList,setSelectedGroceryList}=useContext(GroceryContext)
    const handleRemoveFromCart = (val) =>{
            const result = Groceries?.map((x) => {
                return {
                    ...x,
                    is_cart: val === x?.value ? false : x?.is_cart
                }
            })
            setSelectedGroceryList(result)
        
    }
    const handleWishList = (val) =>{
        const result = Groceries?.map((x) => {
            return {
                ...x,
                is_liked: val === x?.value ? true : x?.is_liked
            }
        })
        setSelectedGroceryList(result)
    
}
    return (
        <View style={[styles.viewSection, { height: windowHeight, position: 'relative' }]}>
            <View style={{ flexDirection: 'row',padding:16 }}>
                <TouchableOpacity onPress={() => navigation.push("GroceryDashboard")}>
                    <Icon name="arrow-back" size={20} color={"#000"} />
                </TouchableOpacity>
                <Text style={styles.wishListTitle}>{"My Cart"}</Text>
               
            </View>
            {selectedGroceryList?.filter((x) => { return x?.is_cart })?.length > 0 ?
            <View style={{ padding: 8,height:windowHeight-180 }}>
                <FlatList
                    data={selectedGroceryList?.filter((x)=>{return x?.is_cart})}
                    numColumns={1}
                    keyExtractor={(item) => item.value}
                    renderItem={({ index, item }) => (
                        <WishListCard item={item} isShowCart={true} handleRemove={handleRemoveFromCart} handleCart={handleWishList}/>
                    )} />
            </View>
            :
                <View style={styles.nodataImg}>
                    <Image source={require('../../../assets/images/nodata.jpg')} />
                </View>
            }
        </View>
    )
}
export default MyCart