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
       <View style={{flex:1, flexDirection:"row", padding:4}}>
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

       <TouchableOpacity
         onPress={onRemove}
        >
         {checked &&<Ionicons name="trash" size={22} color={COLORS.accent} />}
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2,
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
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.primary,
  },
  textChecked: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
