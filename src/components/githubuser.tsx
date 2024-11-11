"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress, Link } from "@mui/material";
//этот компонент используется для отображения информации о пользователе GitHub
interface GitHubUser {
    avatar_url: string;
    html_url: string;
    public_repos: number;
    name: string;
    login: string;
}

interface GithubuserProps {
    userg: string;
    description_of_what_the_developer_did_on_the_project: string;
}

export function Githubuser({ userg, description_of_what_the_developer_did_on_the_project }: GithubuserProps) {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWithRetry = async (url: string, retries: number = 3, delay: number = 500): Promise<GitHubUser | null> => {
        for (let attempt = 0; attempt < retries; attempt++) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки данных: ${response.status}`);
                }
                return await response.json();
            } catch (err) {
                if (attempt < retries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, attempt))); // Экспоненциальная задержка
                } else {
                    throw err; // Прекращаем попытки после последнего
                }
            }
        }
        return null;
    };

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetchWithRetry(userg)
            .then((json: GitHubUser | null) => {
                setUser(json);
                setIsLoading(false);
            })
            .catch(err => {
                setError(`Не удалось загрузить данные пользователя ${userg}`);
                setIsLoading(false);
            });
    }, [userg]);

    return (
        <Box  p={5} maxWidth="sm" border={1} borderRadius="lg" boxShadow={3} textAlign="center">
            {isLoading ? (
                <CircularProgress color="primary" />
            ) : error ? (
                <Typography color="error.main">{error}</Typography>
            ) : (
                user && (
                    <>
                        <Box  mb={2} borderRadius="50%" overflow="hidden" mx="auto" width={180} height={180}>
                            <Image
                                src={user.avatar_url}
                                alt="Аватарка пользователя"
                                width={180}
                                height={180}
                                priority
                            />
                        </Box>
                        <Typography   fontWeight="normal" variant="h6" component="h2" mb={1} >
                            <Link sx={{ hover: { textDecoration: "underline" } }} style={{ textDecoration: "none"  }} href={user.html_url}  color="primary" target="_blank" rel="noopener noreferrer">
                                {user.name}
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {description_of_what_the_developer_did_on_the_project}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => window.open(user.html_url, "_blank")}
                            sx={{ marginTop: 2 }}
                        >
                            Перейти на GitHub
                        </Button>
                    </>
                )
            )}
        </Box>
    );
}
