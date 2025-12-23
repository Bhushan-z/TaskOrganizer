import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors';
import { TextInput } from 'react-native-gesture-handler';

interface AddNoteModalProp{
visible:boolean;
onClose :()=>void;
onAdd :(title:string ,note:string)=>void;
}

const AddNoteModal:React.FC<AddNoteModalProp>= ({
    visible,
    onClose,
    onAdd
}) => {
    const [title,setTitle] =useState("");
    const [note ,setNote]=useState("");
    const handleSave =()=>{
        if(!title.trim()&&!note.trim())return;

        onAdd(title.trim(),note.trim());
        setTitle("");
        setNote("");
        onClose();
    }
   return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.heading}>Add Note</Text>

          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.input}
          />

          <TextInput
            placeholder="Write your note..."
            value={note}
            onChangeText={setNote}
            style={[styles.input, styles.textArea]}
            multiline
          />

          <View style={styles.actions}>
            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddNoteModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: COLORS.textGray,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.textGray,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    color: COLORS.textGray,
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: COLORS.accent,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 6,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: COLORS.textGray,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 6,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "700",
  },
});
