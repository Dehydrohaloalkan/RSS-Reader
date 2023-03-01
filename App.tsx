import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import OpenNewsScreen from './screens/OpenNewsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="News">
                <Stack.Screen
                    name="News"
                    component={HomeScreen}
                    options={{
                        title: "News",
                    }}
                />
                <Stack.Screen
                    name="OpenNews"
                    component={OpenNewsScreen}
                    options={{
                        title: 'Untitled',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

