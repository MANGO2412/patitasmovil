// import React from 'react';
// import { useFocusEffect} from '@react-navigation/native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   ScrollView,
//   ImageBackground
// } from 'react-native';
// import {useState, useCallback }  from 'react';
// import colors from '../assets/colors/colors';
// import Feather from 'react-native-vector-icons/Feather';
// import Entypo from 'react-native-vector-icons/Entypo';
// import activitiesData from '../assets/data/activitiesData';
// import discoverCategoriesData from '../assets/data/discoverCategoriesData';
// import learnMoreData from '../assets/data/learnMoreData';
// import discoverData from '../assets/data/discoverData';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import profile from '../assets/images/person.png';
// import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

// Feather.loadFont();
// Entypo.loadFont();


// const Home = ({navigation}) => {
//   const [pets, setPerros] = useState([]);
//     const fetchPerros = async () => {
//       try {
//         const response = await axios.get('https://terra-ogo9.onrender.com/pet'); // Reemplaza 'https://tu-api.com/patients' con la URL de tu API
//         setPatients(response.data);
//         await SecureStore.setItemAsync('pets',JSON.stringify(response.data))
//       } catch (error) {
//         console.error('Error al obtener los perros:', error);
//         setPerros([])
//       }
//     };

//     useFocusEffect(
//       useCallback(() => {
//          fetchPerros()
//         // Do something when the screen is focused
//         return () => {};
//       }, [])
//     );
//   const renderDiscoverItem = ({item}) => {
  
