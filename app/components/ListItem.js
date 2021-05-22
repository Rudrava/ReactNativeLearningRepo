import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

/**
 *
 * @param {image} pointer to image
 * @param {title} string title
 * @param {subTitle} string subtitle
 * @param {IconComponent} React IconComponent
 * @param {onPress} function onPress clickHandler for ListItem
 * @param {renderRightAction} function renderRightAction swipe handler for right action
 * @returns REACT COMPONENT
 */
function ListItem({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  title: { fontWeight: "bold" },
  subTitle: { color: colors.medium, marginTop: Platform.OS === "ios" ? 4 : 0 },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
export default ListItem;
