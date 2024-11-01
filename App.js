import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import GroceryDashboard from "./screens/groceryApp/dashboard";
import GroceryApp from "./screens/groceryApp/grocery";
import { GroceryView } from "./screens/groceryApp/components/groceryView";
import MyContextProvider from "./screens/context/groceryContext";
import MyWishlist from "./screens/groceryApp/components/wishlist";
import MyCart from "./screens/groceryApp/components/cart";



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <MyContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="GroceryApp" component={GroceryApp} />
        <Stack.Screen name="GroceryDashboard" component={GroceryDashboard} />
        <Stack.Screen name="GroceryView" component={GroceryView} />
        <Stack.Screen name="MyWishlist" component={MyWishlist} />
        <Stack.Screen name="MyCart" component={MyCart} />

      </Stack.Navigator>
    </NavigationContainer>
    </MyContextProvider>
  )
}
export default App