// Expo
import Constants from "expo-constants";

// ReactJS & ReactNative
import { Link, useLocation } from "react-router-native";
import { StyleSheet, View } from "react-native";
import React from "react";

// Components
import StyledText from "./StyledText";

// Theme
import theme from "../theme";

function AppBarTab({ children, to }) {
    // Router
    const { pathname } = useLocation();

    const active = pathname === to;

    // Styles
    const textStyles = [
        styles.text,
        active && styles.active,
    ];

    return (
        <Link to={to}>
            <StyledText fontWeight="bold" style={textStyles}>{children}</StyledText>
        </Link>
    )
}

export default function AppBar() {

    return (
        <View style={styles.container}>
            <AppBarTab to="/">Repositories</AppBarTab>
            <AppBarTab to="/signin">Sign In</AppBarTab>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: theme?.appBar?.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        paddingHorizontal: 20,
        paddingTop: Constants?.statusBarHeight + 10,
    },
    active: {
        color: theme?.appBar?.textPrimary,
    },
    text: {
        color: theme?.appBar?.textSecondary,
    },
});