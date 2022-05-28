import {
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import Canvas from '../components/UI/Canvas/Canvas';

const Main: FC = () => {
    const [finished, setFinished] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date('06/22/2022 00:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);
            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);
            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);
            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setFinished(true);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Canvas />
            <Stack
                spacing={{ base: 10, md: 12, lg: 16 }}
                pos={'absolute'}
                top={{ base: '3.5%', md: '4%', lg: '4%' }}
                left={{ base: '8%', lg: '15%' }}
                zIndex={20}
            >
                <Stack spacing={2}>
                    <Text
                        textTransform={'uppercase'}
                        color="#CC01FF"
                        fontWeight={600}
                        fontSize={{ base: '1rem', md: '2xl' }}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        JSSATE-B Center for interdisciplinary Research, PRESENTS
                    </Text>
                    <Box>
                        <Image
                            src={'../assets/images/Logo/Hackwell_logo.png'}
                            width={{ base: '300px', lg: '550px' }}
                            height={{ base: '100px', lg: '130px' }}
                        />
                    </Box>
                </Stack>
                <Stack spacing={6}>
                    {!finished && (
                        <HStack
                            spacing={{ base: 4, md: 6, lg: 8 }}
                            divider={
                                <StackDivider borderColor={'whiteAlpha.500'} />
                            }
                        >
                            <Box>
                                <Heading color="#CC01FF">{days}</Heading>
                                <Text
                                    color={'white'}
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                >
                                    DAYS
                                </Text>
                            </Box>
                            <Box>
                                <Heading color="#CC01FF">{hours}</Heading>
                                <Text
                                    color={'white'}
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                >
                                    HRS
                                </Text>
                            </Box>
                            <Box>
                                <Heading color="#CC01FF">{minutes}</Heading>
                                <Text
                                    color={'white'}
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                >
                                    MINS
                                </Text>
                            </Box>
                            <Box>
                                <Heading color="#CC01FF">{seconds}</Heading>
                                <Text
                                    color={'white'}
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                >
                                    SECS
                                </Text>
                            </Box>
                        </HStack>
                    )}
                    <Flex justifyContent={'flex-start'}>
                        <Box
                            border="2px solid gray"
                            width={{ base: '200px', md: '300px' }}
                        >
                            <Heading
                                fontSize={{ base: '1.8xl' }}
                                textAlign={'center'}
                                border={'2px solid gray'}
                                p={3}
                                width={{ base: '200px', md: '300px' }}
                                position="relative"
                                top="7px"
                                left="7px"
                                padding="1rem"
                                transform="translateZ(-10px)"
                            >
                                SPONSORED BY{' '}
                                <Image
                                    width={{ base: '200px', md: '300px' }}
                                    src={
                                        '../assets/images/Logo/Honeywell_logo.png'
                                    }
                                />
                            </Heading>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </>
    );
};

export default Main;
