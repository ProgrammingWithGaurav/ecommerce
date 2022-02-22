import React from 'react';
import {Text, View, ImageBackground, StyleSheet,Dimensions} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
const HomePageImage = () => {
  return (
    <View style={{width: '100%', height: ScreenHeight/3, backgroundColor: '#fff'}}>
       <ImageBackground  source={{uri: 'https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>G-Delivery</Text>
    </ImageBackground>
    </View>
  )
}

export default HomePageImage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    opacity: 0.7,
  }
});