// example screen
import { View, StyleSheet, ScrollView } from "react-native";
import { ThemedText } from "@/components/ui/layout/ThemedText";
import { ThemedView } from "@/components/ui/layout/ThemedView";
import { Card } from "@/components/ui/base/Card";
export default function WeatherScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Utah Hiking Trails</ThemedText>
      </ThemedView>

      {/* Example usage of your custom card */}
      <Card
        title="Angel's Landing"
        image={require("@/assets/images/food.jpg")} // or your trail image
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  header: {
    marginBottom: 12,
    alignItems: "center",
  },
});
