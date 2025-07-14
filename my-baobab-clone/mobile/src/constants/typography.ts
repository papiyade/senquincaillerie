// Typographie de l'application My Baobab
export const FONTS = {
  // Tailles de police
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  
  // Poids de police
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
  
  // Hauteurs de ligne
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};

// Styles de texte prédéfinis
export const TEXT_STYLES = {
  h1: {
    fontSize: FONTS.sizes.xxxl,
    fontWeight: FONTS.weights.bold,
    lineHeight: FONTS.lineHeights.tight,
  },
  h2: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: FONTS.weights.bold,
    lineHeight: FONTS.lineHeights.tight,
  },
  h3: {
    fontSize: FONTS.sizes.xl,
    fontWeight: FONTS.weights.semiBold,
    lineHeight: FONTS.lineHeights.normal,
  },
  body: {
    fontSize: FONTS.sizes.md,
    fontWeight: FONTS.weights.regular,
    lineHeight: FONTS.lineHeights.normal,
  },
  bodySmall: {
    fontSize: FONTS.sizes.sm,
    fontWeight: FONTS.weights.regular,
    lineHeight: FONTS.lineHeights.normal,
  },
  caption: {
    fontSize: FONTS.sizes.xs,
    fontWeight: FONTS.weights.regular,
    lineHeight: FONTS.lineHeights.normal,
  },
  button: {
    fontSize: FONTS.sizes.md,
    fontWeight: FONTS.weights.semiBold,
    lineHeight: FONTS.lineHeights.tight,
  },
  amount: {
    fontSize: FONTS.sizes.xxl,
    fontWeight: FONTS.weights.bold,
    lineHeight: FONTS.lineHeights.tight,
  },
};
