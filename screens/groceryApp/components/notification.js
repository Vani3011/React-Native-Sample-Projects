import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "../style";
const Notifications = ({ navigation, details = "" }) => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width

    return (
        <View style={[styles.viewSection, { height: windowHeight, position: 'relative' }]}>
            <View style={{ flexDirection: 'row', padding: 16 }}>
                <TouchableOpacity onPress={() => navigation.push("GroceryDashboard")}>
                    <Icon name="arrow-back" size={20} color={"#000"} />
                </TouchableOpacity>
                <Text style={styles.wishListTitle}>{"Notifications"}</Text>

            </View>

                <View style={styles.nodataImg}>
                    <Image source={require('../../../assets/images/nodata.jpg')} />
                </View>
            
        </View>
    )
}
export default Notifications