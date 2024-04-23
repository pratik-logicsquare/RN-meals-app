import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const CategoryTile = ({ title, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={onPress}
      >
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: Colors.primary500 },
          ]}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    elevation: 4,
    height: 150,
    borderRadius: 8,
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
