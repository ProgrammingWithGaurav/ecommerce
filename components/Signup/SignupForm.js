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
import { TextInput, Button, HelperText } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons';

const SignupForm = ({navigation}) => {
    const [loading, setLoading] = useState(false);

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .required('Your name atleast contain 4 characters')
            .min(4, 'Your name atleast contain 4 characters'),
        email: Yup.string().email().required('A valid email is required'),
        password: Yup.string()
            .required('Your password has to have atleast 8 characters')
            .min(8, 'Your password has to have atleast 8 characters'),
        address: Yup.string(),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '', username: '', address: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={SignupSchema}
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
                        {/* Username */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode="outlined"
                                label="Username"
                                error={errors.username && values.username !== '' ? true : false}
                                placeholder="Enter your username"
                                left={
                                    <TextInput.Icon
                                        name={() => (
                                            <AntDesign name="user" size={24} color="black" />
                                        )}
                                    />
                                }
                                onBlur={handleBlur('username')}
                                onChangeText={handleChange('username')}
                                value={values.username}
                            />
                            <HelperText
                                type="error"
                                visible={
                                    errors.username && values.username !== '' ? true : false
                                }>
                                {errors.username}
                            </HelperText>
                        </View>

                        {/* Email */}
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode="outlined"
                                label="Email"
                                error={errors.email && values.email !== '' ? true : false}
                                placeholder="Enter your email"
                                left={<TextInput.Icon name={() => <Entypo name="email" size={24} color="black" />} />}
                                onBlur={handleBlur('email')}
                                text="hello@gmail.com"
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            <HelperText
                                type="error"
                                visible={errors.email && values.email !== '' ? true : false}>
                                {errors.email}
                            </HelperText>
                        </View>

                        {/* Password */}
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
                            <HelperText
                                type="error"
                                visible={
                                    errors.password && values.password !== '' ? true : false
                                }>
                                {errors.password}
                            </HelperText>

                            {/* Address (optional)*/}
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                mode="outlined"
                                label="Address (optional)"
                                error={errors.password && values.password !== '' ? true : false}
                                placeholder="Enter your Address"
                                left={
                                    <TextInput.Icon
                                        name={() => (
                                            <Entypo name="location-pin" size={24} color="black" />
                                        )}
                                    />
                                }
                                onBlur={handleBlur('address')}
                                onChangeText={handleChange('address')}
                                value={values.address}
                            />
                            <HelperText
                                type="error"
                                visible={
                                    errors.address && values.address !== '' ? true : false
                                }>
                                {errors.address}
                            </HelperText>
                        </View>

                        <Button
                            icon="login"
                            color={'#000'}
                            mode="contained"
                            loading={loading}
                            style={{ marginTop: 15 }}>
                            Sign Up
                        </Button>

                        <View style={styles.footerText}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Login')}>
                                <Text style={{ color: '#6BB0F5' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default SignupForm;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginTop: -5
    },
    footerText: {
        marginTop: 20,
        alignItems: 'center',
    },
});
