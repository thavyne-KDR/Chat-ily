import { StyleSheet, TextInput, type TextInputProps } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export type InputProps = TextInputProps;

export function Input({ style, ...otherProps }: InputProps) {
  const textColor = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "border");
  const placeholderColor = useThemeColor({}, "placeholder");

  return (
    <TextInput
      style={[
        styles.input,
        { color: textColor, backgroundColor: "#ffffff", borderColor },
        style,
      ]}
      placeholderTextColor={placeholderColor}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    lineHeight: 24,
  },
});
