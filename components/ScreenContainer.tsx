import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export function ScreenContainer({ children, style, ...rest }: ViewProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#121212" : "#FFFFFF",
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
});