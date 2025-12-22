import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS } from '../constants/colors';
import { isValidEmail } from '../utils/validation';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type LoginScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'Login'>;
const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    if (!isValidEmail(form.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email');
      return;
    }

    if (form.password.length < 6) {
      Alert.alert('Weak Password', 'Minimum 6 characters required');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Logged in successfully');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.skip}
        onPress={() => navigation.replace('HomeTabs')}
      >Skip</Text>

      <View style={styles.card}>
        <Text style={styles.title}>
          Task<Text style={{ color: COLORS.accent }}>Organizer</Text>
        </Text>

        <Text style={styles.subtitle}>
          Organize your tasks like a pro
        </Text>

        <View style={styles.form}>
          <InputField
            placeholder="Email"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
          />

          <InputField
            placeholder="Password"
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setShowPassword(prev => !prev)}
          >
            <MaterialIcons
              name={showPassword ? 'remove-red-eye' : 'visibility-off'}
              size={22}
              color={COLORS.textGray}
            />
            <Text style={styles.toggleText}>
              {showPassword ? 'Hide Password' : 'View Password'}
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            title="Login"
            onPress={handleLogin}
            loading={loading}
          />

          <Text style={styles.signup}>
            New here? <Text style={styles.link}>Create an account</Text>
          </Text>

          <Text style={styles.or}> Or login with</Text>

          <View style={styles.social}>
            <Ionicons name="logo-google" size={22} color={COLORS.textGray} />
            <Ionicons name="logo-twitter" size={22} color={COLORS.textGray} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical:5,
    borderTopLeftRadius:15,
    color: COLORS.accent,
    fontWeight: '500',
  },
  card: {
    width: '88%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 25,
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
  },
  form: {
    marginTop: 30,
  },
  passwordToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  toggleText: {
    fontSize: 12,
    marginLeft: 5,
  },
  signup: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  link: {
    textDecorationLine:'underline',
  },
  or: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '600',
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
});
