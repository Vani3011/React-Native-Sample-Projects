import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   bgImg1:{
    // width:100,
    // height:50
    position:'relative',
    // borderBottomRightRadius:70,
    // borderBottomLeftRadius:70
   },
   container:{
    // padding:16,
    backgroundColor:"#e4e0d5"
   },
   title:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    // textTransform: "uppercase",
    color: "#091B29",
    letterSpacing: 0.5,
   },
   root:{
    padding:24,
    flexDirection:'row',
    justifyContent:'center'
   },
   explorebtn:{
    borderWidth:1,
    borderColor:"#E4E8EE",
    borderRadius:25,
    padding:12,
    width:150,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign:'center',
    // textTransform: "uppercase",
    color: "#ffffff",
    backgroundColor:'#f27c00'
   },
   exploreRoot:{
     flexDirection:'row',
    justifyContent:'center'
    // letterSpacing: 0.5,
   },
   homeContainer:{
    backgroundColor:"#F2F5F7"
   },
   profileSection:{
    flexDirection:'row',
    // padding:16
   },
   avatarImage:{
    width:40,
    height:40,
    borderRadius:50,
    backgroundColor:"#FFFFFF",
   },
   greeting:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    // textTransform: "uppercase",
    color: "#4E5A6B",
   },
   personName:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    // textTransform: "uppercase",
    color: "#091B29",
   },
   bannerSection:{
    marginTop:16
   },
   bannerImage:{
    height:170,
    borderRadius:8
   },
   viewSection:{
      backgroundColor:"#ffffff"
   },
   firstViewBlock:{
      backgroundColor:"#ffffff",
      padding:16,
      borderBottomEndRadius:120,
      borderBottomStartRadius:120
   },
   viewImageBox:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:16,
   },
   viewProductImage:{
      borderRadius:50,
      height:200,
   },
   viewProductName:{
      fontFamily: 'Poppins-SemiBold',
         fontSize: 20,
         // textTransform: "uppercase",
         color: "#000",
         letterSpacing:0.5
   },
   viewProductPrice:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      // textTransform: "uppercase",
      color: "#091B29",
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
   cartBtn:{
      backgroundColor:"#ed714d",
      borderRadius:25,
      padding:8,
      margin:16,
      position:'absolute',
      bottom:25,
      left:0,
      right:0,
      // top:0
   },
   cartBtnText:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      textAlign:'center',
      // textTransform: "uppercase",
      color: "#ffffff",
   },
   descTitle:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#4E5A6B",
      letterSpacing:0.2
   },
   description:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      // textTransform: "uppercase",
      color: "#091B29",
   },
   wishListTitle:{
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      letterSpacing:0.5,
      // textTransform: "uppercase",
      color: "#000000",
      marginLeft:12  
   },
   nodataImg:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:50,
      marginVertical:50
   },
   nocartdataImg:{
      flexDirection:'row',
      justifyContent:'center',
      // alignItems:'center',
      marginVertical:50,
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
   cartBottomDiv:{
      backgroundColor:"#ffffff",
      // borderRadius:25,
      paddingHorizontal:12,
      paddingVertical:12,
      borderTopWidth:1,
      borderColor:"#E4E8EE",
      // margin:16,
      position:'absolute',
      bottom:100,
      left:0,
      right:0,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
      // top:0
   },
   orderBtn:{
      backgroundColor:"#ed714d",
         borderRadius:25,
         padding:8,
   },
   amount:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      // textTransform: "uppercase",
      color: "#091B29",
   },
   bottomSheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      // justifyContent: 'flex-start',
      // alignItems: 'center',
      backgroundColor: 'white',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      // paddingVertical: 23,
      // paddingHorizontal: 25,
      bottom: 0,
      borderWidth: 1,
      borderColor: '#E4E8EE'
  },
})