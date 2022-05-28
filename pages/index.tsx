import { NextPage } from 'next';
import React from 'react';
import {
    About,
    Dates,
    Domains,
    Hackwell,
    Main,
    Phases,
    Sponsors,
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
            <Domains />
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
