import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import { ThemedView } from "@/components/ui/layout/ThemedView";
import { ThemedText } from "@/components/ui/layout/ThemedText";

type CardProps = {
  title?: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  padding?: number;
  margin?: number;
};

export const Card = ({
  title,
  subtitle,
  image,
  children,
  onPress,
  style,
  padding = 16,
  margin = 12,
}: CardProps) => {
  const content = (
    <ThemedView style={[styles.card, { padding, margin }, style]}>
      {image && <Image source={image} style={styles.image} />}
      {title && (
        <ThemedText type="title" style={styles.title}>
          {title}
        </ThemedText>
      )}
      {subtitle && (
        <ThemedText type="subtitle" style={styles.subtitle}>
          {subtitle}
        </ThemedText>
      )}
      {children}
    </ThemedView>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      {content}
    </TouchableOpacity>
  ) : (
    content
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    marginBottom: 8,
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});
