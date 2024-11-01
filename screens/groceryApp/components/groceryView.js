
import { useContext, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { GroceryContext } from "../../context/groceryContext";
import { styles } from "../style";
import { Groceries } from "../utils";
import { Rating } from "react-native-ratings";

export const GroceryView = ({ navigation, route }) => {
    const [details, setDetails] = useState(route?.params)
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width
    const { setSelectedGroceryList } = useContext(GroceryContext)
    const handleLike = (val) => {
        setDetails({ ...details, is_liked: details?.is_liked ? false : true })
        const result = Groceries?.map((x) => {
            return {
                ...x,
                is_liked: val === x?.value ? (x?.is_liked ? false : true) : x?.is_liked
            }
        })
        setSelectedGroceryList(result)
    }
    const handleCount = (key) => {
        setDetails({ ...details, item_count: key === "decrement" ? (details?.item_count - 1) : (details?.item_count + 1) })
        const result = Groceries?.map((x) => {
            return {
                ...x,
                item_count: details?.value === x?.value ? (key === "decrement" ? (details?.item_count - 1) : (details?.item_count + 1)) : x?.item_count
            }
        })
        setSelectedGroceryList(result)
    }
    const handleCart = (val) => {
        setDetails({ ...details, is_cart: details?.is_cart ? false : true })
        const result = Groceries?.map((x) => {
            return {
                ...x,
                is_cart: val === x?.value ? true : x?.is_cart
            }
        })
        setSelectedGroceryList(result)
    }
    return (
        <View style={[styles.viewSection, { height: windowHeight, position: 'relative' }]}>
            <View style={[styles.firstViewBlock, { height: windowHeight / 2.5 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("GroceryDashboard")}>
                        <Icon name="arrow-back" size={20} color={"#000"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLike(details?.value)}>
                        <Icon name={details?.is_liked ? "favorite" : "favorite-outline"} size={24} color={details?.is_liked ? "red" : "#000"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewImageBox}>
                    <Image source={details.icon} style={[styles.viewProductImage, { width: windowWidth / 2 }]} />
                </View>
            </View>
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.viewProductName}>{details?.name}</Text>
                    <Text style={styles.viewProductPrice}>{details?.amount}</Text>
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Rating
                        ratingCount={5}
                        ratingColor="#ed714d"
                        readonly={true}
                        imageSize={15}
                        startingValue={details.rating}
                        type='custom'
                        style={{
                            // textAlign:'end',
                            // justifyContent:'end',
                            // alignItems:'end',
                            flexDirection: 'row',
                        }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => handleCount('decrement')} disabled={details?.item_count > 1 ? false : true}>
                            <View style={styles.decrementbtn}>
                                <Text style={styles.decrementText}>-</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.item_count}>{details?.item_count ?? 1}</Text>
                        <TouchableOpacity onPress={() => handleCount('increment')}>
                            <View style={styles.decrementbtn}>
                                <Text style={styles.decrementText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={styles.descTitle}>Description</Text>
                    <Text style={styles.description}>{details?.description}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.cartBtn} onPress={() => handleCart(details?.value)}>
                <Text style={styles.cartBtnText}>{details?.is_cart ? 'Added' : 'Add to Cart'}</Text>
            </TouchableOpacity>
        </View>
    )
}