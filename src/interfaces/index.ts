import { ValidationRule, FieldError } from 'react-hook-form';

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface ValidationMap {
  [key: string]: ValidationRule;
}

interface ErrorMap {
  [key: string]: FieldError | undefined;
}

export interface FormProps {
  children: JSX.Element | JSX.Element[];
  register: (
    { username }: Pick<RegisterFormData, 'username'>,
    validation?: ValidationRule,
  ) => void;
  errors: ErrorMap;
  validation: ValidationMap;
  setValue: (name: string, value: string, validate?: boolean) => void;
}
