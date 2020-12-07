import React, { useEffect, useRef, createElement } from 'react';
import { TextInput } from 'react-native';
import { ValidationRule, FieldError } from 'react-hook-form';

interface ValidationMap {
  [key: string]: ValidationRule;
}

interface ErrorMap {
  [key: string]: FieldError | undefined;
}

interface FormProps {
  children: JSX.Element | JSX.Element[];
  register: ({ name }: { name: string }, validation?: ValidationRule) => void;
  errors: ErrorMap;
  validation: ValidationMap;
  setValue: (name: string, value: string, validate?: boolean) => void;
}

const Form = ({
  register,
  errors,
  setValue,
  validation,
  children,
}: FormProps) => {
  const inputRef = useRef<Array<TextInput>>([]);

  useEffect(() => {
    (Array.isArray(children) ? [...children] : [children]).forEach((child) => {
      if (child.props.name) {
        register({ name: child.props.name }, validation[child.props.name]);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register]);

  return (
    <>
      {Array.isArray(children)
        ? [...children]
        : [children].map((child, idx) => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    ref: (ev: TextInput) => {
                      inputRef.current[idx] = ev;
                    },
                    onChangeText: (val: string) => {
                      setValue(child.props.name, val, true);
                    },
                    onSubmitEditing: () => {
                      inputRef.current[idx + 1]
                        ? inputRef.current[idx + 1].focus()
                        : inputRef.current[idx].blur();
                    },
                    name: child.props.name,
                    blurOnSubmit: false,
                    error: errors[child.props.name],
                  },
                })
              : child;
          })}
    </>
  );
};

export default Form;
