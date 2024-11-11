// components/Topbar.tsx
//этот компонент используется для отображения верхнего бара

"use client";                           
import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Container } from "@mui/material";
import NextLink from "next/link";
import { ColorModeToggle } from "@/components/ColorModeToggle";
import { useThemeContext } from "@/components/ThemeContext"; // Импортируем useThemeContext из ThemeContext

export function Topbar() {
    const { theme, toggleTheme } = useThemeContext(); // Получаем текущую тему и функцию для переключения

    return (
        <AppBar  position="sticky" sx={{ background: theme.palette.mode === "dark" ? "black" : "white" }}>
            <Toolbar>
                <Container  maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Заголовок */}
                    <NextLink                         style={{ cursor: "pointer" ,
                            textDecoration: "none",
                        }} href="/" passHref>
                    
                        <Typography

                            variant="h6"
                            component="p"
                            sx={{
                                fontFamily: "monospace",
                                color: theme.palette.mode === "dark" ? "white" : "black",
                                fontSize: 30,
                                textDecoration: "none",


                                '&:hover': {
     
                                    color: theme.palette.mode === "dark" ? "gray.300" : "gray.600",
                                },
                            }}
                        >
                            📋DEV_TEST
                        </Typography>
                    </NextLink>

                    {/* Навигационные ссылки */}
                    <Box  sx={{ display: 'flex', gap: 3 }}>
                        <NextLink href="/" passHref>
                            <Button  sx={{fontFamily: "monospace"}}  color={theme.palette.mode === "dark" ? "primary" : "primary"}>
                                Главная
                            </Button>
                        </NextLink>
                        <NextLink  href="/authors" passHref>
                            <Button sx={{fontFamily: "monospace"}}  color={theme.palette.mode === "dark" ? "primary" : "primary"}>
                                Авторы
                            </Button>
                        </NextLink>
                        <NextLink  href="/about" passHref>
                            <Button sx={{fontFamily: "monospace"}}color={theme.palette.mode === "dark" ? "primary" : "primary"}>
                                О нас
                            </Button>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Button sx={{fontFamily: "monospace"}} color={theme.palette.mode ===  "dark" ? "primary" : "primary"}>
                                Вход
                            </Button>
                        </NextLink>
                    </Box>

                    {/* Переключатель темы */}
                    <ColorModeToggle onClick={toggleTheme} /> {/* Используем toggleTheme для переключения */}
                </Container>
            </Toolbar>
        </AppBar>
    );
}
