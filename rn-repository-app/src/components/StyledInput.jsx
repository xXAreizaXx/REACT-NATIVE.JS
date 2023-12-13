// ReactJS & ReactNative
import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function StyledInput({ style, ...props }) {
    return (
        <TextInput style={[styles.input, style]} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#999',
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});