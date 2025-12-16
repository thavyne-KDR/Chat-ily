import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Card } from "@/components/ui/card";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useAuth } from "@/hooks/use-auth";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const tintColor = useThemeColor({}, "tint");
  const { user, logout } = useAuth();

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
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { backgroundColor: tintColor }]}>
            <ThemedText style={styles.avatarText}>
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </ThemedText>
          </View>
          <ThemedText style={styles.userName}>{user?.name || "Usuário"}</ThemedText>
          <ThemedText style={styles.userEmail}>{user?.email || "email@exemplo.com"}</ThemedText>
        </View>

        <View style={styles.optionsContainer}>
          <Card bordered style={styles.optionCard}>
            <Pressable style={styles.option}>
              <ThemedText style={styles.optionText}>Configurações</ThemedText>
            </Pressable>
          </Card>

          <Card bordered style={styles.optionCard}>
            <Pressable style={styles.option}>
              <ThemedText style={styles.optionText}>Notificações</ThemedText>
            </Pressable>
          </Card>

          <Card bordered style={styles.optionCard}>
            <Pressable style={styles.option}>
              <ThemedText style={styles.optionText}>Ajuda</ThemedText>
            </Pressable>
          </Card>

          <Card bordered style={styles.optionCard}>
            <Pressable style={styles.option}>
              <ThemedText style={styles.optionText}>Sobre</ThemedText>
            </Pressable>
          </Card>
        </View>

        <Pressable
          onPress={logout}
          style={[styles.logoutButton, { borderColor: tintColor }]}
        >
          <ThemedText style={[styles.logoutText, { color: tintColor }]}>Sair</ThemedText>
        </Pressable>
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
  avatarContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  userName: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 32,
  },
  optionCard: {
    width: "100%",
  },
  option: {
    paddingVertical: 4,
  },
  optionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  logoutButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
});
