import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
// import AppFormField from "../components/forms/AppFormField";
// import AppForm from "../components/forms/AppForm";
// import SubmitButton from "../components/forms/SubmitButton";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          keyBoardType="email-addresss"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
