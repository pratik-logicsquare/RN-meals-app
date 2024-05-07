import { StyleSheet, Text, View } from "react-native";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.mealDetails, style]}>
      <Text style={[styles.mealDetail, textStyle]}>{duration}m</Text>
      <Text style={[styles.mealDetail, textStyle]}>{complexity}</Text>
      <Text style={[styles.mealDetail, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  mealDetails: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 8,
  },
  mealDetail: {
    fontSize: 12,
    textTransform: "uppercase",
  },
});
