// ReactJS & ReactNative
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

// Data
import repositories from "../data/repositories";

// Components
import RepositoryItem from "./RepositoryItem";

export default function RepositoryList() {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => <RepositoryItem {...item} />}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: 'lightgray',
    }
});