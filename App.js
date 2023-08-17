import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile'; 
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import AdopcionForm from '/components/AdopcionForm'

import SplashScreen from './components/SplashScreen'
//async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//axios
import axios from 'axios';

import { URL } from './api/url';


//authcontext
import AuthContext from './store/AuthContext'
import Login from './login'
import Registrousu from './components/Registrousu';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Patitas Felices"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Formulario de Adopcion"
        component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};




const App = () => {
  //variable para establecer login y logut
   const [state,dispatch]=React.useReducer(
     (prevState,action)=>{
         switch(action.type){
            case 'RESTORE_TOKEN':
              return{
                 ...prevState,
                 userToken:action.token,
                 isLoading:false
              };
            case 'SIGN_IN':
              return{
                 ...prevState,
                 isSignout:false,
                 userToken:action.token,
                 isLoading:false,
              };
            case 'SIGN_OUT':
              return{
                  ...prevState,
                  isSignout:true,
                  userToken:null
              };
            case 'loading':
              return{
                 isLoading:true
              }
         }
     },
     {
      isLoading:true,
      isSignout:false,
      userToken:null
     }
   )

   //gerar las funciones de login
   React.useEffect(()=>{
       const bootStrapAsync=async ()=>{
          let userToken;

          try {
            userToken= await AsyncStorage.getItem('user');
          } catch (error) {
            userToken=null
          }

          dispatch({ type: 'RESTORE_TOKEN', token: userToken});
       }

       bootStrapAsync();
   },[])
   
  const authContext=React.useMemo(
    ()=>({
      signIn:async (data)=>{
          let user=null;
          try {
             console.log(data)
            let resp = await axios.post(URL+'/user/login',data);
             console.log(resp.data)
            user=resp.data;
             if(user[0])
                 await AsyncStorage.setItem('user',JSON.stringify(user));
                 
          } catch (error) {
            user=[]
          }

          dispatch({ type: 'SIGN_IN', token: user ? ["id"]: null})

      },
      signOUt:async ()=>{
        await AsyncStorage.clear();
        dispatch({ type: 'SIGN_OUT' });
      }
    }),[])

  return (
    <AuthContext.Provider value={authContext}>
        <NavigationContainer>
           {state.isLoading?(
            <Stack.Navigator>
               <Stack.Screen name=" "  component={SplashScreen} />
             </Stack.Navigator>
            ): state.userToken==null?(
              <Stack.Navigator>
              <Stack.Screen
                name="SignIn"
                component={Login}
                options={{
                  title: 'login',
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={Registrousu}
                options={{
                  title: 'crear usuario',
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            </Stack.Navigator>
            ):(
              <Stack.Navigator>
              <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Details"
                component={Details}
                options={{headerShown: false}}
              />
               {/* <Stack.Screen
                name="AdopcionForm"
                component={AdopcionForm}
                options={{headerShown: false}}
              /> */}
            </Stack.Navigator>
            )
           }
       </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;


// import NavContener from "./components/Navigation";

// export default function App(){
//   return(
// <NavContener/>
//   );
// }