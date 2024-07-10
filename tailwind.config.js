export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        customFont1: "'Georama', sans-serif",
      },
      colors: {
        customColorBackground: "#000",
        customColorMenuBackground: "#000",
        customColorMenuBackgroundActive: "#000",
        customColorMenuText: "#fef6f2",
        customColorMenuTextActive: "#eb5939",

        customColorSection1a: "#eb5939",
        customColorSection1b: "#d84b2c",
        customColorSection1Text1: "#141414",
        customColorSection1Text2: "#fef6f2",
        customColorSection1Text3: "#141414",

        customColorSection2a: "#141414",
        customColorSection2b: "#141414",
        customColorSection2Text1: "#eb5939",
        customColorSection2Text2: "#fef6f2",
        customColorSection2Text3: "#eb5939",

        customColorSection3a: "#eb5939",
        customColorSection3b: "#d84b2c",
        customColorSection3Text1: "#141414",
        customColorSection3Text2: "#fef6f2",
        customColorSection3Text3: "#141414",

        customColorSection4a: "#141414",
        customColorSection4b: "#fef6f2",
        customColorSection4Text1: "#fef6f2",
        customColorSection4Text2: "#eb5939",
        customColorSection4Text3: "#fef6f2",
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      fontStyle: {
        italic: 'italic',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        reveal: {
          '0%': { opacity: 0, transform: 'opacity(100%)' },
        },
        menuin: {
          '0%': {transform: 'translateX(1000px) scaleX(1) scaleY(1)', filter: 'blur(40px)', opacity: '0'},
          '100%': {transform: 'translateX(0) scaleY(1) scaleX(1)', filter: 'blur(0)', opacity: '1'},
        },
        jello: {
          '0%': {transform: 'scale3d(1, 1, 1)'},
          '30%': {transform: 'scale3d(1.25, 0.75, 1)'},
          '40%': {transform: 'scale3d(0.75, 1.25, 1)'},
          '50%': {transform: 'scale3d(1.15, 0.85, 1)'},
          '65%': {transform: 'scale3d(0.95, 1.05, 1)'},
          '75%': {transform: 'scale3d(1.05, 0.95, 1)'},
          '100%': {transform: 'scale3d(1, 1, 1)'},
        },
        flip: {
          '0%': {transform: 'rotateZ(0)'},
          '100%': {transform: 'rotateZ(180deg)'},
        },
        tilt: {
          '0%': {transform: 'rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg)', opacity: '0'},
          '100%': {transform: 'rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg)', opacity: '1'},
        }
      },
      animation: {
        shake: 'shake 5s ease-in-out infinite',
        reveal: 'reveal 1s ease-in forwards',
        menuin: 'menuin 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        jello: 'jello 0.6s both',
        flip: 'flip 0.25s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        tilt: 'tilt 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
    },
  },
  plugins: [],
}