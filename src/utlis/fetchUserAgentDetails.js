import React, { useEffect, useState } from 'react';

function UserInformation() {
  const [userBrowser, setUserBrowser] = useState(navigator.userAgent);
  const [userOS, setUserOS] = useState(getUserOS());
  const [userIP, setUserIP] = useState('');
  const [userAgent, setUserAgent] = useState(navigator.userAgent);

  useEffect(() => {
    // Fetch user's IP address using a free service (e.g., ipinfo.io)
    fetch('https://ipinfo.io/json?token=fa258001f7a2d6')
      .then((response) => response.json())
      .then((data) => setUserIP(data.ip))
      .catch((error) => console.error('Error fetching IP:', error));
  }, []);

  function getUserOS() {
    const platform = window.navigator.platform;
    if (platform.includes('Win')) return 'Windows';
    if (platform.includes('Mac')) return 'MacOS';
    if (platform.includes('Linux')) return 'Linux';
    return platform;
  }

  return (
    <div>
      <p>User Browser: {userBrowser}</p>
      <p>User Operating System: {userOS}</p>
      <p>User IP Address: {userIP}</p>
      <p>User Agent: {userAgent}</p>
    </div>
  );
}

export default UserInformation;
