import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Button, TextField, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
      margin: theme.spacing(0, 4)
  }
}));

export default function SignIn() {

  const classes = useStyles();
  const navigate = useNavigate();

  async function handlerSignIn() {
    try {
      await authService.signIn('gabriel.lemos1001@gmail.com', 'admin123');
      navigate('/');
    }
    catch (error){
      console.log(error.response);
    }
  }

  return (

      <Grid container className={classes.root}>
        <Grid 
        item 
        container
        direction="column"

        xs={8}
        >
          
        </Grid>
        <Grid 
        item 
        xs={4}
        >
          <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          >
              <form className={classes.form}>
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="senha"
                  label="Senha"
                  name="senha"
                  autoComplete="current-password"
                  type="password"
                  />
                  <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  onClick={() => handlerSignIn()}
                  >
                      Entrar
                  </Button>

                  <Link>Esqueceu a senha?</Link>
                  <Link>Registra-se</Link>
              </form>
          </Box>
        </Grid>
      </Grid>

  )
}