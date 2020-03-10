import React, {useState} from 'react';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {backgroundColor} from './components/theme/theme';

import Timeline from './components/timeline/timeline';
import Bio from './components/bio/bio';
import ThemeToggler from './components/theme/themeToggler';
import data from './content/data.json'

const GlobalStyle = createGlobalStyle`
    *{
        font-size: 18px;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;
            margin: 0
            background: ${backgroundColor}
    }
    h1 {
        font-size: 2.5rem;
    }
`;

const Container = styled.div`
    display: flex
`;

const App = () => {
    const [names] = useState(data.map(object => object.name));
    const [bios] = useState(data.map(object => object.bio));
    const [quotes] = useState(data.map(object => object.quote));
    const [readings] = useState(data.map(object => object.readings))
    const [index, setIndex] = useState(0);
    const [theme, setTheme] = useState({ mode: 'light'});

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Timeline names={names} index={index} setIndex={setIndex} />
                <Bio bios={bios} names={names} quotes={quotes} readings={readings} index={index} />
                <ThemeToggler theme={theme} setTheme={setTheme} />
            </Container>
        </ThemeProvider>
    )
}

export default App 