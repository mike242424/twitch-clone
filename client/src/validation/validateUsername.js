export function validateUsername(username) {
  const regex = /^\S{3,15}$/;
  return regex.test(username);
}
