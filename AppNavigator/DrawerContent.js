import * as React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ marginTop: 15, justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                            <Avatar.Image
                                source={require("../assets/manPhoto.png")}
                                size={90}
                            />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Title style={styles.title}>Iswannge</Title>
                                <Caption style={styles.caption}>Edit Photo</Caption>
                            </View>
                            <TextInput
                                style={{ width: '100%' }}
                                placeholder="Search..."
                                placeholderTextColor="grey"
                                mode="outlined"
                                outlineColor="grey">

                            </TextInput>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Cloud Runner"
                            onPress={() => {  }}

                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Recipient"
                            onPress={() => { }}

                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="E-Wallet"
                            onPress={() => { }}

                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Starred"
                            onPress={() => { }}

                        />
                        <Drawer.Item
                            //empty to create gap lmao
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label=""

                        />

                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => { }}

                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Updated"
                            onPress={() => { }}

                        />
                        <Drawer.Item
                            icon={({ color, size }) => (
                                <Icon
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { }}

                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: 3,
        fontFamily:'SourceCodePro-SemiBold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontFamily: 'SourceCodePro',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,

    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#F4F4F4",
        borderTopWidth: 1
    },


})