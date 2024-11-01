import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { GroceryHome } from "./components/home";
import MyWishlist from "./components/wishlist";
import MyCart from "./components/cart";


const GroceryDashboard = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                // margin: 12,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                height: 75,
                backgroundColor: '#ffffff',
                position:'absolute'
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#ffffff',
            tabBarActiveTintColor: '#ffffff',
            tabBarItemStyle: {
                borderRadius: 40,
            },

        }}
        >
            <Tab.Screen name="Home"
                component={GroceryHome}
                options={{
                    tabBarIcon: ({ size, focused, color }) => (
                        <View style={{ backgroundColor: focused ? "#ed714d" : "#ffffff", borderRadius: 50, padding: focused ? 20 : 0 }}>
                            <Icon name={focused ? "home" : "home-outline"} size={20} color={focused ? "#ffffff" : "#000000"} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Favourite"
                component={MyWishlist}
                options={{
                    tabBarIcon: ({ size, focused, color }) => (
                        <View style={{ backgroundColor: focused ? "#ed714d" : "#ffffff", borderRadius: 50, padding: focused ? 20 : 0 }}>
                            <Icon name={focused ? "heart" : "heart-outline"} size={20} color={focused ? "#ffffff" : "#000000"} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="Cart"
                component={MyCart}
                options={{
                    tabBarIcon: ({ size, focused, color }) => (
                        <View style={{ backgroundColor: focused ? "#ed714d" : "#ffffff", borderRadius: 50, padding: focused ? 20 : 0 }}>
                            <Icon name={focused ? "cart" : "cart-outline"} size={20} color={focused ? "#ffffff" : "#000000"} />
                        </View>

                    ),
                }} />
            <Tab.Screen name="Notification"
                component={GroceryHome}
                options={{
                    tabBarIcon: ({ size, focused, color }) => (
                        <View style={{ backgroundColor: focused ? "#ed714d" : "#ffffff", borderRadius: 50, padding: focused ? 20 : 0 }}>
                            <Icon name={focused ? "notifications" : "notifications-outline"} size={20} color={focused ? "#ffffff" : "#000000"} />
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    )
}
export default GroceryDashboard