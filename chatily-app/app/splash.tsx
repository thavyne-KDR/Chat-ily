import { useState } from "react";
import { Image, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { IconSymbol } from "@/components/ui/icon-symbol";
import * as Haptics from "expo-haptics";

export default function SplashScreen() {
  const router = useRouter();
  const tintColor = useThemeColor({}, "tint");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.replace("/(tabs)");
  };

  const handleCreateAccount = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <ThemedView style={styles.container} lightColor="#eae5e1">
      <View style={styles.content}>
        <Image
          source={require("@/assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <ThemedText style={[styles.welcome, { color: tintColor }]}>Seja Bem-Vindo(a)</ThemedText>

        <View style={styles.inputContainer}>
          <ThemedText style={[styles.label, { color: tintColor }]}>E-mail:</ThemedText>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <IconSymbol name="envelope.fill" size={20} color={tintColor} />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <ThemedText style={[styles.label, { color: tintColor }]}>Senha:</ThemedText>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="••••••"
              placeholderTextColor="#999999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <IconSymbol name={showPassword ? "eye.slash.fill" : "eye.fill"} size={20} color={tintColor} />
            </Pressable>
          </View>
        </View>

        <Pressable>
          <ThemedText style={styles.forgotText}>ESQUECEU A SENHA?</ThemedText>
        </Pressable>

        <Pressable 
          style={[styles.loginButton, { backgroundColor: tintColor }]}
          onPress={handleLogin}
        >
          <ThemedText style={styles.loginButtonText}>ENTRAR</ThemedText>
        </Pressable>

        <View style={styles.createAccountContainer}>
          <ThemedText style={styles.createAccountText}>Ainda não tem uma conta?</ThemedText>
          <Pressable onPress={handleCreateAccount}>
            <ThemedText style={[styles.createAccountLink, { color: tintColor }]}>CRIAR CONTA</ThemedText>
          </Pressable>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
    marginBottom: 32,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  },
  forgotText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#999999",
    marginBottom: 24,
    alignSelf: "flex-end",
  },
  loginButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
  },
  createAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  createAccountText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#999999",
  },
  createAccountLink: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
  },
});
