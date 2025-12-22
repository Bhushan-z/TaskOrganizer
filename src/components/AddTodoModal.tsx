import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

interface AddTodoModalProps {
  visible: boolean;          // Controls if modal is open
  onClose: () => void;       // Callback to close modal
  onAdd: (text: string) => void; // Callback to add a todo
}

const AddTodoModal: React.FC<AddTodoModalProps> = ({ visible, onClose, onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Add New Task</Text>
          <TextInput
            placeholder="Enter your task"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.btn, { backgroundColor:COLORS.accent }]} onPress={handleAdd}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { backgroundColor:COLORS.textGray }]} onPress={onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  overlay: { flex: 1,fontFamily:'Switzer-Variable', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  container: { width: '85%', backgroundColor:"white", borderRadius: 20, padding: 20 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 15 ,color:COLORS.textGray },
  input: { borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 20,color:COLORS.textGray ,fontFamily:'Switzer-Variable', },
  buttons: { flexDirection: 'row', justifyContent: 'space-between' },
  btn: { flex: 1, padding: 12, borderRadius: 10, alignItems: 'center', marginHorizontal: 5 },
  btnText: { color: 'white', fontWeight: '700', fontFamily:'Switzer-Variable', },
});
