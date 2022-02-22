import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';

const Item = ({name, active, setQuery}) => (
  <TouchableOpacity onPress={() => setSelected(name)} onBlur={() => setSelected('')}>
    <Text style={{
      borderWidth: active ? 2 : 0,
      borderColor: '#9FE4D3',
      borderRadius: 5,
      padding: 4,
      color: 'white',
      fontSize: 16,
      marginHorizontal: 5,
      fontWeight: '500',
    }}>{name[0].toUpperCase()}{name.slice(1, name.length).toLowerCase()}</Text>
  </TouchableOpacity>
)

export default Categories = ({query, setQuery}) => {
  const categoriesItems = ['mobiles', 'laptop', 'tv', 'refrigerator','mobiles', 'laptop', 'tv', 'refrigerator','mobiles', 'laptop', 'tv', 'refrigerator'];
  return(
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop: 10}} >
  {
  categoriesItems.map((category, index) => (
    <Item name={category} key={index} setQuery={setQuery} active={selected === category}/>
  ))
  }
  </ScrollView>
  )
}
