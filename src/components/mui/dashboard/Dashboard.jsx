import { createTheme, Grid } from '@mui/material'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { CardInfo } from './CardInfo'

export const Dashboard = () => {
    const defaultTheme = createTheme()
  return (
    <ThemeProvider theme={defaultTheme}>
        <Grid
        container
        spacing={2}
        justifyContent="space-between"
        sx ={{height: '100vh',padding: '20px'}}>
        <Grid item
        xs={12}
        sm={7.8}
        xl={7.8}
        lg={7.8}
        sx = {{height: '100%',padding: '10px',backgroundColor: 'lightgreen'}}
        >
            <CardInfo/>
        </Grid>            
        <Grid item
        xs={12}
        sm={4}
        xl={4}
        lg={4}
        sx = {{height: '100%',padding: '10px',backgroundColor: 'lightblue'}}
        >
        </Grid>
        </Grid>
        

    </ThemeProvider>

  )
}
