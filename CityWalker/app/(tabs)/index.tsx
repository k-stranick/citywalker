import { Text, Button, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <Text>City Walker</Text>
      <Link href="/(tabs)/weather">Check Ski Conditions</Link>
      <Link href="/(tabs)/restaurants">Explore the Fine Cuisine</Link>
      <Link href="/(tabs)/hikingTrails">Hike the Trails</Link>
    </SafeAreaView>
  );
}
