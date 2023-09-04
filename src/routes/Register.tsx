import React from 'react';
import { useForm } from 'react-hook-form';
import {
  View,
  Text,

  Button,
  Alert,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Form from '../components/Form';
import Input from '../components/Input';

import {registerStyles} from '../styles/register.style';

import { type RegisterFormData } from '../interfaces';

import { validation } from '../utils/validation';
import { postNewUser } from '../utils/api.config';


const Register: React.FC = () => {
  const { handleSubmit, register, setValue, errors } = useForm<
    RegisterFormData
  >();

  // const submitAlert = (data: RegisterFormData): void => {
  //   Alert.alert(JSON.stringify(data));
  // };

  const submitForm = (data: RegisterFormData) => {
    postNewUser(data);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={registerStyles.container}>
        <Form {...{ register, setValue, validation, errors }}>
          <Input style={registerStyles.userName} name="username" label="Username" />
          <Input style={registerStyles.inputs} name="email" label="Email" />
          <Input style={registerStyles.inputs} name="password" label="Password" />
          <Button title="register" onPress={handleSubmit(submitForm)}>
            Submit
          </Button>
        </Form>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
