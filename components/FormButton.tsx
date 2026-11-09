import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

interface FormButtonProps extends TouchableOpacityProps {
  title: string;
}

export function FormButton({ title, style, ...rest }: FormButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.button,
        {
          backgroundColor: isDark ? "#3700B3" : "#6200EE",
        },
        style,
      ]}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});