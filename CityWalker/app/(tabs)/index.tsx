import { Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ui/layout/ParallaxScrollView";
import { ThemedView } from "@/components/ui/layout/ThemedView";
import { Collapsible } from "@/components/ui/base/Collapsible";
import { ThemedText } from "@/components/ui/layout/ThemedText";

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/bgImg.jpg")}
          style={styles.bannerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText>City Walker</ThemedText>
      </ThemedView>

      <Collapsible title="What is City Walker?">
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            City Walker is a mobile application that helps you explore the city.
            It provides information about various attractions, events, and
            activities happening in the city.
          </ThemedText>
        </ThemedView>
      </Collapsible>

      <Collapsible title="How to use City Walker?">
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            To use City Walker, simply navigate through the app to find
            information about different attractions, events, and activities. You
            can also search for specific places or events using the search
            feature.
          </ThemedText>
        </ThemedView>
      </Collapsible>

      <Collapsible title="What are the main features of City Walker?">
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            City Walker offers a variety of features including:{" "}
          </ThemedText>
        </ThemedView>
      </Collapsible>

      <Collapsible title="Explore Hikes">
        <ThemedView style={styles.stepContainer}>
          <Link href="/(tabs)/hikingTrails">
            <ThemedText>Hike the Trails</ThemedText>
          </Link>
        </ThemedView>
      </Collapsible>

      <Collapsible title="Explore Restaurants">
        <ThemedView style={styles.stepContainer}>
          <Link href="/(tabs)/restaurants">
            <ThemedText>Explore the Fine Cuisine</ThemedText>
          </Link>
        </ThemedView>
      </Collapsible>

      <Collapsible title="Check Ski Conditions">
        <ThemedView style={styles.stepContainer}>
          <Link href="/(tabs)/weather">
            <ThemedText>Check Ski Conditions</ThemedText>
          </Link>
        </ThemedView>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 24,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  bannerImage: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
