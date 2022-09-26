import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react';


export function CustomTheme({ children }) {
    const Theme = useMemo(() => createTheme({
        palette: {
            white:{
                main:'#FFF',
                light:'#F5F5F7',
                dark:'#A0A2A8'
            },
            dark:{
                main:'#000',
                light:'#222'
            },
            red:{
                main:'#FF0000',
                light:'#ffcdd2'
            },
            primary: {
                main: '#fff',
                light: '#fff'
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // contrastText: '#ffcc00',
            },
            adminColor:{
                main:'#000723'
            },
            addFoodBtn:{
                main:'#F5F5F7'
            },
            addIcon:{
                main:'#66B60F',
            },
            buttonColor:{
                main:'#66B60F'

            }
        },
        padding:{},
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },

    }), []);
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
}