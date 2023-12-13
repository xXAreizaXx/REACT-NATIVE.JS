// ReactJS & ReactNative
import { StyleSheet, Text } from "react-native";
import React from "react";

// Theme
import theme from "../theme";

export default function StyledText({ align, children, color, fontSize, fontWeight, style,  ...props}) {
    // Styles
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        style,
    ]

    return <Text style={textStyles} {...props}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: theme?.colors?.textPrimary,
        fontFamily: theme?.fonts?.main,
        fontSize: theme?.fontSizes?.body,
        fontWeight: theme?.fontWeights?.normal,
    },
    textAlignCenter: {
        textAlign: "center",
    },
    colorPrimary: {
        color: theme?.colors?.textPrimary,
    },
    colorSecondary: {
        color: theme?.colors?.textSecondary,
    },
    bold: {
        fontWeight: theme?.fontWeights?.bold,
    },
    subheading: {
        fontSize: theme?.fontSizes?.subheading,
    }
});