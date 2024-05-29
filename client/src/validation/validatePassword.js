export function validatePassword(password) {
  const regex = /^[a-zA-Z0-9]{3,30}$/;
  return regex.test(password);
}
