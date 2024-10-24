import { Button, Text, TextInput, TouchableOpacity, View } from "react-native"
import MUIIcon from "react-native-vector-icons/MaterialIcons"
import { styles } from "./style"


const AddToDo = ({ handleClose = () => false, list = [], setList = () => false, text = "", setText = () => false,showToast=()=>false }) => {

    const updateState = (val) => {
        setText({ ...text,name: val })
    }
    const addId = (arr, option = false) => {
        return arr.map(function (obj, index) {
            return Object.assign({}, obj, option ? { option_id: index } : { id: index });
        });
    };
    const handleAdd = () => {
        if (text?.is_edit) {
            const result = list?.map((x) => {
                return {
                    ...x,
                    name: x?.id === text?.id ? text?.name : x?.name
                }
            })
            setList(result)
        }
        else {
            const newList = [...list, text]
            setList(addId(newList))
        }
        handleClose()
        showToast(text?.is_edit?"Updated Successfully":"Added Successfully")

    }
    return (
        <View>
            <View style={styles.addroot}>
                <View style={styles.addcontainer}>
                    <Text style={styles.addtitle}>Add Todo</Text>
                    <TouchableOpacity style={styles.trashIcon} onPress={handleClose}>
                        <MUIIcon name="close" size={16} color="#000000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <View style={styles.textBoxContainer}>
                    <View style={{ height: 200 }}>
                        <TextInput
                            style={styles.customTextInput}
                            placeholder="Enter here"
                            onChangeText={newText => updateState(newText)}
                            defaultValue={text?.name}
                        />
                    </View>
                    <Button onPress={handleAdd} disabled={text?.name?.length > 0 ? false : true} title={text?.is_edit ? "Update" : "Add"} style={styles.customButton} />
                </View>
            </View>
        </View>
    )
}
export default AddToDo