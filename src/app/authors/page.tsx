"use client";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import { Githubuser } from "@/components/githubuser";
import { Grid, GridItem } from "@chakra-ui/react"
import { Topbar } from "@/components/Topbar";

export default function AuthorsPage() {

    const users:string[] = [
        "https://api.github.com/users/lalka1477122",
        "https://api.github.com/users/MaximKashkevich",
        "https://api.github.com/users/octocat",
        "https://api.github.com/users/defunkt",
        "https://api.github.com/users/oschade",
    ];
    const desrip:string[] = [
        "автор проекта",
        "какой-то чувак",

    ]
    return (
<>
<Topbar/>


<Box px={8}>
    
    <Heading letterSpacing="tight" size="3xl" m={16} textAlign="center" >
Авторы
    </Heading>
    <Text mb={6} textAlign="center" fontSize="lg">
        Ознакомьтесь с профилями разработчиков на GitHub.
    </Text>
    <Grid templateColumns="repeat(4, 1fr)" gap="6">
        {users.map((value, index) => (
            <GridItem key={index}>
                <Githubuser 
                    description_of_what_the_developer_did_on_the_project={desrip[index]} 
                    userg={value} 
                />
            </GridItem>
        ))}
    </Grid>
</Box>
</>










    );
}
