// components/Topbar.tsx
"use client"
import { Box, Grid, Heading, Link, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { ColorModeToggle } from "../components/color-mode-toggle";
import { useTheme } from "next-themes";

export function Topbar() {
    const { theme, setTheme } = useTheme(); // Получаем текущую тему и функцию для её изменения

    return (
        <Box
            display="block"
            position="sticky"
            top={0}
            left={0}
            background={theme === "dark" ? "black" : "white"} // Фон в зависимости от темы
            p={5}
            zIndex={1000}
            
        >
            <Grid
                templateColumns="auto 1fr auto"
                alignItems="center"
                maxW="1200px"
                mx="auto"
                gap={4}
            >
                {/* Логотип */}
                <NextLink href="/" passHref>
                    <Link _hover={{ textDecoration: "none", color: "white" }}>
                        {/* <Image
                            src="https://em-content.zobj.net/source/au-kddi/190/face-with-stuck-out-tongue-and-winking-eye_1f61c.png" // Убедитесь, что путь к изображению правильный
                            alt="Логотип"
                            boxSize="40px" // Установите размер логотипа
                            mr={2} // Отступ справа
                            
                        /> */}
                    </Link>
                </NextLink>

                {/* Заголовок и навигационные ссылки */}
                <Grid templateColumns="repeat(17, auto)" gap={4} alignItems="center">
                    <Heading size="md">
                        <NextLink href="/" passHref>
                            <Link fontFamily="monospace" color={theme === "dark" ? "white" : "black"} fontSize={30} _hover={{ content: `"["`, textDecoration: "none", color: theme === "dark" ? "gray.300" : "gray.600" }}>🕷️DEV_TEST</Link>
                        </NextLink>
                    </Heading>
                    <NextLink href="/" passHref>
                        <Link color={theme === "dark" ? "white" : "black"} _hover={{  color: theme === "dark" ? "gray.300" : "gray.600" }}>Главная</Link>
                    </NextLink>
                    <NextLink href="/authors" passHref>
                        <Link color={theme === "dark" ? "white" : "black"} _hover={{  color: theme === "dark" ? "gray.300" : "gray.600" }}>Авторы</Link>
                    </NextLink>
                    <NextLink href="/about" passHref>
                        <Link color={theme === "dark" ? "white" : "black"} _hover={{  color: theme === "dark" ? "gray.300" : "gray.600" }}>О нас</Link>
                    </NextLink>
                </Grid>

                {/* Переключатель темы */}
                <Box justifySelf="end">
                    <ColorModeToggle />
                </Box>
            </Grid>
        </Box>
    );
}
