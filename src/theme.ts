// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#09090b',  // глухой бирюзовый для основного фона
    },
    secondary: {
      main: '#ff4081',  // тёплый розовый для акцентов
    },
    background: {
      default: '#f5f5f5',  // мягкий светлый фон для лучшего восприятия
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',  // тёмно-серый для контраста с фоном
      secondary: '#757575', // нейтральный для второстепенного текста
    },
  },
  typography: {
    fontFamily: 'Geist Sans, sans-serif', // добавление вашего шрифта
    h1: { fontSize: '2.2rem', fontWeight: 700, color: '#212121' },
    h2: { fontSize: '1.8rem', fontWeight: 600, color: '#212121' },
    body1: { fontSize: '1rem', lineHeight: 1.6, color: '#333' },
    button: { textTransform: 'none', fontWeight: 600 }, // убираем капс для минималистичного вида
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,  // плавные закругления
          padding: '8px 16px',
          ':hover': {
            backgroundColor: '#e0e0e0',  // легкий оттенок для светлой темы при наведении
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',  // мягкий голубой оттенок для акцентов
    },
    secondary: {
      main: '#ff80ab',  // ярко-розовый для динамичных акцентов
    },
    background: {
      default: '#121212', // насыщенный тёмный фон для глубины
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',  // светло-серый для основного текста
      secondary: '#b0b0b0', // нейтральный для второстепенного текста
    },
  },
  typography: {
    fontFamily: 'Geist Sans, sans-serif',
    h1: { fontSize: '2.2rem', fontWeight: 700, color: '#ffffff' },
    h2: { fontSize: '1.8rem', fontWeight: 600, color: '#ffffff' },
    body1: { fontSize: '1rem', lineHeight: 1.6, color: '#e0e0e0' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          ':hover': {
            backgroundColor: '#333333',  // эффект тёмного при наведении
          },
        },
      },
    },
  },
});
