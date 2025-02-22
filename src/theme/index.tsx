import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { BetaColors, Colors } from './styled'
import { useIsBetaUI } from '../hooks/useLocation'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#2C2F36' : '#EDEEF2',
    text6: darkMode ? '#111111' : '#EDEEF2',
    text7: darkMode ? '#e6e9ec' : '#000000',
    text8: darkMode ? '#707070' : '#565A69',
    text9: darkMode ? '#A3A3A3' : '#000000',
    text10: darkMode ? '#FAF9FD' : '#000000',
    text11: darkMode ? '#18C145' : '#18C145',
    text12: darkMode ? '#E84142' : '#E84142',

    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FFFFFF',
    bg2: darkMode ? '#2C2F36' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',
    bg6: darkMode ? '#1c1c1c' : '#F7F8FA',
    bg7: darkMode ? '#2C2D33' : '#F7F8FA',
    bg8: darkMode ? '#212427' : '#212427',
    bg9: darkMode ? '#ffffff' : '#000000',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    modalBG2: darkMode ? 'rgba(0,0,0,.6)' : 'rgba(0,0,0,0.6)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#2172E5' : '#FF6B00',
    primary2: darkMode ? '#3680E7' : '#FF6B00',
    primary3: darkMode ? '#4D8FEA' : '#FF6B00',
    primary4: darkMode ? '#376bad70' : '#FF6B00',
    primary5: darkMode ? '#153d6f70' : '#FF6B00',
    primary6: darkMode ? '#2172E5' : '#FFFFFF',

    // color text
    primaryText1: darkMode ? '#6da8ff' : '#ffffff',

    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    red3: '#E84142',
    red3Gradient: 'rgba(232, 65, 66, 0.3)',
    green1: '#27AE60',
    green2: '#18C145',
    green2Gradient: ' rgba(24, 193, 69, 0.3)',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    orange1: '#E6E9EC',
    blue1: '#2172E5',

    avaxRed: '#E84142',

    // beta theme color
    color1: '#E67826',
    color2: '#707070',
    color3: '#FF6B00'

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',
  }
}

export function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export function betaColors(darkMode: boolean): BetaColors {
  return {
    ...colors(darkMode),

    // text
    text7: darkMode ? '#e6e9ec' : '#000000',
    text8: darkMode ? '#707070' : '#565A69',
    text9: darkMode ? '#282828' : '#282828',

    // backgrounds / greys
    bg1: darkMode ? '#212429' : '#FFFFFF',
    bg2: darkMode ? '#111111' : '#F7F8FA',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',
    bg6: darkMode ? '#1c1c1c' : '#FFFFFF',
    bg7: darkMode ? '#2C2D33' : '#FFFFFF',
    bg8: darkMode ? '#212427' : '#212427',

    //primary colors
    primary1: darkMode ? '#FF6B00' : '#FF6B00',
    primary2: darkMode ? '#FF6B00' : '#FF6B00',
    primary3: darkMode ? '#FF6B00' : '#FF6B00',
    primary4: darkMode ? '#FF6B00' : '#FF6B00',
    primary5: darkMode ? '#FF6B00' : '#FF6B00',
    primary6: darkMode ? '#FF6B00' : '#FFFFFF',

    // color text
    primaryText1: darkMode ? '#6da8ff' : '#ffffff',

    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    yellow2: '#FF6B00',

    switch: {
      onColor: '#FF6B00',
      offColor: '#CED0D9',
      backgroundColor: '#717171'
    }
  }
}

export function betaThemeFn(darkMode: boolean): DefaultTheme {
  return {
    ...theme(darkMode),
    ...betaColors(darkMode)
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()
  const isBeta = useIsBetaUI()

  const themeObject = useMemo(() => theme(darkMode), [darkMode])
  const betaThemeObject = useMemo(() => betaThemeFn(darkMode), [darkMode])

  return (
    <StyledComponentsThemeProvider theme={isBeta ? betaThemeObject : themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle<{ isBeta: boolean }>`
html, input, textarea, button {
  font-family: ${({ isBeta }) => (isBeta ? "'Poppins', sans-serif" : "'Inter', sans-serif")};
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: ${({ isBeta }) => (isBeta ? "'Poppins', sans-serif" : "'Inter var', sans-serif")};
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
`

export const ThemedGlobalStyle = createGlobalStyle<{ isBeta: boolean }>`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: ${({ isBeta }) => (isBeta ? 'unset' : '100vh')};
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${({ theme, isBeta }) =>
    isBeta
      ? 'unset'
      : `radial-gradient(50% 50% at 50% 50%, ${transparentize(0.85, theme.primary1)} 0%, ${transparentize(
          1,
          theme.bg1
        )} 100%)`};
  background-color:  ${({ theme, isBeta }) => (isBeta ? theme.bg6 : 'unset')};
}
`
