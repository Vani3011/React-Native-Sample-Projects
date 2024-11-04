import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useNavigation } from "@react-navigation/native"


export const BasicCard = ({ item = "" }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.cardBlock}>
            <TouchableOpacity onPress={() => navigation.navigate('GroceryView', { ...item })}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={item?.icon} style={styles.productImage} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.productName}>{item?.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.productPrice}>{item?.amount}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export const WishListCard = ({ item = "", handleRemove = "", handleCart = "", isShowCart = false, handleCount = () => false }) => {
    const windowWidth = Dimensions.get('window').width
    return (
        <View style={styles.wishListcard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item?.icon} style={styles.productImage} />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={styles.productName}>{item?.name}</Text>
                        <Text style={styles.productPrice}>{item?.amount}</Text>
                    </View>
                </View>
                {isShowCart &&
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleCount('decrement',item)} disabled={item?.item_count > 1 ? false : true}>
                            <View style={styles.decrementbtn}>
                                <Text style={styles.decrementText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.item_count}>{item?.item_count}</Text>
                        <TouchableOpacity onPress={() => handleCount('increment',item)}>
                            <View style={styles.decrementbtn}>
                                <Text style={styles.decrementText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: "#E4E8EE" }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <TouchableOpacity style={[styles.removeBtn, { width: windowWidth / 2.5 }]} onPress={() => handleRemove(item?.value)}><Text style={styles.removeText}>Remove</Text></TouchableOpacity>
                {isShowCart ?
                    <TouchableOpacity style={[styles.cartbtn, { width: windowWidth / 2.5 }]} onPress={() => handleCart(item?.value)} disabled={item?.is_liked ? true : false}><Text style={styles.cartText}>{item?.is_liked ? "In Wishlist" : "Move to wishlist"}</Text></TouchableOpacity>
                    :
                    <TouchableOpacity style={[styles.cartbtn, { width: windowWidth / 2.5 }]} onPress={() => handleCart(item?.value)} disabled={item?.is_cart ? true : false}><Text style={styles.cartText}>{item?.is_cart ? "In Your Cart" : "Add to cart"}</Text></TouchableOpacity>
                }
            </View>
        </View>
    )
}