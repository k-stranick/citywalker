import { Image, StyleSheet, View, Button, ImageBackground } from "react-native";
import { router } from "expo-router";
import ParallaxScrollView from "@/components/ui/layout/ParallaxScrollView";
import { ThemedView } from "@/components/ui/layout/ThemedView";
import { Collapsible } from "@/components/ui/base/Collapsible";
import { ThemedText } from "@/components/ui/layout/ThemedText";
import { Card } from "@/components/ui/base/Card";
import { BlurView } from "expo-blur";
import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/bgImg.jpg")}
    //       style={styles.bannerImage}
    //     />
    //   }
    // >

    <ImageBackground
      source={require("@/assets/images/repel.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.titleContainer}>
        <ThemedText style={styles.heading}>Explore Utah</ThemedText>
      </View>
      <BlurView intensity={60} tint="dark" style={styles.blur}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Collapsible title="What is City Walker?">
            <View style={styles.stepContainer}>
              <ThemedText style={styles.centerText}>
                City Walker is a mobile application that helps you explore the
                city. It provides information about various attractions, events,
                and activities happening in the city.
              </ThemedText>
            </View>
          </Collapsible>
          <Collapsible title="How to use City Walker?">
            <ThemedView style={styles.stepContainer}>
              <ThemedText style={styles.centerText}>
                To use City Walker, simply navigate through the app to find
                information about different attractions, events, and activities.
                You can also search for specific places or events using the
                search feature.
              </ThemedText>
            </ThemedView>
          </Collapsible>
          <Collapsible title="Explore Hikes">
            <ThemedView style={styles.stepContainer}>
              <Card
                title="Utah Hiking Trails"
                subtitle="Discover your next adventure"
                image={require("@/assets/images/hiking.jpg")}
                onPress={() => router.push("/(tabs)/hikingTrails")}
              >
                <ThemedText style={styles.titleContainer}>
                  Beautiful trails around every corner — click below to explore
                  more!
                </ThemedText>
                <Button
                  title="Explore Now"
                  onPress={() => router.push("/(tabs)/hikingTrails")}
                />
              </Card>
            </ThemedView>
          </Collapsible>
          <Collapsible title="Explore Restaurants">
            <ThemedView style={styles.stepContainer}>
              <Card
                title="Fantastic Cuisine"
                subtitle="Relax and fill up on delicious food"
                image={require("@/assets/images/food.jpg")}
                onPress={() => router.push("/(tabs)/restaurants")}
              >
                <ThemedText style={styles.titleContainer}>
                  Delicious food, relaxing environments — click below to explore
                  more!
                </ThemedText>
                <Button
                  title="Check Conditions"
                  onPress={() => {
                    router.push("/(tabs)/restaurants");
                  }}
                />
              </Card>
            </ThemedView>
          </Collapsible>
          <Collapsible title="Check Ski Conditions">
            <ThemedView style={styles.stepContainer}>
              <Card
                title="It may be a pow day!"
                subtitle="Snowfall, base depth, and more at your fingertips"
                image={require("@/assets/images/snowbird.jpg")}
                onPress={() => router.push("/(tabs)/weather")}
              >
                <ThemedText style={styles.titleContainer}>
                  Check the forecast — click below
                </ThemedText>
                <Button
                  title="Explore Restaurants"
                  onPress={() => {
                    router.push("/(tabs)/restaurants");
                  }}
                />
              </Card>
            </ThemedView>
          </Collapsible>
        </ScrollView>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    // paddingBottom: 40, // Optional space for bottom
  },
  blur: {
    flex: 1,
    // padding: 20,
    paddingStart: 20,
    paddingEnd: 20,
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.43)", // makes text more readable
    padding: 20,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 18,
    color: "#000",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(235, 212, 111)",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    //add background color here to change
  },
  bannerImage: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  centerText: {
    paddingLeft: 10,
  },
});
