import React, { useState, useRef } from 'react';
import { useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface FormState {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  pwMatch?: boolean;
  submitted?: boolean;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
  },

  userName: {
    fontSize: 16,
  },

  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const Register: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    username: '',
    email: '',
    password: '',
    pwMatch: true,
    submitted: false,
  });

  const inputRef = useRef<TextInput>(null);

  const handleChange = useCallback(
    (ev: React.ChangeEvent<{ name: any; value: string }>) => {
      const { name, value } = ev.target;
      setForm({
        ...form,
        [name]: value,
      });
    },
    [],
  );

  // const handleSubmit = (ev: React.TouchEvent): void => {
  //   ev.preventDefault();
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>register</Text>
      <TextInput
        style={styles.inputs}
        ref={inputRef}
        value={form.username}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Register;
