import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root:{
        position:"relative",
    },
    container: {
        // flex: 1,
        // backgroundImage:'linear-gradient(to right top, #f6f2ef, #f1eeec, #ece9e8, #e7e5e5, #e2e1e1, #e2ddde, #e1d9dd, #ddd5de, #e4cfdb, #edc9d2, #f4c4c4, #f6c1b2)',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 12,
        backgroundColor:"#FFFFFF"
    },
    addcontainer: {
        // flex: 1,
        // backgroundImage:'linear-gradient(to right top, #f6f2ef, #f1eeec, #ece9e8, #e7e5e5, #e2e1e1, #e2ddde, #e1d9dd, #ddd5de, #e4cfdb, #edc9d2, #f4c4c4, #f6c1b2)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:"row",
        margin: 12,
        backgroundColor:"#FFFFFF"
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        textTransform: "uppercase",
        color: "#091B29",
        letterSpacing: 0.5,
    },
    addtitle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        textTransform: "capitalize",
        color: "#091B29",
        letterSpacing: 0.5,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#E4E8EE"
    },
    list:{
        padding:12,
        backgroundColor:"#F5F7FA"
    },
    listBox:{
        marginBottom:8,
        backgroundColor:"#FFFFFF",
        padding:12,
        borderRadius:8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listDisabledBox:{
        marginBottom:8,
        backgroundColor:"#E4E8EE",
        padding:12,
        borderRadius:8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    listTitle:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        maxWidth:220,
        color:"#4E5A6B",
        paddingLeft:8
    },
    editDiv:{
        flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
    },
    firstDiv:{
        flexDirection: "row",
        alignItems:'center'
    },
    textBoxContainer:{
        padding:12,
    },
    trashIcon:{
        padding:6
    },
    fabButton:{
        borderRadius:50,
        width:40,
        height:40,
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5C5CFF",
        position:"absolute",
        // top:0,
        bottom:80,
        right:0,
        margin:16
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
    customTextInput:{
        height: 50,
        borderWidth:1,
        borderColor:"#E4E8EE",
        borderRadius:4,
        padding:12 ,
        color:"#000000"
    },
    customButton:{
        borderRadius:4,
    },
    noData:{
        flexDirection:"row",
        justifyContent:"center"
    },
    noDataText:{
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        maxWidth:250,
        color:"#4E5A6B",
        top:150,
        bottom:150
    }
})