// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// const LoginScreen = () => {
//   const [isRegistering, setIsRegistering] = useState(false); // Estado para determinar si se muestra el formulario de registro
//   const [fullName, setFullName] = useState('');
//   const [correo, setcorreo] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Lógica para iniciar sesión
//     console.log('Iniciando sesión:', { correo, password });
//   };

//   const handleRegister = () => {
//     // Lógica para registrar al usuario
//     console.log('Registrando usuario:', { fullName, correo, password });
//   };

//   const toggleRegistering = () => {
//     setIsRegistering(!isRegistering); // Cambiar el estado entre inicio de sesión y registro
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('./imag/logo3.png')} style={styles.logo} />
//       <Text style={styles.title}>{isRegistering ? 'Registro' : 'Iniciar sesión'}</Text>

//       {isRegistering && (
//         <TextInput
//           style={styles.input}
//           placeholder="Nombre completo"
//           value={fullName}
//           onChangeText={(text) => setFullName(text)}
//         />
//       )}

//       <TextInput
//         style={styles.input}
//         placeholder="Correo electrónico"
//         value={correo}
//         onChangeText={(text) => setcorreo(text)}
//         keyboardType="correo-address"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Contraseña"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />

//       {isRegistering ? (
//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Registrarse</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Iniciar sesión</Text>
//         </TouchableOpacity>
//       )}

//       <TouchableOpacity onPress={toggleRegistering}>
//         <Text style={styles.toggleText}>
//           {isRegistering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   logo: {
//     width: 290,
//     height: 290,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#00A19A',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   button: {
//     backgroundColor: '#00A19A',
//     width: '100%',
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   toggleText: {
//     color: '#00A19A',
//     marginTop: 10,
//   },
// });

// export default LoginScreen;
import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AuthContext from './store/AuthContext';

function Login({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSignIn = () => {
    signIn({ correo, contrasena });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/images/felices1.png')}
      />

      <Text style={styles.heading}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignIn}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Fondo más claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 300,
    alignSelf: 'center',
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

export default Login;
