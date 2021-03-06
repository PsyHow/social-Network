export const required = (value: any) => {
  if (value) return undefined;

  return 'Field is required';
};
export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbol`;

  return undefined;
};

export type FieldValidatorType = (value: string) => string | undefined;
