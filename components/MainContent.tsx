import React from "react";
import { Text, Switch, View, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { ScreenContainer } from "./ScreenContainer";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export function MainContent() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ScreenContainer>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: isDark ? "#FFFFFF" : "#000000" }]}>
          Tema: {theme.toUpperCase()}
        </Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          thumbColor={isDark ? "#BB86FC" : "#6200EE"}
          trackColor={{ false: "#767577", true: "#3700B3" }}
        />
      </View>

      <FormInput placeholder="Digite seu e-mail" />
      <FormInput placeholder="Digite sua senha" secureTextEntry />

      <FormButton title="Entrar" onPress={() => {}} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});