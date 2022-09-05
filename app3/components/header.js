import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    NextJS Microservices
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/"
                        sx={{ my: 1, mx: 1.5 }}
                        style={{ textDecoration: 'none' }}
                    >
                        Home
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="/todos"
                        sx={{ my: 1, mx: 1.5 }}
                        style={{ textDecoration: 'none' }}
                    >
                        Todos
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="faqs"
                        sx={{ my: 1, mx: 1.5 }}
                        style={{ textDecoration: 'none' }}
                    >
                        Faqs
                    </Link>
                </nav>
                <Button href="/signIn" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}