/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
// import Pages from './pages/pages';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageGallery from './components/ImageGallery';
import Details from './components/Details';
import { Provider } from 'react-redux';
import store from './redux-toolkit/store/store';
const Stack = createStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator
          initialRouteName="Gallery"
          headerMode="none"
        >
          <Stack.Screen
            name="Gallery"
            component={ImageGallery}
          />
          <Stack.Screen
            name="Details"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
