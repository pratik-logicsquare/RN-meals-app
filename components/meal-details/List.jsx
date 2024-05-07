import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const List = ({ data }) => {
  return data.map((item) => (
    <View style={styles.listItemContainer}>
      <Text key={item} style={styles.listItem}>
        {item}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: Colors.primary500,
    padding: 8,
    borderRadius: 6,
    marginHorizontal: "10%",
    marginVertical: 6,
  },
  listItem: {
    fontSize: 14,
    color: Colors.primary700,
  },
});
