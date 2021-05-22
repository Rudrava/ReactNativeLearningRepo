import React, { useMemo } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";

function ListingScreen(props) {
  const listing = useMemo(
    () => [
      {
        id: 1,
        title:
          "Red Jacket for Sale Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, distinctio!",
        price: 100,
        image: require("../assets/jacket.jpg"),
      },
      {
        id: 2,
        title: "Couch for Use",
        price: 120,
        image: require("../assets/couch.jpg"),
      },
    ],
    []
  );
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            subTitle={`$${item.price}`}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: Platform.OS === "android" ? 10 : 20,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
