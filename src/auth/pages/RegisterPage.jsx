import { Link as RouterLink } from 'react-router-dom'
import { Grid, TextField, Typography, Button, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    
      <AuthLayout title='Register'>

        <form action="">
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Name"
                  type='text'
                  placeholder='Adrian'
                  fullWidth
                />
            </Grid>
            
            <Grid item xs={ 12 } sx={{ mt:2 }}>
                <TextField 
                  label="Email"
                  type='email'
                  placeholder='correo@correo.com'
                  fullWidth
                />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
                label="Password"
                type='email'
                placeholder='Password'
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:0 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant='contained' fullWidth>
                  Sign Up
                </Button>
              </Grid>
            </Grid>

          </Grid>
          
          <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ ml: 1 }}>Have you an account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Log In
            </Link>
          </Grid>

        </form>
        
      </AuthLayout>
  )
}
