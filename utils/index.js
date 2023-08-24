export const validateEmail = email => {
  return email.match(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
};

export const validateName = name => {
  return name.match(/^[a-zA-Z]+$/);
};
