// Core
import React, { useContext, useEffect } from 'react';
import { Image } from 'react-native';

// Navigation
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components & Screens
import Favorites from './src/screens/app/Favorites';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Splash from './src/screens/auth/Splash';
import ProductDetail from './src/screens/app/ProductDetail';

// Utils & Config
import { colors } from './src/utils/colors';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToRequest } from './src/utils/request';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='CreateListing' component={CreateListing} />
      <Stack.Screen name='MyListings' component={MyListings} />
    </Stack.Navigator>
  );
};

const getTabIcon = (route, focused) => {
  const icons = {
    Home: focused ? require('./src/assets/home_active.png') : require('./src/assets/home.png'),
    Favorites: focused ? require('./src/assets/favorites_active.png') : require('./src/assets/favorites.png'),
    ProfileStack: focused ? require('./src/assets/profile_active.png') : require('./src/assets/profile.png')
  };
  return icons[route.name];
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopColor: colors.lightGray
      },
      tabBarIcon: ({ focused }) => <Image style={{ width: 24, height: 24 }} source={getTabIcon(route, focused)} />
    })}
  >
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Favorites' component={Favorites} />
    <Tab.Screen name='ProfileStack' component={ProfileStack} />
  </Tab.Navigator>
);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white
  }
};

function Routes() {
  const { user, setUser } = useContext(UserContext);

  const checkTokenInStorage = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser({ token });
      addTokenToRequest(token);
    }
  };

  useEffect(() => {
    if (user?.token) {
      addTokenToRequest(user.token);
    }
  }, [user]);

  useEffect(() => {
    checkTokenInStorage();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.token ? (
          <>
            <Stack.Screen name='Tabs' component={Tabs} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default React.memo(Routes);
