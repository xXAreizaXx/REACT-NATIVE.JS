// ReactJS & ReactNative
import { StyleSheet, View } from "react-native";
import React from "react";

// Components
import StyledText from "./StyledText";

// Utils
import { parseNumber } from "../utils/functions";

export default function RepositoryStats(props) {
    return (
        <View style={styles.container}>
            <View>
                <StyledText align="center">{parseNumber(props?.stargazersCount)}</StyledText>
                <StyledText align="center" fontWeight="bold">Stars</StyledText>
            </View>

            <View>
                <StyledText align="center">{parseNumber(props?.forksCount)}</StyledText>
                <StyledText align="center" fontWeight="bold">Forks</StyledText>
            </View>

            <View>
                <StyledText align="center">{parseNumber(props?.reviewCount)}</StyledText>
                <StyledText align="center" fontWeight="bold">Reviews</StyledText>
            </View>

            <View>
                <StyledText align="center">{parseNumber(props?.ratingAverage)}</StyledText>
                <StyledText align="center" fontWeight="bold">Ratings</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});