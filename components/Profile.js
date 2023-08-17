import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AuthContext from '../store/AuthContext';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import defaultUserIcon from '../assets/12345.png'; 

const UserProfile = () => {
  const [data, setData] = useState(null);
  const { signOUt } = useContext(AuthContext);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      let user = JSON.parse(await AsyncStorage.getItem('user'));
      console.log(user)
      const response = await axios.get('https://terra-ogo9.onrender.com/user/' + user[0].id);
      setData(response.data);
    } catch (error) {
      console.error('Error al cargar perfil:', error);
    }
  };

  return (
    <View style={styles.container}>
      {data && (
        <View style={[styles.profileCard, { backgroundColor: '#FCF8E8' }]}>
          <Text style={styles.userName}>{data.nombre}</Text>
          <Text style={styles.userContact}>{data.direccion}</Text>
          <Text style={styles.userContact}>{data.correo}</Text>
          <Text style={styles.userContact}>{data.tel}</Text>
        </View>
      )}

      {/* Otro código del componente... */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={signOUt}
      >
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  profileCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  userContact: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    color: '#555',
  },
  petCard: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  petIcon: {
    marginBottom: 10,
  },
  petTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  petName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  petInfo: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  logoutButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#ECB390',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfile;
