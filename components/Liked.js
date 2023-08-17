
// import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const AdopcionForm = () => {
//   const [nombre, setNombre] = useState('');
//   const [direccion, setDireccion] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [nombreMascota, setNombreMascota] = useState('');
//   const [razonAdopcion, setRazonAdopcion] = useState('');

//   const handleSubmit = () => {
//     console.log('Datos del formulario:', {
//       nombre,
//       direccion,
//       email,
//       telefono,
//       nombreMascota,
//       razonAdopcion,
//     });
//     clearForm();
//   };

//   const clearForm = () => {
//     setNombre('');
//     setDireccion('');
//     setEmail('');
//     setTelefono('');
//     setNombreMascota('');
//     setRazonAdopcion('');
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Formulario de Adopción 🐶</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>👤 Nombre del adoptante:</Text>
//         <TextInput
//           style={styles.input}
//           value={nombre}
//           onChangeText={setNombre}
//           placeholder="Escribe tu nombre completo"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>🏠 Dirección del adoptante:</Text>
//         <TextInput
//           style={styles.input}
//           value={direccion}
//           onChangeText={setDireccion}
//           placeholder="Escribe tu dirección"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>📧 Email del adoptante:</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Escribe tu correo electrónico"
//           keyboardType="email-address"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>📞 Teléfono del adoptante:</Text>
//         <TextInput
//           style={styles.input}
//           value={telefono}
//           onChangeText={setTelefono}
//           placeholder="Escribe tu número de teléfono"
//           keyboardType="phone-pad"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>🐶 Nombre de la mascota:</Text>
//         <TextInput
//           style={styles.input}
//           value={nombreMascota}
//           onChangeText={setNombreMascota}
//           placeholder="Escribe el nombre de la mascota a adoptar"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>❓ ¿Por qué te gustaría adoptarla?</Text>
//         <TextInput
//           style={[styles.input, styles.multilineInput]}
//           value={razonAdopcion}
//           onChangeText={setRazonAdopcion}
//           placeholder="Explícanos por qué te gustaría adoptar esta mascota"
//           multiline={true}
//           numberOfLines={4}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Enviar formulario</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F4F4F4',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#555',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     backgroundColor: 'white',
//   },
//   multilineInput: {
//     height: 100,
//   },
//   button: {
//     backgroundColor: '#FF90BB',
//     borderRadius: 5,
//     padding: 15,
//     alignItems: 'center',
//     alignSelf: 'center',
//     width: '60%',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default AdopcionForm;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Liked = () => {
  const [adopt, setAdop] = useState(null);

  const renderAdoptedDog = ({ item }) => (
    <View style={styles.dogContainer}>
      <Image source={{ uri: item.image }} style={styles.dogImage} />
      <Text style={styles.dogName}>{item.informacionMascota.nombre}</Text>
      <Text style={styles.dogInfo}>
        {item.informacionMascota.especie} | {item.informacionMascota.edad} años
      </Text>
      <Text style={styles.dogInfo}>raza: {item.informacionMascota.raza}</Text>
      <Text style={styles.dogInfo}>
        estatus: {item.status ? <>Adoptado</> : <>Pendiente</>}
      </Text>
    </View>
  );

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      let user = JSON.parse(await AsyncStorage.getItem('user'));
      const response = await axios.get(
        'https://terra-ogo9.onrender.com/adopcion/byUser/' + user[0].id
      );
      setAdop(response.data);
    } catch (error) {
      console.error('Error al cargar perfil:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mascotas en adopcion</Text>
      <FlatList
        data={adopt}
        keyExtractor={(item) => item.id}
        renderItem={renderAdoptedDog}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  dogContainer: {
    marginTop: 10,  // Cambiamos marginBottom por marginTop
    backgroundColor: '#FFD8A9',
    borderRadius: 8,
    padding: 12,
  },
  dogImage: {
    width: '50%',
    height: 20,
    borderRadius: 8,
    marginBottom: 8,
  },
  dogName: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  dogInfo: {
    fontSize: 14,
    color: '#555555',
  },
});

export default Liked;
