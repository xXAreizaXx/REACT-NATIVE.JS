// ReactJS & ReactNative
import { StyleSheet, View, Image } from "react-native";
import React from "react";

// Components
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats";

// Theme
import theme from "../theme";

export default function RepositoryItem(props) {
    return (
        <View style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 10,
        gap: 6,
    },
    language: {
        alignSelf: "flex-start",
        backgroundColor: theme?.colors?.primary,
        borderRadius: 4,
        color: theme?.colors?.white,
        overflow: "hidden",
        padding: 4,
    },
    image: {
        borderRadius: 4,
        height: 50,
        width: 50,
    },
});