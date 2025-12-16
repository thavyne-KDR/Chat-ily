import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Card } from "@/components/ui/card";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const tintColor = useThemeColor({}, "tint");

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: Math.max(insets.top, 20) + 20,
            paddingBottom: Math.max(insets.bottom, 20) + 80,
          },
        ]}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.cardsContainer}>
          <Card bordered style={styles.card}>
            <View style={styles.cardContent}>
              <IconSymbol name="cart.fill" size={32} color={tintColor} />
              <View style={styles.cardTextContainer}>
                <ThemedText style={styles.cardLabel}>Vendas</ThemedText>
                <ThemedText style={styles.cardValue}>R$ 244,00</ThemedText>
              </View>
            </View>
          </Card>

          <Card bordered style={styles.card}>
            <View style={styles.cardContent}>
              <IconSymbol name="cart.fill" size={32} color={tintColor} />
              <View style={styles.cardTextContainer}>
                <ThemedText style={styles.cardLabel}>Pedidos pendentes</ThemedText>
                <ThemedText style={styles.cardValue}>5</ThemedText>
              </View>
            </View>
          </Card>

          <Card bordered style={styles.card}>
            <View style={styles.cardContent}>
              <IconSymbol name="cart.fill" size={32} color={tintColor} />
              <View style={styles.cardTextContainer}>
                <ThemedText style={styles.cardLabel}>Conversas ativas</ThemedText>
                <ThemedText style={styles.cardValue}>8</ThemedText>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 150,
    height: 150,
  },
  cardsContainer: {
    gap: 12,
  },
  card: {
    width: "100%",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
});
