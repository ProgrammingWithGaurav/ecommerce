import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Button, HelperText, Icon } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const LoginForm = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().required('A valid email is required'),
        password: Yup.string()
            .required('Your password has to have atleast 8 characters')
            .min(8, 'Your password has to have atleast 8 characters'),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={LoginSchema}
                validateOnMount={true}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    isValid,
                    errors,
                }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode="outlined"
                                label="Email"
                                error={errors.email && values.email !== '' ? true : false}
                                placeholder="Enter your email"
                                left={<TextInput.Icon name={() => <Entypo name="email" size={24} color="black" />} />}
                                onBlur={handleBlur('email')}
                                text='hello@gmail.com'
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <HelperText type="error" visible={errors.email && values.email !== '' ? true : false}>
                                {errors.email}
                            </HelperText>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode="outlined"
                                label="Password"
                                error={errors.password && values.password !== '' ? true : false}
                                placeholder="Enter your password"
                                secureTextEntry
                                left={<TextInput.Icon name={() => <Entypo name="eye" size={24} color="black" />} />}
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}
                                value={values.password}
                            />
                            <HelperText type="error" visible={errors.password && values.password !== '' ? true : false}>
                                {errors.password}
                            </HelperText>
                        </View>
                        <Button
                            icon="login"
                            color={'#000'}
                            mode="contained"
                            loading={loading}
                            style={{ marginTop: 15 }}>
                            LogIn
                        </Button>

                        <View style={styles.footerText}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Signup')}>
                                <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginTop: 4,
    },
    footerText: {
        marginTop: 20,
        alignItems: 'center',
    },
});
