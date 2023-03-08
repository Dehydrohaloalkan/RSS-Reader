import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import OpenNewsScreen from '../screens/OpenNewsScreen';

const Stack = createNativeStackNavigator();

type Props = {}

const Navigation = (props: Props) => {
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
  )
}

export default Navigation