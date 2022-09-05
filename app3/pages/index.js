import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function HomeContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container disableGutters maxWidth="md" component="main" sx={{ pt: 12, pb: 6 }}>
                <Typography align="center">
                    <img src="./logo.png" width="150" alt="logo" />
                </Typography>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Microservices with NextJS
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering,
                    TypeScript support, smart bundling, route prefetching, and more. No config needed.
                </Typography>
            </Container>
        </React.Fragment>
    );
}

export default function Home() {
    return <HomeContent />;
}
