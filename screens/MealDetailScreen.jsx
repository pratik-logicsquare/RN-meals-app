import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, []);

  return (
    <View>
      <Text>This is the Meal with id {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
