export function validateUsername(username) {
  const regex = /^\S{3,10}$/;
  return regex.test(username);
}
