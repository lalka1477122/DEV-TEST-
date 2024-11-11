import Grid from '@mui/material/Grid2';
import { Box, Typography } from "@mui/material";
import { Githubuser } from '@/components/Githubuser';


export default function AuthorsPage() {
    const users: string[] = [
        "https://api.github.com/users/lalka1477122",
        "https://api.github.com/users/MaximKashkevich",
        "https://api.github.com/users/octocat",
        "https://api.github.com/users/defunkt",
        "https://api.github.com/users/oschade",
    ];
    
    const desrip: string[] = [
        "автор проекта",
        "какой-то чувак",
        "разработчик GitHub",
        "основатель GitHub",
        "участник проекта",
    ];

    return (
        <Box px={8}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', margin: '64px 0' }}>
                Авторы
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Ознакомьтесь с профилями разработчиков на GitHub.
            </Typography>
            <Grid align="center" justifyContent="center" display="flex" sx={{ margin: '64px 0' }} container spacing={4}>
                {users.map((value, index) => (
                    <Grid item xs={22} sm={4} md={4} key={index}>
                        <Githubuser 
                            description_of_what_the_developer_did_on_the_project={desrip[index]} 
                            userg={value} 
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
