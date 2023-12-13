
// ReactNative
import { Platform } from "react-native";

const theme = {
    appBar: {
        primary: '#24292E',
        textPrimary: '#FFFFFF',
        textSecondary: '#586069',
    },
    colors: {
        primary: '#0366d6',
        textPrimary: '#24292E',
        textSecondary: '#586069',
        white: '#FFFFFF',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            default: 'System',
            ios: 'Arial',
        }),
    },
    fontWeights: {
        bold: '700',
        normal: '400',
    }
};

export default theme;