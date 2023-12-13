// ReactJS & ReactNative
import { Routes, Route } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import React from 'react';

// Components
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

// Pages
import LoginPage from '../pages/Login';

export default function Main() {
    return (
        <View style={styles.container}>
            <AppBar />
                
            <Routes>
                <Route path="/" exact Component={RepositoryList} />
                <Route path="/signin" exact Component={LoginPage} />
            </Routes>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});