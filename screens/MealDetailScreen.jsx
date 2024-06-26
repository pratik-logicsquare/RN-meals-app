import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Colors } from "../constants/colors";
import { IconButton } from "../components/common";
import { List, Subtitle } from "../components/meal-details";
import { MealDetails } from "../components";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, title } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => {
        return <IconButton name="star" size={24} color="#fff" />;
      },
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: meal.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealTitle}>{meal.title}</Text>

      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.mealDetails}
      />

      <Subtitle>Ingredients</Subtitle>
      <List data={meal.ingredients} />

      <Subtitle>Steps</Subtitle>
      <List data={meal.steps} />
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 40,
  },
  mealImage: {
    width: "100%",
    height: 300,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: Colors.primary700,
  },
  mealDetails: {
    color: Colors.primary700,
  },
});
