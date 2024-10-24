import { useState } from "react"
import { Alert, Dimensions, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import MUIIcon from "react-native-vector-icons/MaterialIcons"

import AddToDo from "./addTodo"
import { styles } from "./style"
import CheckBox from 'expo-checkbox'
const ToDoList = () => {
    const windowHeight = Dimensions.get('window').height;
    const [text, setText] = useState({
        name: ""
    })
    const [list, setList] = useState([
        {
            id: 1,
            name: "Explore State management in react native using Todo app"
        },
        {
            id: 2,
            name: "Explore Navigations in react native"
        }
    ])
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    // Function to open the bottom sheet 
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
        setText({ name: "" })
    };
    const handleEdit = (val) => {
        handleOpenBottomSheet()
        setText({ ...val, is_edit: true })
    }
    const handleDelete = (val) => {
        const result = list?.filter((x) => { return val?.id !== x?.id })
        setList(result)
        showToast("Deleted Successfully")
    }
    const showToast = (message) => {
        Alert.alert(message)
    }
    const handleCheckbox = (val, data) => {
        const result = list?.map((x) => {
            return {
                ...x,
                isSelected: x?.id === data?.id ? val : x?.isSelected
            }
        })
        setList(result)
    }
    const renderItem = (item) => (
        <View style={item?.isSelected ? styles.listDisabledBox : styles.listBox} key={item?.id}>
            <View style={styles.firstDiv}>
                <CheckBox
                    value={item?.isSelected}
                    onValueChange={(val) => handleCheckbox(val, item)}
                />
                <Text style={[styles.listTitle, { textDecorationLine: item?.isSelected ? 'line-through' : 'none' }]}>{item?.name}</Text>
            </View>
            {!item?.isSelected &&
                <View style={styles.editDiv}>
                    <TouchableOpacity style={styles.trashIcon} onPress={() => item?.isSelected ? false : handleEdit(item)}>
                        <MUIIcon name="edit" size={16} color={"blue"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.trashIcon} onPress={() => item?.isSelected ? false : handleDelete(item)}>
                        <Icon name="trash" size={16} color="red" />
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
    return (
        <View>
            <View style={styles.root}>

                <View style={styles.container}>
                    <Text style={styles.title}>Todo List</Text>
                </View>
                <View style={styles.divider} />
                {/* <ToastManager/> */}
                <View style={[styles.list,{height:windowHeight}]}>
                    {list?.length > 0 ?
                        <ScrollView>
                            {/* <FlatList
                                data={list}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                horizontal={false}
                            /> */}
                            {list?.map((x) => {
                                return renderItem(x)
                            })}

                        </ScrollView>
                        :
                        <View style={styles.noData}>
                            <Text style={styles.noDataText}>No List Found</Text>
                        </View>
                    }
                </View>
            </View>
            <TouchableOpacity style={styles.fabButton} onPress={handleOpenBottomSheet}>
                <Icon name="plus" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                // We use the state here to toggle visibility of Bottom Sheet 
                visible={isBottomSheetOpen}
                // We pass our function as default function to close the Modal
                onRequestClose={handleCloseBottomSheet} >
                <View style={[styles.bottomSheet, { height: 320}]}>
                    <AddToDo handleClose={handleCloseBottomSheet} list={list} setList={setList} text={text} setText={setText} showToast={showToast} />
                </View>
            </Modal>
        </View>
    )
}
export default ToDoList