import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const GroceryApp = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={[styles.container, { height: windowHeight }]}>
            <Image source={require('../../assets/images/grocemartBg.png')} style={[styles.bgImg1, { width: windowWidth, height: windowHeight - 250 }]} />
            <View style={styles.root}>
                <Text style={styles.title}>GroceMart</Text>
            </View>
            <View style={styles.exploreRoot}>
                <TouchableOpacity onPress={()=>navigation.navigate('GroceryDashboard')}>
                <Text style={styles.explorebtn}>{'Explore'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default GroceryApp