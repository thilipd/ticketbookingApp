import { Card, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {



    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [mobile, setMobile] = useState();

    const [user, setUser] = useState({});


    const fetchData = async (user) => {
        try {
            await axios.post('http://localhost:5000/api/users/signup', JSON.stringify(user)).data





        } catch (err) {
            console.log('error')
            console.log(err)

        }

    }




    const handleSubmit = (e) => {

        e.preventDefault();

        setUser({ name, email, password, mobile })


        fetchData(user);
    }
    console.log(user)

    return (
        <>

            <Box className='formContainer'>
                <Card className='signupForm'>
                    <h1>Sing Up </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            className="formData"
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} /><br /><br />
                        <input type={"email"}
                            className="formData"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /><br /><br />
                        <input type={"text"}
                            className="formData"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /><br /><br />
                        <input type={"number"}
                            className="formData"
                            placeholder='Mobile'
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)} /><br /><br />
                        <input type='submit' value="Sign Up" />

                    </form>
                </Card>

            </Box>
        </>
    )
}

export default Signup