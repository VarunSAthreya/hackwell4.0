import { NextPage } from 'next';
import React from 'react';
import {
    About,
    Dates,
    Hackwell,
    Main,
    Phases,
    Sponsors,
    Themes,
} from '../layout';

const Home: NextPage = () => {
    return (
        <>
            <Main />
            {/*ABOUT JSSATEB*/}
            <About />
            {/*Hackwell 4.0*/}
            <Hackwell />
            {/*THEMES*/}
            <Themes />
            {/*PHASES*/}
            <Phases />
            {/*IMPORTANT DATES*/}
            <Dates />
            {/*SPONSORS */}
            <Sponsors />
        </>
    );
};

export default Home;
