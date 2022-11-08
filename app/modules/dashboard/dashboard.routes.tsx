import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTab } from './tab/tab.route';
import { APP_TAB } from '@app/routes/app-route-labels';

const DashBoardStack = createNativeStackNavigator();
// main root navigater
export const MainNavigator = () => {
    return <DashBoardStack.Navigator
        initialRouteName={APP_TAB}
        screenOptions={{
            headerShown: false
        }}>
        <DashBoardStack.Screen name={APP_TAB} component={AppTab} />

    </DashBoardStack.Navigator>
}

