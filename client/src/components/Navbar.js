
import '../App.css';
import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Button
} from '@mui/material';


const Navbar = () => {


    return (
        <AppBar position="static">
            <Container >
                <Toolbar disableGutters className='appBar'>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Book My Show
                    </Typography>
                    <Container className='loginSection' >
                        <Button color="inherit">SignUp</Button>
                        <Button color="inherit">Login</Button>
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
