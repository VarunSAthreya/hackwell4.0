import {
    Box,
    BoxProps,
    Divider,
    DividerProps,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    SimpleGridProps,
    Stack,
    StackProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { box, divider, simpleGrid, stack } from '../util/variants';

const Domains: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionBox = motion<BoxProps>(Box);
    const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);

    return (
        <MotionStack
            minH={'75vh'}
            direction={{ base: 'column' }}
            my={10}
            id="domains"
            spacing={10}
            variants={stack}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Flex alignItems={'center'} justifyContent={'center'}>
                <MotionDivider
                    bg={'#CC01FF'}
                    height={'2px'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={divider}
                />
                <Box
                    border="2px solid #CC01FF"
                    width={{ base: '220px', lg: '500px' }}
                >
                    <Heading
                        fontSize={{ base: '1.1rem', md: '4xl' }}
                        textAlign={'center'}
                        border={'2px solid #CC01FF'}
                        p={3}
                        width={{ base: '220px', lg: '500px' }}
                        position="relative"
                        top="7px"
                        left="7px"
                        padding="1rem"
                        transform="translateZ(-10px)"
                    >
                        DOMAINS
                    </Heading>
                </Box>
                <MotionDivider
                    bg={'#CC01FF'}
                    height={'2px'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={divider}
                />
            </Flex>
            <MotionSimpleGrid
                columns={{ base: 2 }}
                p={{ base: 0, lg: 10 }}
                backgroundImage={'./assets/images/Main/theme.png'}
                backgroundPosition={'center'}
                backgroundRepeat={'no-repeat'}
                whileInView="whileInView"
                viewport={{ once: true }}
                variants={simpleGrid}
            >
                <MotionBox
                    borderRight={'1px solid #2d3748'}
                    borderBottom={'1px solid #2d3748'}
                    height="320px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={box}
                >
                    <Heading
                        fontSize={{ base: '1.2rem', lg: '2rem' }}
                        mt={3}
                        textAlign={'center'}
                        color="#CC01FF"
                        textTransform={'uppercase'}
                    >
                        Artificial Intelligence
                    </Heading>
                    <Image
                        src={
                            '../assets/images/Themes/artificial-intelligence.png'
                        }
                        boxSize={{ base: '170px', lg: '200px' }}
                        p={6}
                        rounded={5}
                    />
                </MotionBox>
                <MotionBox
                    borderRight={'1px solid #2d3748'}
                    borderBottom={'1px solid #2d3748'}
                    height="320px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={box}
                >
                    <Heading
                        fontSize={{ base: '1.2rem', lg: '2rem' }}
                        mt={3}
                        textAlign={'center'}
                        color="#CC01FF"
                        textTransform={'uppercase'}
                    >
                        Internet of things
                    </Heading>
                    <Image
                        src={'../assets/images/Themes/internet-of-things.png'}
                        boxSize={{ base: '170px', lg: '200px' }}
                        p={6}
                        rounded={5}
                    />
                </MotionBox>
                <MotionBox
                    borderRight={'1px solid #2d3748'}
                    borderBottom={'1px solid #2d3748'}
                    height="320px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={box}
                >
                    <Heading
                        mt={3}
                        fontSize={{ base: '1.2rem', lg: '2rem' }}
                        textAlign={'center'}
                        color="#CC01FF"
                        textTransform={'uppercase'}
                    >
                        Machine Learning
                    </Heading>
                    <Image
                        src={'../assets/images/Themes/neural.png'}
                        boxSize={{ base: '170px', lg: '200px' }}
                        p={6}
                        rounded={5}
                    />
                </MotionBox>
                <MotionBox
                    borderRight={'1px solid #2d3748'}
                    borderBottom={'1px solid #2d3748'}
                    height="320px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-around"
                    alignItems="center"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={box}
                >
                    <Heading
                        mt={3}
                        fontSize={{ base: '1.2rem', lg: '2rem' }}
                        textAlign={'center'}
                        color="#CC01FF"
                        textTransform={'uppercase'}
                    >
                        Edge computing and analysis
                    </Heading>
                    <Image
                        src={'../assets/images/Themes/cloud-service.png'}
                        boxSize={{ base: '170px', lg: '200px' }}
                        p={6}
                        rounded={5}
                    />
                </MotionBox>
            </MotionSimpleGrid>
        </MotionStack>
    );
};

export default Domains;
