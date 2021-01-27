import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@views/home';
import { Colors, Typography } from '../utils';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: Colors.TEXT.light,
                headerStyle: { 
                    backgroundColor: Colors.NAV_BAR,
                },
                headerTitleStyle: {
                    color: Colors.TEXT.light,
                    fontSize: Typography.SIZE.navbarTitle
                }
            }}
        >

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: 'Home'
                }}
            />
            
        </Stack.Navigator>
    );
};

export default RootStack;
