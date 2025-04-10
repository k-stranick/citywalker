import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { HapticTab } from "@/components/ui/navigation/HapticTab";
import TabBarBackground from "@/components/ui/navigation/TabBarBackground";
import { Colors, ButtonColor, TabBarBackgroundColor } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: TabBarBackgroundColor.backgroundColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home-outline"
              size={20}
              color={ButtonColor.Nav.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="hikingTrails"
        options={{
          title: "Hiking",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="trail-sign"
              size={20}
              color={ButtonColor.Nav.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="restaurants"
        options={{
          title: "Food",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="restaurant"
              size={20}
              color={ButtonColor.Nav.color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          title: "Ski",
          tabBarIcon: ({ color }) => (
            <Ionicons name="snow" size={20} color={ButtonColor.Nav.color} />
          ),
        }}
      />
    </Tabs>
  );
}
