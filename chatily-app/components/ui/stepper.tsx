import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import * as Haptics from "expo-haptics";

export type StepperProps = {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export function Stepper({ value, onValueChange, min = 0, max = 999, step = 1 }: StepperProps) {
  const tintColor = useThemeColor({}, "tint");
  const borderColor = useThemeColor({}, "border");

  const handleDecrement = () => {
    if (value > min) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onValueChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onValueChange(value + step);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleDecrement}
        disabled={value <= min}
        style={[
          styles.button,
          { borderColor },
          value <= min && styles.buttonDisabled,
        ]}
      >
        <ThemedText style={[styles.buttonText, { color: tintColor }]}>-</ThemedText>
      </Pressable>

      <View style={styles.valueContainer}>
        <ThemedText style={styles.value}>{value}</ThemedText>
      </View>

      <Pressable
        onPress={handleIncrement}
        disabled={value >= max}
        style={[
          styles.button,
          { borderColor },
          value >= max && styles.buttonDisabled,
        ]}
      >
        <ThemedText style={[styles.buttonText, { color: tintColor }]}>+</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
  },
  valueContainer: {
    minWidth: 40,
    alignItems: "center",
    paddingHorizontal: 12,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eae5e1",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  value: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
  },
});
