import { SafeAreaView, type ViewProps, StyleSheet } from "react-native";
import { useThemeColor } from "../../../hooks/useThemeColors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  // backgroundColor?: string;
};

//adjusting the background color here overrides the default background color of the SafeAreaView
export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  return (
    <SafeAreaView
      style={[styles.base, { backgroundColor }, style]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    borderTopLeftRadius: 16,
    overflow: "hidden", // ensures content respects the border radius
  },
});
