// import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string; // optional custom override
  style?: object;
};

export const Icon = ({ name, size = 24, color, style }: IconProps) => {
  const theme = useColorScheme() ?? "light";
  const iconColor = color ?? Colors[theme].icon; // fallback to theme icon color

  return <Ionicons name={name} size={size} color={iconColor} style={style} />;
};
