export function validateDescription(description) {
  const regex = /^[\w\s,.!?'-]{10,200}$/;
  return regex.test(description);
}
