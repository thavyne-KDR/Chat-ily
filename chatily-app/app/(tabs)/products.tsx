import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Card } from "@/components/ui/card";
import { FAB } from "@/components/ui/fab";
import { useThemeColor } from "@/hooks/use-theme-color";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: string;
  image?: string;
};

export default function ProductsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const placeholderColor = useThemeColor({}, "placeholder");

  const [products] = useState<Product[]>([
    { id: "1", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
    { id: "2", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
    { id: "3", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
    { id: "4", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
    { id: "5", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
    { id: "6", name: "Saída de Banho", price: 45.0, stock: "P.M.G" },
  ]);

  const handleAddProduct = () => {
    router.push("/new-product");
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <Pressable style={styles.productItem}>
      <Card bordered style={styles.productCard}>
        <View style={styles.productContent}>
          <View style={[styles.productImage, { backgroundColor: placeholderColor }]} />

          <View style={styles.productInfo}>
            <ThemedText style={styles.productName}>{item.name}</ThemedText>
            <ThemedText style={styles.productPrice}>
              R$ {item.price.toFixed(2).replace(".", ",")}
            </ThemedText>
            <ThemedText style={styles.productStock}>Estoque: {item.stock}</ThemedText>
          </View>
        </View>
      </Card>
    </Pressable>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContent,
          {
            paddingTop: Math.max(insets.top, 20) + 20,
            paddingBottom: Math.max(insets.bottom, 20) + 80,
          },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <FAB icon="plus" onPress={handleAddProduct} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  productItem: {
    marginBottom: 12,
  },
  productCard: {
    width: "100%",
  },
  productContent: {
    flexDirection: "row",
    gap: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productStock: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
  },
});
