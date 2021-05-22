import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Seperator from "../components/Seperator";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamdadani"
          subTitle="programmingwithjosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Seperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="logout"
        IconComponent={<Icon name="logout" backgroundColor="#6d91f3" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
