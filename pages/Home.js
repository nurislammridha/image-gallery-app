/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import car from '../assets/images/car.jpg'
import ImageGallery from '../components/ImageGallery';
import Details from '../components/Details';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Home = () => {
    return (<>
        <View><Text>sddfgsg</Text></View>
        <NavigationContainer>
            {/* Rest of your app code */}
            <Stack.Navigator
                initialRouteName="Gallery"
            // headerMode="none"
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
    </>);
}

export default Home;
