import { Card, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {

        e.preventDefault();

        const user = { email, password }
    }
    return (
        <>

            <Box className='formContainer'>
                <Card className='loginForm'>
                    <h1>LogIn </h1>
                    <form onSubmit={handleSubmit}>
                        <input type={"email"}
                            className="formData"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /><br /><br />

                        <input type={"password"}
                            className="formData"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /><br /><br />

                        <input type='submit' value="LogIn" />

                    </form>
                </Card>

            </Box>
        </>
    )
}


export default Login