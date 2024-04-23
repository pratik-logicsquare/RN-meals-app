import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

const CategoriesScreen = ({ navigation }) => {
  const _handlePress = (id) => {
    navigation.navigate("MealsOverview", {
      categoryId: id,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryTile
          title={item?.title}
          color={item?.color}
          onPress={_handlePress.bind(this, item?.id)}
        />
      )}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
