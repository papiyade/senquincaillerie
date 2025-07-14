import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants/colors';
import { TEXT_STYLES } from '../../constants/typography';
import { DIMENSIONS, BORDER_RADIUS, SPACING } from '../../constants/spacing';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  containerStyle?: ViewStyle;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  secureTextEntry,
  ...textInputProps
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const inputContainerStyle = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    error && styles.inputContainerError,
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={inputContainerStyle}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={DIMENSIONS.iconMd}
            color={isFocused ? COLORS.primary : COLORS.gray}
            style={styles.leftIcon}
          />
        )}
        
        <TextInput
          {...textInputProps}
          style={[styles.input, leftIcon && styles.inputWithLeftIcon]}
          secureTextEntry={isSecure}
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          placeholderTextColor={COLORS.gray}
        />
        
        {secureTextEntry && (
          <TouchableOpacity onPress={toggleSecureEntry} style={styles.rightIcon}>
            <Icon
              name={isSecure ? 'visibility-off' : 'visibility'}
              size={DIMENSIONS.iconMd}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        )}
        
        {rightIcon && !secureTextEntry && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.rightIcon}>
            <Icon
              name={rightIcon}
              size={DIMENSIONS.iconMd}
              color={COLORS.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.md,
  },
  label: {
    ...TEXT_STYLES.bodySmall,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    height: DIMENSIONS.inputHeight,
    paddingHorizontal: SPACING.md,
  },
  inputContainerFocused: {
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainerError: {
    borderColor: COLORS.error,
  },
  input: {
    flex: 1,
    ...TEXT_STYLES.body,
    color: COLORS.textPrimary,
    paddingVertical: 0, // Remove default padding on Android
  },
  inputWithLeftIcon: {
    marginLeft: SPACING.sm,
  },
  leftIcon: {
    marginRight: 0,
  },
  rightIcon: {
    marginLeft: SPACING.sm,
    padding: SPACING.xs,
  },
  error: {
    ...TEXT_STYLES.caption,
    color: COLORS.error,
    marginTop: SPACING.xs,
  },
});
