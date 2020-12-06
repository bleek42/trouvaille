import React, { useState, useRef } from 'react';
import { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';

interface FormState {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  pwMatch?: boolean;
  submitted?: boolean;
}

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
    [form],
  );

  // const handleSubmit = (ev: React.TouchEvent): void => {
  //   ev.preventDefault();
  // };

  return (
    <View>
      <Text>register</Text>
      <TextInput
        ref={inputRef}
        value={form.username}
        onChangeText={() => handleChange}
      />
    </View>
  );
};

export default Register;
