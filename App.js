// Core
import React, { StrictMode, useEffect, useState } from 'react';
// Utils & Config
import Config from 'react-native-config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Routes from './Routes';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServicesContext = React.createContext();

const googleSignInConfig = {
  webClientId: Config.GOOGLE_WEB_CLIENT_ID,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess: true,
  forceCodeForRefreshToken: false,
  iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
  googleServicePlistPath: '',
  profileImageSize: 120
};

function App() {
  const [user, setUserEstate] = useState();
  const [profile, setProfile] = useState();
  const [services, setServicesEstate] = useState();

  const setUser = user => {
    console.log('user ==> ', user);
    setUserEstate(user);
  };

  const setServices = data => {
    setServicesEstate(data);
  };

  useEffect(() => {
    GoogleSignin.configure(googleSignInConfig);
  }, []);

  return (
    <StrictMode>
      <SafeAreaProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <ProfileContext.Provider value={{ profile, setProfile }}>
            <ServicesContext.Provider value={{ services, setServices }}>
              <Routes />
            </ServicesContext.Provider>
          </ProfileContext.Provider>
        </UserContext.Provider>
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default App;
