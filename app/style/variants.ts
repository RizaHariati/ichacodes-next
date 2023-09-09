export const enterOpacityLeft = {
  initial: { opacity: 0, x: "-50%" },
  animate: {
    x: "0%",
    opacity: 1,

    transition: {
      duration: 0.5,
      stiffness: 30,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      stiffness: 30,
    },
  },
};

export const enterOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      duration: 0.5,
      stiffness: 30,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      stiffness: 30,
    },
  },
};

export const enterVariant = {
  initial: { y: "-100%" },
  animate: {
    y: "0%",
    transition: {
      when: "beforeChildren",
      duration: 0.1,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 30,
    },
  },
  exit: { x: "-50%" },
};

export const enterVariantChild = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, type: "spring", stiffness: 50 },
  },
  exit: { x: "-50%" },
};

export const enterTitleVariants = {
  initial: { letterSpacing: "20px", opacity: 0.5 },
  animate: {
    letterSpacing: "15px",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 30,
    },
  },
};

export const enterImageleft = {
  initial: { x: "-50%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, type: "spring", stiffness: 30 },
  },
  exit: { x: "-50%" },
};

export const enterImageRight = {
  initial: { x: "50%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, type: "spring", stiffness: 30 },
  },
  exit: { x: "-50%" },
};
