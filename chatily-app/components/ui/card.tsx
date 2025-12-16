import { StyleSheet, View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export type CardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  bordered?: boolean;
};

export function Card({ style, lightColor, darkColor, bordered = true, ...otherProps }: CardProps) {
  const backgroundColor = "#ffffff";
  const borderColor = useThemeColor({}, bordered ? "cardBorder" : "border");

  return (
    <View
      style={[
        styles.card,
        { borderBottomColor: borderColor, borderBottomWidth: bordered ? 4 : 0, backgroundColor },
        style,
      ]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
