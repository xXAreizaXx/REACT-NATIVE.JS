// ReactJS & ReactNative
import { StyleSheet, View, Image } from "react-native";
import React from "react";

// Components
import StyledText from "./StyledText";

// Theme
import theme from "../theme";

export default function RepositoryItemHeader(props) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props?.ownerAvatarUrl }} style={styles.image} />
            <View style={styles.header}>
                <StyledText fontSize="subheading" fontWeight="bold">{props?.fullName}</StyledText>
                <StyledText color="secondary">{props?.description}</StyledText>
                <StyledText style={styles.language}>{props?.language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 10,
    },
    header: {
        flex: 1,
        gap: 4,
        paddingLeft: 10,
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
        height: "auto",
        width: 60,
    },
});