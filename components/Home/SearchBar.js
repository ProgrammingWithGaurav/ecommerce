import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({query, setQuery}) => {
  return (
    <View style={{width: '95%', marginTop: 4, marginHorizontal: '2.5%'}}>
    <Searchbar
      style={{
        borderColor: '#EB7E10', borderWidth: 2
      }}
      icon={() => <AntDesign name="search1" size={24} color="black" />}
      placeholder="Search Items"
      onChangeText={() => setQuery(text)}
      value={searchQuery}
    />
  </View>
  )
}

export default SearchBar;