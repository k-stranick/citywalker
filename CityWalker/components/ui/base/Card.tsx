// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// components/ui/base/Card.tsx
import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Card = ({ children, style }: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Android shadow
    marginBottom: 12,
  },
});
