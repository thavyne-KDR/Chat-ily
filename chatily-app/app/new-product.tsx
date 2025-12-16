import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Input } from "@/components/ui/input";
import { Stepper } from "@/components/ui/stepper";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";
import * as Haptics from "expo-haptics";

export default function NewProductScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const tintColor = useThemeColor({}, "tint");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(10);
  const [variationsOpen, setVariationsOpen] = useState(false);
  const [variationName, setVariationName] = useState("");
  const [variationOptions, setVariationOptions] = useState("");

  const handleSave = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ThemedView style={styles.container} lightColor="#eae5e1">
      <View
        style={[
          styles.header,
          {
            paddingTop: Math.max(insets.top, 20) + 12,
            paddingBottom: 12,
          },
        ]}
      >
        <Pressable onPress={handleCancel} style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color={tintColor} />
        </Pressable>
        <ThemedText style={styles.headerTitle}>Novo Produto</ThemedText>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.content,
          {
            paddingBottom: Math.max(insets.bottom, 20) + 20,
          },
        ]}
      >
        {/* Campo Nome */}
        <View style={styles.field}>
          <ThemedText style={styles.label}>Nome</ThemedText>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Digite o nome do produto"
          />
        </View>

        <View style={styles.field}>
          <ThemedText style={styles.label}>Preço</ThemedText>
          <Input
            value={price}
            onChangeText={setPrice}
            placeholder="R$ 0,00"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.field}>
          <ThemedText style={styles.label}>Quantidade de Entrega</ThemedText>
          <Stepper value={quantity} onValueChange={setQuantity} min={1} max={999} />
        </View>

        <View style={styles.field}>
          <View style={styles.variationsWrapper}>
            <Pressable 
              style={styles.variationsHeader}
              onPress={() => setVariationsOpen((v) => !v)}
              accessibilityRole="button"
            >
              <ThemedText style={styles.variationsTitle}>Adicionar Variações?</ThemedText>
              <View style={[styles.chevronCircle, { transform: [{ rotate: variationsOpen ? "180deg" : "0deg" }] }]}>
                <ThemedText style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>▼</ThemedText>
              </View>
            </Pressable>
          </View>
          {variationsOpen && (
            <View style={styles.variationsContent}>
              <View>
                <ThemedText style={styles.label}>Nome da Variação</ThemedText>
                <Input placeholder="Tamanho, Cor, Sabor..." value={variationName} onChangeText={setVariationName} />
              </View>
              <View>
                <ThemedText style={styles.label}>Opções</ThemedText>
                <Input placeholder="P, M, G, Azul, Vermelho..." value={variationOptions} onChangeText={setVariationOptions} />
              </View>
              <View style={styles.variationActions}>
                <Pressable style={[styles.button, styles.saveButton, { backgroundColor: tintColor }]}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  }}
                >
                  <ThemedText style={[styles.buttonText, styles.saveButtonText]}>Adicionar Variação</ThemedText>
                </Pressable>
              </View>
            </View>
          )}
        </View>

        <View style={styles.field}>
          <ThemedText style={[styles.label, { color: tintColor }]}>Adicionar foto?</ThemedText>
          <View style={styles.uploadWrapper}>
            <Pressable
              style={[
                styles.uploadArea,
                {
                  backgroundColor: "#D7DBE0",
                
                },
              ]}
            >
              <IconSymbol name="camera.fill" size={80} color="#9AA0A6" />
            </Pressable>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable
            onPress={handleCancel}
            style={[styles.button, styles.cancelButton, { borderColor: tintColor }]}
          >
            <ThemedText style={[styles.buttonText, { color: tintColor }]}>Desistir</ThemedText>
          </Pressable>

          <Pressable
            onPress={handleSave}
            style={[styles.button, styles.saveButton, { backgroundColor: tintColor }]}
          >
            <ThemedText style={[styles.buttonText, styles.saveButtonText]}>Salvar</ThemedText>
          </Pressable>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eae5e1",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "600",
    marginTop: 16,
    color: "#991578",
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "#991578",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
  },
  variationsWrapper: {
    alignSelf: "flex-start",
    width: "59%",
  },
  variationsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#991578",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  variationsContent: {
    gap: 12,
    paddingTop: 12,
  },
  variationActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
  variationsTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
  },
  chevronCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadWrapper: {
    paddingHorizontal: 24,
  },
  uploadArea: {
    height: 180,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 32,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    borderWidth: 2,
  },
  saveButton: {},
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  saveButtonText: {
    color: "#FFFFFF",
  },
});
