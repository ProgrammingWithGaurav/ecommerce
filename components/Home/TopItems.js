import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { Headline } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {  Title, Paragraph } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TopItems = () => {
  const items = [
    {
      title: 'Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 ',
      rating: 5,
      salePrice: '₹11,499',
      initialPrice: '₹12,999',
      savePrice: '₹1,500',
      imageUrl:
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    }, {
      title: 'Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 ',
      rating: 5,
      salePrice: '₹11,499',
      initialPrice: '₹12,999',
      savePrice: '₹1,500',
      imageUrl:
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    }, {
      title: 'Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 ',
      rating: 5,
      salePrice: '₹11,499',
      initialPrice: '₹12,999',
      savePrice: '₹1,500',
      imageUrl:
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    }, {
      title: 'Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 ',
      rating: 5,
      salePrice: '₹11,499',
      initialPrice: '₹12,999',
      savePrice: '₹1,500',
      imageUrl:
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    }, {
      title: 'Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 ',
      rating: 5,
      salePrice: '₹11,499',
      initialPrice: '₹12,999',
      savePrice: '₹1,500',
      imageUrl:
        'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMG1vYmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  return (
    <View style={styles.container}>
      <Headline style={{ textAlign: 'center', marginVertical: 10 }}>
        Top Products
      </Headline>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {items.map((item, index) => (
          <Image key={index} style={styles.image} source={{uri: item.imageUrl , width: screenWidth*0.95, height: '100%'}} resizeMode='cover'/>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopItems;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    borderWidth: 2,
    borderColor: 'blue',
    marginHorizontal: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  }
});
