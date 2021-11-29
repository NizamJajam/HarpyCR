import * as React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacit, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../Screens/HomeScreen"
import Details from "../Screens/Details";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerContent } from "./DrawerContent";
import Icon from "react-native-vector-icons/FontAwesome5"


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function HomeStack({ navigation }) {
    return (
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerLeft: () => (
                            <Icon
                                name="bars"
                                color="black"
                                size={30}
                                onPress={() => { navigation.openDrawer() }} 
                                style={{width: 50, height: 35,justifyContent: 'center', alignItems: 'center'}}
                                
                                />

                        )
                    }}
                />
                <Stack.Screen
                    name="MainDrawerNavigator"
                    component={DrawerNavigator}
                    // options={{
                    //     headerLeft: () => (
                    //         <Icon
                    //             name="bars"
                    //             color="black"
                    //             size={25}
                    //             onPress={() => { navigation.openDrawer() }} />

                    //     )
                    // }}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={Details}
                    options={{
                        title: 'Track Shipment'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


function DrawerNavigator() {
    return (
        <NavigationContainer independent="true">
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}
                drawerContent={props => <DrawerContent {...props} />}

            >
                <Drawer.Screen name="HomeStack" component={HomeStack} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;