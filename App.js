import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomNav from "./component/bottomNav";
import FavScreen from "./component/FavScreen";
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Details Screen</Text>
    </View>
  );
}

function FavScreen() {
  return (
    <View style={styles.screen}>
      <Text>Fav Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
