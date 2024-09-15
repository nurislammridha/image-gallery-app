import React from 'react';
import { View, ActivityIndicator } from "react-native";

export const MyActivityIndicator = () => {
    return (
        <View style={{ display: 'flex', width: '100%', marginTop: 100, justifyContent: "center" }}>
            {/* //size can be "small" or "large" */}
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
}