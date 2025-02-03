import AsyncStorage from '@react-native-async-storage/async-storage';
import { request } from './request';
import { Alert } from 'react-native';

export const signUp = async values => {
  try {
    const response = await request({
      path: '/user/register',
      method: 'post',
      data: values
    });
    if (response) {
      const { email, password } = values;
      const loginResponse = await signIn({ email, password });
      return loginResponse;
    }
  } catch (e) {
    console.log(e);
    Alert.alert('Error', 'An error occured');
  }
};

export const signIn = async values => {
  try {
    const response = await request({
      path: '/user/login',
      method: 'post',
      data: values
    });

    if (response?.data?.token) {
      // Just for practice purposes, we are storing the token in AsyncStorage
      // on a real app, should use a more secure way to store tokens like Keychain
      await AsyncStorage.setItem('token', response.data.token);
      return response.data.token;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProfile = async () => {
  try {
    const response = await request({
      path: '/user/profile'
    });
    if (response) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateProfile = async data => {
  try {
    const response = await request({
      path: '/user/profile',
      method: 'patch',
      data
    });
    if (response) {
      const profile = await getProfile();
      return profile;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getServices = async () => {
  try {
    const response = await request({
      path: '/services'
    });
    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log(e.response);
  }
};

export const updateService = async (id, data) => {
  try {
    const response = await request({
      path: '/services',
      method: 'patch',
      data: {
        servicesId: id,
        ...data
      }
    });
    if (response) {
      const services = await getServices();
      return services;
    }
  } catch (e) {
    console.log(e);
  }
};
export const addService = async data => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    const response = await request({
      path: '/services',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    });
    if (response) {
      const services = await getServices();
      return services;
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteService = async id => {
  try {
    const response = await request({
      path: '/services',
      method: 'delete',
      data: {
        servicesId: id
      }
    });
    if (response) {
      const services = await getServices();
      return services;
    }
  } catch (e) {
    console.log(e);
  }
};
