import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import LoginForm from './LoginForm';

const Login = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <LogoContainer />
    <LoginForm navigation={navigation}/>
  </SafeAreaView>
);

const LogoContainer = () => (
  <View style={styles.logoContainer}>
    <Image
      source={{
        uri: 'https://cdn-icons-png.flaticon.com/128/3176/3176363.png',
      }}
      style={styles.image}
    />
  </View>
);

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eee',
    height: '100%',
    padding: 5,
  },
  logoContainer: {
    marginTop: 2,
    width: '100%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
  },
});
