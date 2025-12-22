// src/components/PrimaryButton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  loading = false,
}) => {
  return (
    <Pressable
      style={[styles.button, loading && styles.disabled]}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={styles.text}>
        {loading ? 'Please wait...' : title}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.accent,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  disabled: {
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
