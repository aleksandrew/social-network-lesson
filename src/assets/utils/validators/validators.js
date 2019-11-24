export const required = value => {
  if (value) return undefined;

  return "Field is required"
};

export const maxLengthCreator = maxLength => value => {

  return value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined;
};
