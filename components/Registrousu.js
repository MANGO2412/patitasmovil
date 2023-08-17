import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

function RegistroUsuario({ navigation }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    tel: '',
    direccion: '',
  });

  const finalSubmit = () => {
    if (Object.values(formData).every(value => value.trim())) {
      sendFormData();
    } else {
      showFormErrorMessage();
    }
  };

  const sendFormData = async () => {
    try {
      const response = await fetch('https://terra-ogo9.onrender.com/user/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        navigation.navigate('SignIn');
      } else {
        showErrorMessage();
      }
    } catch (error) {
      console.error('Error en la solicitud POST:', error.message);
      showErrorMessage();
    }
  };

  const inputHandle = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showFormErrorMessage = () => {
    Toast.show({
      type: 'error',
      text1: 'Por favor complete todos los campos requeridos.',
      autoHide: true,
    });
  };

  const showErrorMessage = () => {
    console.log('Error al enviar el formulario');
    Toast.show({
      type: 'error',
      text1: 'Hubo un error al enviar el formulario',
      autoHide: true,
    });
  };

  return (
    
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/ADOPPET-removebg-preview (2).png')}
      />

      <Text style={styles.heading}>Registro de Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={formData.nombre}
        onChangeText={value => inputHandle('nombre', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={formData.apellido}
        onChangeText={value => inputHandle('apellido', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={formData.correo}
        onChangeText={value => inputHandle('correo', value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={formData.contrasena}
        onChangeText={value => inputHandle('contrasena', value)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={formData.direccion}
        onChangeText={value => inputHandle('direccion', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={formData.tel}
        onChangeText={value => inputHandle('tel', value)}
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={finalSubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Toast ref={ref => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#ECB390',
    width: '60%',
    borderWidth: 1,
    borderColor: '#ECB390',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegistroUsuario;
