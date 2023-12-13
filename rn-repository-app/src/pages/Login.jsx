// ReactJS & ReactNative
import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

// Components
import StyledInput from '../components/StyledInput';

// External Dependencies
import { Formik } from 'formik';

const initialValues = {
    email: '',
    password: '',
};

export default function LoginPage() {
    // Functions
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, handleChange, values }) => (
                <View style={styles.form}>
                    <StyledInput placeholder="Email" value={values.email} onChangeText={handleChange('email')} />
                    <StyledInput placeholder="Password" value={values.password} onChangeText={handleChange('password')} />

                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        padding: 20,
    },
});