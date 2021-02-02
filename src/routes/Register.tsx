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

  const submitAlert = (data: RegisterFormData): void => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Form {...{ register, setValue, validation, errors }}>
          <Input style={styles.userName} name="username" label="Username" />
          <Input style={styles.inputs} name="email" label="Email" />
          <Input style={styles.inputs} name="password" label="Password" />
          <Button title="register" onPress={submitAlert}>
            Submit
          </Button>
        </Form>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
