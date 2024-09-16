/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux-toolkit/store/store';
import GalleryPage from './pages/GalleryPage';
import DetailsPage from './pages/DetailsPage';
const Stack = createStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Gallery"
          headerMode="none"
        >
          <Stack.Screen
            name="Gallery"
            component={GalleryPage}
          />
          <Stack.Screen
            name="Details"
            component={DetailsPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
