

export const requiredRule = v => !!v || 'This field is required';

export const emailRule = v => /.+@.+\..+/.test(v) || 'Email must be valid';

export const minLengthRule = length => v => (v && v.length >= length) || `Minimum length is ${length} characters`;
