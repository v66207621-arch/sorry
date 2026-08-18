import { motion } from 'framer-motion'

/**
 * GlowButton — tactile button with hover/press/glow states
 *
 * Props:
 *  - onClick: function
 *  - children: ReactNode
 *  - id: string (for accessibility)
 *  - variant: 'primary' | 'secondary' | 'ghost'
 *  - size: 'sm' | 'md' | 'lg'
 *  - className: extra classes
 */
export default function GlowButton({
  onClick,
  children,
  id,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const sizeStyles = {
    sm: { padding: '0.6rem 1.5rem', minHeight: '44px', fontSize: 'var(--text-xs)' },
    md: { padding: '0.85rem 2rem', minHeight: '52px', fontSize: 'var(--text-sm)' },
    lg: { padding: '1rem 2.5rem', minHeight: '58px', fontSize: 'var(--text-md)' },
  }

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, rgba(232, 67, 106, 0.18), rgba(232, 67, 106, 0.06))',
      border: '1px solid rgba(232, 67, 106, 0.45)',
      color: 'var(--text-primary)',
      boxShadow: '0 0 18px rgba(232, 67, 106, 0.18), inset 0 0 18px rgba(232, 67, 106, 0.04)',
    },
    secondary: {
      background: 'rgba(255, 245, 247, 0.05)',
      border: '1px solid rgba(255, 245, 247, 0.15)',
      color: 'var(--text-muted)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      border: '1px solid rgba(232, 67, 106, 0.2)',
      color: 'var(--text-muted)',
      boxShadow: 'none',
    },
  }

  return (
    <motion.button
      id={id}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? {
        scale: 1.04,
        y: -2,
        boxShadow: '0 0 28px rgba(232, 67, 106, 0.4), 0 0 55px rgba(232, 67, 106, 0.18), inset 0 0 22px rgba(232, 67, 106, 0.08)',
        borderColor: 'rgba(232, 67, 106, 0.75)',
        background: 'linear-gradient(135deg, rgba(232, 67, 106, 0.28), rgba(232, 67, 106, 0.10))',
      } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: '50px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        letterSpacing: '0.02em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        whiteSpace: 'nowrap',
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
