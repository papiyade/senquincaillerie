import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { COLORS } from '../../constants/colors';
import { TEXT_STYLES } from '../../constants/typography';
import { SPACING, DIMENSIONS } from '../../constants/spacing';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{phone?: string; password?: string}>({});

  const validateForm = () => {
    const newErrors: {phone?: string; password?: string} = {};
    
    if (!phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
    } else if (!/^(77|78|70|76|75)\d{7}$/.test(phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format de numéro invalide (ex: 77 123 45 67)';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      // Simulation d'appel API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigation vers le dashboard
      navigation.replace('Dashboard');
    } catch (error) {
      Alert.alert('Erreur', 'Identifiants incorrects. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo et titre */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>BAOBAB</Text>
            <Text style={styles.logoSubtext}>My Baobab</Text>
          </View>
          <Text style={styles.welcomeText}>Bienvenue</Text>
          <Text style={styles.subtitleText}>
            Connectez-vous à votre compte pour accéder à vos services bancaires
          </Text>
        </View>

        {/* Formulaire de connexion */}
        <View style={styles.form}>
          <Input
            label="Numéro de téléphone"
            placeholder="77 123 45 67"
            value={phone}
            onChangeText={setPhone}
            leftIcon="phone"
            keyboardType="phone-pad"
            error={errors.phone}
            maxLength={11}
          />

          <Input
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChangeText={setPassword}
            leftIcon="lock"
            secureTextEntry
            error={errors.password}
          />

          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>

          <Button
            title="Se connecter"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}
          />
        </View>

        {/* Options alternatives */}
        <View style={styles.alternatives}>
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OU</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            title="Connexion avec OTP"
            onPress={() => navigation.navigate('OTPLogin')}
            variant="outline"
            style={styles.otpButton}
          />
        </View>

        {/* Inscription */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Vous n'avez pas de compte ?{' '}
            <Text style={styles.registerLink} onPress={handleRegister}>
              Créer un compte
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: DIMENSIONS.screenPadding,
  },
  header: {
    alignItems: 'center',
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  logoText: {
    ...TEXT_STYLES.h1,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  logoSubtext: {
    ...TEXT_STYLES.bodySmall,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  welcomeText: {
    ...TEXT_STYLES.h2,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subtitleText: {
    ...TEXT_STYLES.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  form: {
    marginBottom: SPACING.xl,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.lg,
  },
  forgotPasswordText: {
    ...TEXT_STYLES.bodySmall,
    color: COLORS.primary,
    fontWeight: '500',
  },
  loginButton: {
    marginBottom: SPACING.md,
  },
  alternatives: {
    marginBottom: SPACING.xl,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
  dividerText: {
    ...TEXT_STYLES.caption,
    color: COLORS.textSecondary,
    marginHorizontal: SPACING.md,
  },
  otpButton: {
    marginBottom: SPACING.md,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: SPACING.lg,
  },
  footerText: {
    ...TEXT_STYLES.body,
    color: COLORS.textSecondary,
  },
  registerLink: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
