import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Headline } from 'react-native-paper';
import SignupForm from './SignupForm';

const Signup = () => (
  <SafeAreaView style={styles.container}>
    <Headline style={styles.loginText}>Create an Account</Headline>
    <LogoContainer />
    <SignupForm />
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

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    padding: 5,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 10,
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
