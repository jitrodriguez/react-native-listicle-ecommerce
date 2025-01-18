import React, {StrictMode, useEffect, useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Config from 'react-native-config';

import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

function App() {

  useEffect(()=>{
    console.log(Config.GOOGLE_WEB_CLIENT_ID)
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. "GoogleService-Info-Staging"
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  },[])

  return (
    <StrictMode>
      <SafeAreaView>
        <SignIn />
      </SafeAreaView>
    </StrictMode>
  );
}

export default App;
