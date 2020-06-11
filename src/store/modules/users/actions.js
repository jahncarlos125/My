export function addUser(data) {
  return {
    type: '@users/ADD_USER',
    data,
  };
}
