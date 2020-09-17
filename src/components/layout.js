import React from 'react'
import { Container} from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../utils/styles/global';
import theme from '../utils/styles/theme';

import Head from './head'
import Header from './header';
import Footer from './footer'
import Layout from '../styles/layout.module.scss'
import '../styles/index.scss'

function layout(props) {
    return (
        <ThemeProvider theme={theme}>
        <Container className={Layout.container}>
            <div className={Layout.content}>
                <Head />
                <Header />
                <div className="py-3">
                    {props.children}
                </div>
            </div>
            <Footer />
        </Container>
        <GlobalStyles />
        </ThemeProvider>
    )
}




export default layout
