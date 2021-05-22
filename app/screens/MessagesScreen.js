import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import Seperator from "../components/Seperator";

function MessagesScreen(props) {
  const initMessages = useMemo(
    () => [
      {
        id: 1,
        title: "T1asldnasnqubefnskdfBDfabfaubeafhbejfhabefjhabasdasdasdcade",
        description:
          " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam maiores quis, cumque voluptates, dignissimos adipisci quibusdam, non error obcaecati atque sunt totam neque porro quas ab repudiandae pariatur mollitia? Temporibus beatae doloremque obcaecati perferendis repudiandae! Consequuntur molestias officia ut nemo?",
        image: require("../assets/mosh.jpg"),
      },
      {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
      },
    ],
    []
  );
  const [messages, setMessages] = useState(initMessages);
  const [refresing, setRefresing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
        refreshing={refresing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
