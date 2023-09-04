import React, { forwardRef, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  TextStyle,
  TextInputProps,
} from 'react-native';

import { inputStyles } from '../styles/input.style';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
}

const Input = forwardRef<any, InputProps>((props, ref): ReactElement => {
    const { label, labelStyle, error, ...inputProps } = props;

    return (
      <View style={inputStyles.container}>
        {label && <Text style={[inputStyles.label, labelStyle]}>{label}</Text>}
        <TextInput
          autoCapitalize="none"
          ref={ref}
          // eslint-disable-next-line react-native/no-inline-inputStyles
          style={[inputStyles.input, { borderColor: error ? '#fc6d47' : '#c0cbd3' }]}
          {...inputProps}
        />
        <Text style={inputStyles.textError}>{error && error.message}</Text>
      </View>
    );
  },
);

export default Input;
