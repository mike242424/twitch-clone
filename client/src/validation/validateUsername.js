export function validateUsername(username) {
  const regex = /^\S{3,30}$/;
  return regex.test(username);
}
