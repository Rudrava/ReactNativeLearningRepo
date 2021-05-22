import React, { useMemo } from "react";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms/index";
import * as Yup from "yup";
import Screen from "../components/Screen";

import { StyleSheet } from "react-native";
import CatagoryPickerItem from "../components/CatagoryPickerItem";

const ListingEditScreen = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        title: Yup.string().required().min(5).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Price"),
        description: Yup.string().label("Description"),
        catagory: Yup.object().required().nullable().label("Catagory"),
      }),
    []
  );
  const catagories = useMemo(
    () => [
      {
        label: "Furniture",
        value: 1,
        icon: "apps",
        iconBgColor: "red",
      },
      {
        label: "Vegitables",
        value: 2,
        icon: "apps",
        iconBgColor: "red",
      },

      { label: "Hoomans", value: 3, icon: "apps", iconBgColor: "red" },
    ],
    []
  );
  return (
    <>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            catagory: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField maxLength={255} name="title" placeholder="Title" />
          <AppFormField
            name="price"
            placeholder="Price"
            width="50%"
            keyboardType="numeric"
            maxLength={8}
          />

          <AppFormPicker
            name="catagory"
            items={catagories}
            placeholder="Catagory"
            numberOfColumns={3}
            PickerItemComponent={CatagoryPickerItem}
            width="50%"
          />
          <AppFormField
            name="description"
            placeholder="Description"
            multiline
            maxLength={255}
            numberOfLines={3}
          />
          <SubmitButton title="Submit" />
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});

export default ListingEditScreen;
