export function validateTitle(title) {
  const regex = /^[a-zA-Z0-9\s,.'-]{3,15}$/;
  return regex.test(title);
}
