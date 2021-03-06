export const sharedButtonStyles = {
  boxSizing: "border-box !important",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontFamily: "body",
  textTransform: "uppercase",
  fontSize: "xs",
  variant: "transitions.m",
  letterSpacing: 1,
  boxShadow: "medium",
  lineHeight: "tight",
  py: "xs",
  px: "m",
  borderRadius: "xs",
  fontWeight: 500,
  display: "inline-block",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "hover",
    color: "white",
    a: {
      color: "white",
    },
  },
  a: {
    color: "white",
    textDecoration: "none",
  },
  "&[disabled]": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
}

const small = {
  py: 4,
  px: "xs",
  fontSize: "xxs",
  fontWeight: "bold",
}
const outline = {
  ...sharedButtonStyles,
  padding: "xxs",
  bg: "transparent",
  border: "1px solid",
  color: "text",
  fontWeight: "bold",
  borderColor: "text",
  transition: ".3s",
  boxShadow: "none",
  a: {
    color: "text",
  },
  ":hover:not([disabled])": {
    borderColor: "primary",
    bg: "primary",
    color: "white",
  },
}

const primary = {
  ...sharedButtonStyles,
  bg: "primary",
}

const secondary = {
  ...sharedButtonStyles,
  bg: "secondary",
}
const gradientPrimary = {
  variant: "gradients.primary",
}

const gradientSecondary = {
  variant: "gradients.secondary",
}

export const buttons = {
  primary: {
    ...primary,
    gradient: {
      ...primary,
      ...gradientPrimary,
    },
    small: {
      ...primary,
      ...small,
    },
  },
  secondary: {
    ...secondary,
    gradient: {
      ...secondary,
      ...gradientSecondary,
    },
    small: {
      ...secondary,
      ...small,
    },
  },
  outline: {
    ...outline,
    small: {
      ...outline,
      ...small,
    },
  },
}
