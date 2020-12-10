export const validation = {
  name: {
    required: {
      value: true,
      message: 'Email is required',
      pattern: {
        value: new RegExp(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ),
        message: 'Invalid Email format',
      },
    },
    password: {
      required: {
        value: true,
        message: 'Password required',
        pattern: {
          value: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/),
          message:
            'Invalid Password format: must contain one uppercase letter, one lowercase letter, one number, and at least 8 alphanumeric characters.',
        },
      },
    },
  },
};
