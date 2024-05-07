import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    marginHorizontal: "20%",
    marginVertical: 12,
    padding: 4,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
    color: Colors.primary700,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
