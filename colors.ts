/**
 * Color Palette Reference
 *
 * Guia rápido de referência das cores do sistema
 * Extraído do design do Admin Login Panel
 */

export const colors = {
  // ============================================
  // LIGHT MODE COLORS
  // ============================================
  light: {
    // Backgrounds
    surface: '#f8f9fa', // Fundo principal da página
    surfaceRaised: '#ffffff', // Cards, modais, elevações
    surfaceHover: '#f1f3f5', // Hover em superfícies

    // Primary (Blue) - Botões e ações principais
    primary: '#2f8af5', // Botão "Sign in", links
    primaryHover: '#1c7ae8', // Hover state
    primaryForeground: '#ffffff', // Texto em bg primary

    // Secondary - Ações secundárias
    secondary: '#f1f5f9',
    secondaryHover: '#e2e8f0',
    secondaryForeground: '#1e293b',

    // Muted - Estados desabilitados
    muted: '#f8fafc',
    mutedHover: '#f1f5f9',
    mutedForeground: '#94a3b8', // Texto secundário, placeholders

    // Text colors
    foreground: '#0f172a', // "Login to Admin Panel", labels
    foregroundSubtle: '#64748b', // Descrições
    foregroundMuted: '#94a3b8', // "Secured by...", copyright

    // Borders
    border: '#e2e8f0', // Bordas de inputs e cards
    borderHover: '#cbd5e1',
    input: '#e5e7eb', // Border específico de inputs

    // States
    destructive: '#ef4444',
    destructiveHover: '#dc2626',
    destructiveForeground: '#ffffff',

    success: '#10b981',
    successHover: '#059669',
    successForeground: '#ffffff',

    warning: '#f59e0b',
    warningHover: '#d97706',
    warningForeground: '#ffffff',

    info: '#3b82f6',
    infoHover: '#2563eb',
    infoForeground: '#ffffff',

    // Focus ring
    ring: '#2f8af5',
    ringOffset: '#ffffff',
  },

  // ============================================
  // DARK MODE COLORS
  // ============================================
  dark: {
    // Backgrounds
    surface: '#0f172a',
    surfaceRaised: '#1e293b',
    surfaceHover: '#334155',

    // Primary
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    primaryForeground: '#ffffff',

    // Secondary
    secondary: '#1e293b',
    secondaryHover: '#334155',
    secondaryForeground: '#f1f5f9',

    // Muted
    muted: '#1e293b',
    mutedHover: '#334155',
    mutedForeground: '#94a3b8',

    // Text colors
    foreground: '#f1f5f9',
    foregroundSubtle: '#cbd5e1',
    foregroundMuted: '#94a3b8',

    // Borders
    border: '#334155',
    borderHover: '#475569',
    input: '#334155',

    // States
    destructive: '#ef4444',
    destructiveHover: '#dc2626',
    destructiveForeground: '#ffffff',

    success: '#10b981',
    successHover: '#059669',
    successForeground: '#ffffff',

    warning: '#f59e0b',
    warningHover: '#d97706',
    warningForeground: '#0f172a',

    info: '#3b82f6',
    infoHover: '#2563eb',
    infoForeground: '#ffffff',

    // Focus ring
    ring: '#3b82f6',
    ringOffset: '#0f172a',
  },
} as const;

// ============================================
// COLOR USAGE GUIDE
// ============================================

export const colorUsage = {
  backgrounds: {
    page: 'bg-surface',
    card: 'bg-surface-raised',
    hover: 'hover:bg-surface-hover',
  },

  buttons: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
    ghost: 'bg-transparent hover:bg-muted',
    destructive:
      'bg-destructive text-destructive-foreground hover:bg-destructive-hover',
  },

  text: {
    heading: 'text-foreground',
    body: 'text-foreground-subtle',
    muted: 'text-muted-foreground',
    link: 'text-primary hover:text-primary-hover',
  },

  borders: {
    default: 'border-border',
    input: 'border-input',
    focus: 'focus-visible:ring-2 focus-visible:ring-ring',
  },

  states: {
    disabled: 'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
    error: 'border-destructive text-destructive',
    success: 'border-success text-success',
  },
} as const;

// ============================================
// SEMANTIC COLOR MAPPING
// ============================================

/**
 * Mapeamento semântico de cores para casos de uso específicos
 */
export const semanticColors = {
  medical: {
    primary: colors.light.primary, // Azul médico
    success: colors.light.success, // Status positivo
    warning: colors.light.warning, // Alertas
    error: colors.light.destructive, // Erros críticos
  },

  appointment: {
    scheduled: colors.light.info, // Agendado
    confirmed: colors.light.success, // Confirmado
    pending: colors.light.warning, // Pendente
    cancelled: colors.light.destructive, // Cancelado
  },

  status: {
    active: colors.light.success,
    inactive: colors.light.mutedForeground,
    processing: colors.light.info,
    error: colors.light.destructive,
  },
} as const;

// ============================================
// ACCESSIBILITY HELPERS
// ============================================

/**
 * Combinações de cores validadas para acessibilidade (WCAG AA)
 */
export const accessibleCombinations = [
  {
    bg: colors.light.primary,
    fg: colors.light.primaryForeground,
    contrast: 4.5,
  },
  {
    bg: colors.light.destructive,
    fg: colors.light.destructiveForeground,
    contrast: 4.5,
  },
  { bg: colors.light.surface, fg: colors.light.foreground, contrast: 12.63 },
  {
    bg: colors.light.surfaceRaised,
    fg: colors.light.foreground,
    contrast: 14.5,
  },
] as const;
