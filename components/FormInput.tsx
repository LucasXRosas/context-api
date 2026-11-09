import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export function FormInput(props: TextInputProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TextInput
      {...props}
      placeholderTextColor={isDark ? "#888888" : "#999999"}
      style={[
        styles.input,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#FFFFFF",
          color: isDark ? "#FFFFFF" : "#000000",
          borderColor: isDark ? "#444444" : "#CCCCCC",
        },
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    fontSize: 16,
  },
});