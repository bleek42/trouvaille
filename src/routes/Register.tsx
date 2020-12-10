import React from 'react';
import { useForm } from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Form from '../components/Form';
import Input from '../components/Input';

import { validation } from '../utils/validation';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
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
  const { handleSubmit, register, setValue, errors } = useForm<
    RegisterFormData
  >();

  const submitAlert = (data: RegisterFormData) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <Form {...{ register, setValue, validation, errors }}>
          <Input name="username" label="Username" />
          <Input name="email" label="Email" />
          <Input name="password" label="Password" />
          <Button onPress={handleSubmit}>Submit</Button>
        </Form>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
