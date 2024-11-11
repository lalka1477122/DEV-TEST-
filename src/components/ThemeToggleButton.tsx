// src/ThemeToggleButton.tsx
//этот компонент используется для переключения режима темы
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from './ThemeContext';
import Brightness2TwoToneIcon from '@mui/icons-material/Brightness2TwoTone';

const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness2TwoToneIcon /> : <Brightness2TwoToneIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
