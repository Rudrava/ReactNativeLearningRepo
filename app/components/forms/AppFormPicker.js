import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  items,
  name,
  placeholder,
  width,
  numberOfColumns,
  PickerItemComponent,
}) => {
  const { setFieldValue, values, touched, errors } = useFormikContext();
  return (
    <>
      <AppPicker
        width={width}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
