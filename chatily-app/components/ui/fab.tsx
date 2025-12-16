import { Pressable, StyleSheet, type PressableProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconSymbol } from "./icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";
import * as Haptics from "expo-haptics";

export type FABProps = PressableProps & {
  icon?: string;
  size?: number;
};

export function FAB({ icon = "plus", size = 72, onPress, ...otherProps }: FABProps) {
  const backgroundColor = useThemeColor({}, "tint");
  const insets = useSafeAreaInsets();

  const handlePress = (event: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.(event);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.fab,
        { 
          backgroundColor, 
          width: size, 
          height: size, 
          borderRadius: size / 2,
          bottom: 65 + insets.bottom,
        },
        pressed && styles.fabPressed,
      ]}
      {...otherProps}
    >
      <IconSymbol name={icon as any} size={32} color="#FFFFFF" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#991578",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
  },
  fabPressed: {
    transform: [{ scale: 0.9 }],
    opacity: 0.8,
  },
});
