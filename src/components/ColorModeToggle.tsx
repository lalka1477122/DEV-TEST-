// components/ColorModeToggle.tsx
import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeContext } from "@/components/ThemeContext";
import Brightness2TwoToneIcon from '@mui/icons-material/Brightness2TwoTone';
export function ColorModeToggle({ onClick }: { onClick: () => void }) {
    const { theme } = useThemeContext();

    return (
        <IconButton onClick={onClick} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness2TwoToneIcon /> : <Brightness7 sx={{ color: "grey" }} />}
        </IconButton>
    );
}
