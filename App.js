// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuProvider } from '../contexts/MenuContext'; // Import MenuProvider
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import AddMenuItemScreen from '../screens/AddMenuItemScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <MenuProvider>  {/* Wrap your app with the MenuProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
