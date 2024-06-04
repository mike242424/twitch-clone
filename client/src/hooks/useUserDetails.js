import { useState } from 'react';

function getUserDetails() {
  const userDetails = localStorage.getItem('user');

  if (useUserDetails) {
    return JSON.parse(userDetails);
  }

  return null;
}

export function useUserDetails() {
  const [userDetails, setUserDetails] = useState(getUserDetails());

  function logout() {
    localStorage.removeItem('user');
    setUserDetails(null);
  }

  return {
    isLogged: Boolean(useUserDetails),
    username: userDetails?.username ? useUserDetails.username : 'Guest',
    logout,
  };
}
