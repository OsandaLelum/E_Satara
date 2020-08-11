import React from "react";
import Feed from "../feed";
import Detail from "../detail";

import Contact from "../screens/drawer/contact";
import Favourites from "../screens/drawer/favourite";
import Settings from "../screens/drawer/settings";
import Payment from "../screens/drawer/payment";

import Tab1 from "../screens/tabs/Tab1";
import Tab2 from "../screens/tabs/Tab2";
import Tab3 from "../screens/tabs/Tab3";
import Tab4 from "../screens/tabs/Tab4";
import Tab5 from "../screens/tabs/Tab5";
import Tab6 from "../screens/tabs/Tab6";
import Tab7 from "../screens/tabs/Tab7";
import Tab8 from "../screens/tabs/Tab8";
import Tab9 from "../screens/tabs/Tab9";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  DrawerActions,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Appearance,
  useColorScheme,
  AppearanceProvider,
} from "react-native-appearance";
//import { Contacts } from "expo";
//import Favourite from "./src/screens/drawer/favourite";
//import { Settings } from "react-native";
//import RootStackScreen from "./src/screens/RootStackScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

HomeStack = () => {
  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: "white",
      background: "white",
      card: "#65509f",
      text: "white",
      border: "green",
    },
  };

  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={this.createDrawer}
        options={({ navigation }) => ({
          title: "E-satara",
          headerLeft: () => (
            <Icon
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: "white", marginLeft: 8 }]}
              size={24}
              name={"menu"}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen",
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} />
    </Stack.Navigator>
  );

  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Questions" component={Feed} />
      <Drawer.Screen name="Favorites" component={Favourites} />
      <Drawer.Screen name="Contact_Us" component={Contact} />
      <Drawer.Screen name="Payments" component={Payment} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );

  createTopTabs = (props) => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="G-6"
          component={Tab1}
          // options={{ title: props.route.params.name }}
        />
        <MaterialTopTabs.Screen name="G-07" component={Tab2} />
        <MaterialTopTabs.Screen name="G-08" component={Tab3} />
        <MaterialTopTabs.Screen name="G-09" component={Tab4} />
        <MaterialTopTabs.Screen name="G-10" component={Tab5} />
        <MaterialTopTabs.Screen name="G-11" component={Tab6} />
      </MaterialTopTabs.Navigator>
    );
  };

  createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 1"
          style={{ marginBottom: 16 }}
          component={Tab7}
          options={{
            tabBarLabel: "Maths",
            tabBarIcon: () => (
              <Icon style={[{ color: "black" }]} size={25} name={"play"} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={Tab8}
          options={{
            tabBarLabel: "Science",
            tabBarIcon: () => (
              <Icon style={[{ color: "black" }]} size={25} name={"play"} />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Tab9}
          options={{
            tabBarLabel: "History",
            tabBarIcon: () => (
              <Icon style={[{ color: "black" }]} size={25} name={"play"} />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == "dark" ? DarkTheme : MyTheme}>
        {this.createHomeStack()}
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default HomeStack;
