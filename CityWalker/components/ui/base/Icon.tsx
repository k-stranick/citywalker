import React from "react";
import { Ionicons } from "@expo/vector-icons";

type IconProps = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
  style?: object;
};

export const Icon = ({ name, size = 24, color = "#000", style }: IconProps) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};