//     return (
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate('Details', {
//             item: item,
//           })
//         }>
//         <ImageBackground
//           source={item.image}
//           style={[
//             styles.discoverItem,
//             {marginLeft: item.id === 'discover-1' ? 20 : 0},
//           ]}
//           imageStyle={styles.discoverItemImage}>
//           <Text style={styles.discoverItemTitle}>{item.title}</Text>
//           <View style={styles.discoverItemLocationWrapper}>
//             <Entypo name="location-pin" size={18} color={colors.white} />
//             <Text style={styles.discoverItemLocationText}>{item.location}</Text>
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//     );
//   };

//   const renderActivityItem = ({item}) => {
//     return (
//       <View
//         style={[
//           styles.activityItemWrapper,
//           {
//             marginLeft: item.id === 'activities-1' ? 20 : 0,
//           },
//         ]}>
//         <Image source={item.image} style={styles.activityItemImage} />
//         {pets.map((pet)=>(
//           <View key={pet.id}>
//           <Text style={styles.activityItemText}>{pet.nombre}</Text>
//           </View>
//         ))
//         }
        
//       </View>
//     );
//   };

//   const renderLearnMoreItem = ({item}) => {
//     return (
//       <ImageBackground
//         source={item.image}
//         style={[
//           styles.learnMoreItem,
//           {
//             marginLeft: item.id === 'learnMore-1' ? 20 : 0,
//           },
//         ]}
//         imageStyle={styles.learnMoreItemImage}>
//         {pets.map((pet)=>(
//         <Text style={styles.learnMoreItemText}>{pet.nombre}</Text>
//         ))
//         }
//       </ImageBackground>
        
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* Header */}
//         <SafeAreaView>
//           <View style={styles.menuWrapper}>
//             <Feather
//               name="menu"
//               size={32}
//               color={colors.black}
//               style={styles.menuIcon}
//             />
//             <Image source={profile} style={styles.profileImage} />
//           </View>
//         </SafeAreaView>

//         {/* Discover */}
//         <View style={styles.discoverWrapper}>
//          <Text style={styles.discoverTitle}>Mascotas</Text>
//           <View style={styles.discoverCategoriesWrapper}>
//             <Text style={[styles.discoverCategoryText, {color: colors.orange}]}>
            
//             </Text>
//             <Text style={styles.discoverCategoryText}></Text>
//             <Text style={styles.discoverCategoryText}></Text>
//             <Text style={styles.discoverCategoryText}></Text>
//           </View>
//           <View style={styles.discoverItemsWrapper}>
//             <FlatList
//               data={discoverData}
//               renderItem={renderDiscoverItem}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//             />
//           </View>
//         </View>


//         {/* Learn More */}
//         <View style={styles.learnMoreWrapper}>
//           <Text style={styles.learnMoreTitle}>Nuestras instalaciones</Text>
//           <View style={styles.learnMoreItemsWrapper}>
//             <FlatList
//               data={learnMoreData}
//               renderItem={renderLearnMoreItem}
//               keyExtractor={(item) => item.id}
//               horizontal
//               showsHorizontalScrollIndicator={false}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     color: colors.white,
//   },
//   menuWrapper: {
//     marginHorizontal: 20,
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 52,
//     height: 52,
//     borderRadius: 10,
//   },
//   discoverWrapper: {
//     // marginHorizontal: 20,
//     marginTop: 20,
//   },
//   discoverTitle: {
//     marginHorizontal: 20,
//     fontFamily: 'Lato-Bold',
//     fontSize: 32,
//   },
//   discoverCategoriesWrapper: {
//     marginHorizontal: 20,
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   discoverCategoryText: {
//     marginRight: 30,
//     fontFamily: 'Lato-Regular',
//     fontSize: 16,
//     color: colors.gray,
//   },
//   discoverItemsWrapper: {
//     paddingVertical: 20,
//   },
//   discoverItem: {
//     width: 170,
//     height: 250,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     marginRight: 20,
//   },
//   discoverItemImage: {
//     borderRadius: 20,
//   },
//   discoverItemTitle: {
//     fontFamily: 'Lato-Bold',
//     fontSize: 18,
//     color: colors.white,
//   },
//   discoverItemLocationWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   discoverItemLocationText: {
//     marginLeft: 5,
//     fontFamily: 'Lato-Bold',
//     fontSize: 14,
//     color: colors.white,
//   },
//   activitiesWrapper: {
//     marginTop: 10,
//   },
//   activitiesTitle: {
//     marginHorizontal: 20,
//     fontFamily: 'Lato-Bold',
//     fontSize: 24,
//     color: colors.black,
//   },
//   activitiesItemsWrapper: {
//     paddingVertical: 20,
//   },
//   activityItemWrapper: {
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   activityItemImage: {
//     width: 36,
//   },
//   activityItemText: {
//     marginTop: 5,
//     fontFamily: 'Lato-Bold',
//     fontSize: 14,
//     color: colors.gray,
//   },
//   learnMoreWrapper: {
//     marginTop: 10,
//   },
//   learnMoreTitle: {
//     marginHorizontal: 20,
//     fontFamily: 'Lato-Bold',
//     fontSize: 24,
//     color: colors.black,
//   },
//   learnMoreItemsWrapper: {
//     paddingVertical: 20,
//   },
//   learnMoreItem: {
//     width: 170,
//     height: 180,
//     justifyContent: 'flex-end',
//     marginRight: 20,
//   },
//   learnMoreItemImage: {
//     borderRadius: 20,
//   },
//   learnMoreItemText: {
//     fontFamily: 'Lato-Bold',
//     fontSize: 18,
//     color: colors.white,
//     marginHorizontal: 10,
//     marginVertical: 20,
//   },
// });
//no modificar




// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const Home = ({ navigation }) => {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get('https://terra-ogo9.onrender.com/pet');
//       setPets(response.data);
//     } catch (error) {
//       console.error('Error al obtener los perros:', error);
//       setPets([]);
//     }
//   };

//   const fetchPetDetails = async (id) => {
//     try {
//       const response = await axios.get(`https://terra-ogo9.onrender.com/pet/${id}`);
//       console.log('Detalles de la mascota:', response.data);
//     } catch (error) {
//       console.error('Error al obtener los detalles de la mascota:', error);
//     }
//   };

//   const adoptPet = (id) => {
//     console.log('Adoptar mascota con ID:', id);
//   };

//   const renderLearnMoreItem = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => fetchPetDetails(item.id)}>
//         <ImageBackground
//           source={{ uri: item.image }}
//           style={styles.learnMoreItem}>
//           <View style={styles.overlay}>
//             <Text style={styles.petName}>{item.nombre}</Text>
//             <Text style={styles.petInfo}>{item.especie} | {item.raza}</Text>
//             <Text style={styles.petInfo}>Edad: {item.edad}</Text>
//             <Text style={styles.petInfo}>Tamaño: {item.tamano}</Text>
//             <Text style={styles.petInfo}>Descripción: {item.descr}</Text>
            
//             <TouchableOpacity
//               style={styles.adoptButton}
//               onPress={() => adoptPet(item.id)}>
//               <Text style={styles.adoptButtonText}>Adoptar</Text>
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//     );
//   };
  
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.learnMoreWrapper}>
//         {pets.map((item) => (
//           <View key={item.id} style={styles.petContainer}>
//             {renderLearnMoreItem({ item })}
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   learnMoreWrapper: {
//     marginTop: 20,
//     paddingHorizontal: 15,
//     alignItems: 'center', // Centrar los elementos horizontalmente
//   },
//   petContainer: {
//     marginBottom: 20, // Espacio entre contenedores
//     width: '100%', // Ancho completo
//   },
//   learnMoreItem: {
//     width: '100%', // Ancho completo
//     height: 300, // Mayor altura
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(225, 236, 200, 0.8)',
//     justifyContent: 'flex-end',
//     padding: 12,
//     borderRadius: 20,
//   },
//   petName: {
//     fontFamily: 'Lato-Bold',
//     fontSize: 16,
//     color: '#A0C49D',
//     marginBottom: 4,
//   },
//   petInfo: {
//     fontFamily: 'Lato-Regular',
//     fontSize: 14,
//     color: '#A0C49D',
//   },
//   adoptButton: {
//     backgroundColor: '#C4D7B2',
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginTop: 8,
//   },
//   adoptButtonText: {
//     fontFamily: 'Lato-Bold',
//     fontSize: 14,
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default Home;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Asegúrate de obtener la información del usuario de alguna manera

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get('https://terra-ogo9.onrender.com/pet');
      const data= await axios.get('https://terra-ogo9.onrender.com/adopcion');
      let resp=response.data;
      
      console.log(data.data)
      //filtrar
      for(const key in data.data){
        for(const key2 in resp){
           if(data.data[key].informacionMascota['_id']==resp[key2]['id']){
             resp.splice(key2,1);
             break;
           }
        }
      }

     console.log(resp)
      

      setPets(resp);
    } catch (error) {
      console.error('Error al obtener los perros:', error);
      setPets([]);
    }
  };

  const sendAdoptionRequest = async (petId) => {

    let user = JSON.parse(await AsyncStorage.getItem('user'));
    try {
      console.log(requestData)
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
      
      const requestData = {
        usuario: user[0].id,
        mascota: petId,
       
      };
      console.log(requestData)
      const response = await axios.post('https://terra-ogo9.onrender.com/adopcion/new', requestData);
      console.log('Solicitud de adopción enviada:', response.data);
      // Puedes realizar acciones adicionales aquí, como mostrar un mensaje de éxito.
    } catch (error) {
      console.error('Error al enviar la solicitud de adopción:', error);
    }

    await fetchPets()
  };

  const renderLearnMoreItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => fetchPetDetails(item.id)}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.learnMoreItem}>
          <View style={styles.overlay}>
            <Image
              source={{ uri: 'https://i.pinimg.com/236x/fd/94/92/fd949244ae09875b84691464a4e59e25.jpg' }}
              style={styles.petImage}
            />
            <Text style={styles.petName}>{item.nombre}</Text>
            <Text style={styles.petInfo}>{item.especie} | {item.raza}</Text>
            <Text style={styles.petInfo}>Edad: {item.edad}</Text>
            <Text style={styles.petInfo}>Tamaño: {item.tamano}</Text>
            <Text style={styles.petInfo}>Descripción: {item.descr}</Text>
            
            <TouchableOpacity
              style={styles.adoptButton}
              onPress={() => sendAdoptionRequest(item.id)}>
              <Text style={styles.adoptButtonText}>Adoptar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.learnMoreWrapper}>
        {pets.map((item) => (
          <View key={item.id} style={styles.petContainer}>
            {renderLearnMoreItem({ item })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  learnMoreWrapper: {
    marginTop: 20,
    paddingHorizontal: 15,
    alignItems: 'center', 
  },
  petContainer: {
    marginBottom: 20,
    width: '100%',
  },
  learnMoreItem: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgb(236, 223, 200)',
    justifyContent: 'flex-end',
    padding: 12,
    borderRadius: 20,
  },
  petName: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  petInfo: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#000000',
  },
  adoptButton: {
    backgroundColor: '#DF7861',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  adoptButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  petImage: {
    width: '110%',
    height: '110%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Home;
