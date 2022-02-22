import React from 'react';
import { Button, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Categories from './Categories';
import HomePageImage from './HomePageImage';
import TopItems from './TopItems';

function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  return (
    <View style={{ width: '100%', height: 100, backgroundColor: '#131921' }}>
      <View style={{ width: '100%', height: 110, backgroundColor: '#131921' }}>
        <SearchBar query={query} setQuery={setQuery}/>
        <Categories query={query} setQuery={setQuery} />
      </View>
      {query ? (
        <Products />
      ) : (
        <>
          <HomePageImage />
          <TopItems />
        </>
      )
      }
    </View >
  );
}


function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go to Profile" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#131921',
          opacity: 0.8,
          height: 60
        },
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10, position: 'relative' }}>
            <Text style={{
              position: 'absolute',
              right: 6,
              top: -10,
              fontWeight: '700',
              color: 'white'
            }}>0</Text>
            <Feather name="shopping-cart" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}>
      <Drawer.Screen name="Explore" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
