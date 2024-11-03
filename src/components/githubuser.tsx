"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Box, Text, Heading, Button, Spinner, Link } from "@chakra-ui/react";

interface GitHubUser {
    avatar_url: string;
    html_url: string;
    public_repos: number;
    name: string;
}

export function Githubuser({ userg, description_of_what_the_developer_did_on_the_project
}: { userg: string,description_of_what_the_developer_did_on_the_project
:string}) {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(userg)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Не удалось загрузить данные пользователя ${userg}`);
                }
                return response.json();
            })
            .then((json: GitHubUser) => {
                setUser(json);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [userg]);

    return (
        <Box p={6} maxW="sm" borderWidth="1px" borderRadius="lg" boxShadow="lg" textAlign="center">
            {isLoading ? (
                <Spinner size="xl" color="teal.500" />
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : (
                user && (
                    <>
                        <Box mb={4} borderRadius="full" overflow="hidden" mx="auto" width={180} height={180}>
                            <Image
                                src={user.avatar_url}
                                alt="Аватарка пользователя"
                                width={180}
                                height={180}
                                priority
                            />
                        </Box>
                        <Heading as="h2" size="lg" mb={2}>
                            <Link href={user.html_url}  color="teal.500">
                                {user.name}
                            </Link>
                        </Heading>
                        <Text fontSize="md" color="gray.600">
                            {description_of_what_the_developer_did_on_the_project}
                        </Text>
                        <Button
                            mt={4}
                            colorScheme="teal"
                            onClick={() => window.open(user.html_url, "_blank")}
                        >
                            Перейти на GitHub
                        </Button>
                    </>
                )
            )}
        </Box>
    );
}
