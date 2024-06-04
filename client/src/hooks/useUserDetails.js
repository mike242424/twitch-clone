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
    setUserDetails(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  }

  return {
    isLoggedIn: userDetails ? true : false,
    username: userDetails?.username ? useUserDetails.username : 'Guest',
    token: userDetails?.token ? userDetails.token : null,
    logout,
  };
}
