// src/components/InputField.tsx
import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS } from '../constants/colors';

interface InputFieldProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
  },
});
