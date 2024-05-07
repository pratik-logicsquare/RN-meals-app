import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const _onPressMealItem = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
      title: title,
    });
  };

  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={_onPressMealItem}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.mealImage} />
            <Text style={styles.mealTitle}>{title}</Text>
          </View>
          <View style={styles.mealDetails}>
            <Text style={styles.mealDetail}>{duration}m</Text>
            <Text style={styles.mealDetail}>{complexity}</Text>
            <Text style={styles.mealDetail}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    backgroundColor: "#ffffff",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
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
