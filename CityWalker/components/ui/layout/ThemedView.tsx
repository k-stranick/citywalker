import { SafeAreaView, type ViewProps } from "react-native";

import { useThemeColor } from "../../../hooks/useThemeColors";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

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

  return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
