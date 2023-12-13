// ReactJS & ReactNative
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";

// Components
import ApplePay from "./src/components/ApplePay";

// External Dependencies
import BottomSheet, {
    BottomSheetView,
    TouchableOpacity,
} from "@gorhom/bottom-sheet";

export default function App() {
    // Refs
    const bottomSheetRef = useRef<BottomSheet>(null);

    // State
    const [isOpen, setIsOpen] = useState(false);

    // Memos
    const snapPoints = useMemo(() => ["40%"], []);

    // Callbacks
    const handleSnapPress = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);

        setIsOpen(true);
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: isOpen ? "#00000090" : "#fff" },
                ]}
            >
                <Text style={styles.subtitle}>
                    {new Date().toString().slice(0, 11)}
                </Text>
                <Text style={styles.title}>Today</Text>
                <View style={styles.shadow}>
                    <Image
                        style={[styles.image, { opacity: isOpen ? 0.2 : 1 }]}
                        source={{
                            uri: "https:i.guim.co.uk/img/media/8806177a01e00e4afc6d5f04ec4e99a0db9166fb/50_293_2969_1781/master/2969.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c99accd4e72bec8825ac783bb40043cf",
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSnapPress(0)}
                >
                    <Text
                        style={{
                            color: "#0080FB",
                            fontSize: 16,
                            fontWeight: "600",
                        }}
                    >
                        GET
                    </Text>
                </TouchableOpacity>
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    onClose={() => setIsOpen(false)}
                >
                    <BottomSheetView>
                        <ApplePay />
                    </BottomSheetView>
                </BottomSheet>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 32,
        textAlign: "left",
        margin: 10,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "left",
        marginLeft: 10,
        color: "#aaa",
        fontWeight: "500",
    },
    image: {
        width: "90%",
        height: 400,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 20,
    },
    shadow: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 6.84,
        elevation: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: "#f4f4f4",
        width: 80,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 15,
    },
});
