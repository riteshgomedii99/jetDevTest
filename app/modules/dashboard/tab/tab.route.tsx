import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import HomeScreen from "./home";
import FavoriteScreen from "./favorite";

import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { FAVORITE_SCREEN, HOME_SCREEN, LOGIN_SCREEN } from "@app/routes/app-route-labels";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const { Navigator, Screen } = createBottomTabNavigator();
// navigator state
const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return { selectedIndex, onSelect: setSelectedIndex };
};
// botoom navigator
export const BottomNavigationAccessoriesShowcase = () => {
    const bottomState = useBottomNavigationState();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <React.Fragment>
            <BottomNavigation style={styles.bottomNavigation}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
            >
                <BottomNavigationTab  title='Home' icon={PersonIcon} />
                <BottomNavigationTab title='Favorite' icon={FavoriteIcon} />
            </BottomNavigation>
        </React.Fragment>
    );
}
// bottom bar 
const BottomTabBar = ({ navigation, state }: { navigation: any, state: any }) => {
    return (
        <BottomNavigation indicatorStyle={{backgroundColor: '#e12e6f', height: 4}}
            selectedIndex={state.index}
            onSelect={index =>
                navigation.navigate(state.routeNames[index])
            }
        >
            <BottomNavigationTab      title='Home' icon={PersonIcon} />
            <BottomNavigationTab title='Favorite' icon={FavoriteIcon} />
        </BottomNavigation>
    )
}

// app root tab bar
export const AppTab = (topProps: any) => {
    return (<Navigator
        tabBar={(props: any) => <BottomTabBar {...props} />}
        initialRouteName={HOME_SCREEN}
        screenOptions={{
            headerShown: false
        }}>
        <Screen name={HOME_SCREEN} component={HomeScreen} />
        <Screen name={FAVORITE_SCREEN} component={FavoriteScreen} />


    </Navigator>
    )
}



// style
const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8,
    },
});
// person icon
const PersonIcon = (props: any) => (
    <Icon {...props} name='home-outline' />
);
// favorite icon
const FavoriteIcon = (props: any) => (
    <Icon {...props} name='star-outline' />
);