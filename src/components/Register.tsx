import React, { useState } from 'react';
import { View, Text } from 'react-native';

interface FormState {
  chars: EventTarget | null;
  submitted?: TouchEvent;
}

const Register: React.FC = () => {
  const [chars, setChars] = useState<FormState>({
    chars: null,
    submitted: false,
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setChars({
      chars: ev.target,
    });
  };

  const handleSubmit = (ev: React.TouchEvent): void => {
    ev.preventDefault();
  };
  return (
    <View>
      <Text>register</Text>
    </View>
  );
};

export default Register;
