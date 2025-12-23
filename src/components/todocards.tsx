import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface TodoCardProps {
  task: string;
  onRemove:()=>void;
}
const TodoCard: React.FC<TodoCardProps>= ({task,onRemove}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.card}>
      {/* Checkbox */}
     <View style={styles.content}>
         <TouchableOpacity
        style={[styles.checkbox, checked && styles.checked]}
        onPress={() => setChecked(prev => !prev)}
      >
        {checked && <View style={styles.innerCircle} />}
      </TouchableOpacity>

      {/* Todo Text */}
      <Text style={[styles.text, checked && styles.textChecked]}>
        {task}
      </Text>
       </View>

 {checked && (
    <TouchableOpacity  onPress={onRemove}>
      <Ionicons name="trash" size={22} color={COLORS.accent} />
    </TouchableOpacity>
  )}
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
      alignItems: "flex-start",
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2,
    
  },
  content: {
    flex: 1,                 // take remaining width
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: COLORS.accent,
  },
  innerCircle: {
    width: 12,
    height: 12,
    backgroundColor: COLORS.accent,
    borderRadius: 6,
  },
  text: {
    flex:1,
    paddingHorizontal:5,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.primary,
    textAlign:"justify",
  
  },
  textChecked: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
