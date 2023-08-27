import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SecondMainContents({ changeBlurredBackgroundColor, SetLoggedInUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ resultAuth, setResultAuth ] = useState(false);

    const auth = getAuth(app);
    const nav = useNavigate();

    function handleSubmit() {
        signInWithEmailAndPassword(auth, email, password)
        .then((user) =>{
            setResultAuth(true);
            changeBlurredBackgroundColor(resultAuth);
            SetLoggedInUser(user)
            nav('/');
        })
        .catch((error) => {
            console.log(error.code, error.message);
            changeBlurredBackgroundColor(resultAuth);
        });
    }

    return (
        <>
            <Box component="form" noValidate sx={{ 
                width: 500,
                height: 150,
                margin: "auto",
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    inputProps={{ "data-testid": "email-input" }}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    inputProps={{ "data-testid": "password-input" }}
                    onChange={e => setPassword(e.target.value)}
                />
            </Box>
            <Button
                type="submit"
                data-testid="signin-button"
                onClick={handleSubmit}
                variant="contained"
                color='success'
                sx={{
                    backgroundColor: "#00fa00",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontSize: "17px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 5px #000000",
                    opacity: 0.9,
                    textTransform: 'none',
                    position: "relative",
                    top: "50px"
                }}
            >
                Sign in
            </Button>
        </>
    );
}