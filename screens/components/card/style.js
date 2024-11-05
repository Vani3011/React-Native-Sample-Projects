import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   cardBlock: {
      // backgroundColor:"#FFFFFF",
      // borderRadius:8,
      // borderWidth:1,
      // borderColor:"#E4E8EE",
      padding: 8,
      // // margin:16
      flex: 1,
      margin: 5,
      height: 150,
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
   },
   wishListcard: {
      // backgroundColor:"#FFFFFF",
      // borderRadius:8,
      // borderWidth:1,
      // borderColor:"#E4E8EE",
      padding: 8,
      // // margin:16
      flex: 1,
      margin: 8,
      height: 140,
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
   },
   productImage: {
      width: 70,
      height: 70
   },
   productName: {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#091B29",
   },
   productPrice: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#091B29",
   },
   removeBtn: {
      borderWidth: 1,
      borderColor: "#E4E8EE",
      borderRadius: 12,
      padding: 8,
      // width: 100,
      flexDirection: 'row',
      justifyContent: 'center'
   },
   removeText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#091B29",
      textAlign: 'center'
   },
   cartText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#ffffff",
      textAlign: 'center'
   },
   cartbtn: {
      backgroundColor: "#ed714d",
      borderRadius: 12,
      padding: 8,
      // width:100,
      flexDirection: 'row',
      justifyContent: 'center'
   },
   decrementbtn:{
      backgroundColor:'#ed714d',
      borderRadius:50,
      width:20,
      height:20,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
   },
   decrementText:{
      fontFamily: 'Poppins-SemiBold',
      // fontSize: 16,
      textAlign:'center',
      // textTransform: "uppercase",
      color: "#ffffff",
   },
   item_count:{
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#091B29",
      paddingHorizontal:8
   },

})