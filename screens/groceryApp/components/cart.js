import { Dimensions, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../style"
import Icon from "react-native-vector-icons/MaterialIcons";
import { BasicCard, WishListCard } from "../../components/card";
import { useContext, useState } from "react";
import { GroceryContext } from "../../context/groceryContext";


import { Groceries } from "../utils";
const MyCart = ({ navigation, details = "" }) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const { selectedGroceryList, setSelectedGroceryList } = useContext(GroceryContext)
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };
    const handleRemoveFromCart = (val) => {
        const result = selectedGroceryList?.map((x) => {
            return {
                ...x,
                is_cart: val === x?.value ? false : x?.is_cart
            }
        })
        setSelectedGroceryList(result)

    }
    const handleWishList = (val) => {
        const result = selectedGroceryList?.map((x) => {
            return {
                ...x,
                is_liked: val === x?.value ? true : x?.is_liked,
                is_cart: val === x?.value ? false : x?.is_cart

            }
        })
        setSelectedGroceryList(result)

    }
    const handleCount = (key, val) => {
        const result = selectedGroceryList?.map((x) => {
            return {
                ...x,
                item_count: val?.value === x?.value ? (key === "decrement" ? (val?.item_count - 1) : (val?.item_count + 1)) : x?.item_count,
                total_amount: val?.value === x?.value ? (key === "decrement" ? (x?.price * (val?.item_count - 1)) : (x?.price * (val?.item_count + 1))) : x?.price
            }
        })
        setSelectedGroceryList(result)
    }
    return (
        <View style={[styles.viewSection, { position: 'relative', height: windowHeight }]}>
            <View style={{ flexDirection: 'row', padding: 16 }}>
                <TouchableOpacity onPress={() => navigation.push("GroceryDashboard")}>
                    <Icon name="arrow-back" size={20} color={"#000"} />
                </TouchableOpacity>
                <Text style={styles.wishListTitle}>{"My Cart"}</Text>

            </View>
            {selectedGroceryList?.filter((x) => { return x?.is_cart })?.length > 0 ?
                <View style={{ padding: 8,height: windowHeight / 1.6,position:'relative' }}>
                        <FlatList
                            data={selectedGroceryList?.filter((x) => { return x?.is_cart })}
                            numColumns={1}
                            keyExtractor={(item) => item.value}
                            renderItem={({ index, item }) => (
                                <WishListCard item={item} isShowCart={true} handleRemove={handleRemoveFromCart} handleCart={handleWishList} handleCount={handleCount} />
                            )} />
                    </View>
                :
                <View>
                    <Image source={require('../../../assets/images/noDataFound.png')} style={{ width: windowWidth }} />
                </View>
            }
              {selectedGroceryList?.filter((x) => { return x?.is_cart })?.length > 0 &&
  <View style={styles.cartBottomDiv}>
                        <Text style={styles.amount}>{`Rs.${selectedGroceryList?.filter((x) => { return x?.is_cart })?.reduce((accumulator, item) => {
                            return accumulator += item?.total_amount
                        }, 0)}`}</Text>
                        <TouchableOpacity style={[styles.orderBtn, { width: windowHeight / 4 }]} onPress={handleOpenBottomSheet}>
                            <Text style={styles.cartBtnText}>{'Place Order'}</Text>
                        </TouchableOpacity>
                    </View>
}
            <Modal
                animationType="slide"
                transparent={true}
                // We use the state here to toggle visibility of Bottom Sheet 
                visible={isBottomSheetOpen}
                // We pass our function as default function to close the Modal
                onRequestClose={handleCloseBottomSheet} >
                <View style={[styles.bottomSheet, { height: windowHeight / 1.5, padding: 16 }]}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }} onPress={handleCloseBottomSheet}>
                        <Icon name="close" size={16} color="#000000" />
                    </TouchableOpacity>
                    <Image source={require('../../../assets/images/noservice.png')} style={{ width: windowWidth, height: 300 }} />
                    <View style={{ marginTop: 4 }}>
                        <Text style={styles.removeText}>This feature is currently unavailable</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default MyCart