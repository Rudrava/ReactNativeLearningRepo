import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import ListItems from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.details}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$144</AppText>
        <ListItems
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamdadani"
          subTitle="69 listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "500" },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
export default ListingDetailsScreen;
