import {
    Box,
    Divider,
    DividerProps,
    Flex,
    Heading,
    SimpleGrid,
    SimpleGridProps,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import {
    secondaryDivider,
    simpleGrid,
    stack,
    ternaryStack,
} from '../util/variants';

const Dates: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);

    return (
        <MotionStack
            minH={{ base: '50vh' }}
            direction={{ base: 'column' }}
            my={{ base: 0, md: 10 }}
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
                    width={'10%'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={secondaryDivider}
                />
                <Heading
                    fontSize={{ base: '1.5rem', md: '4xl' }}
                    textAlign={'center'}
                    p={3}
                >
                    IMPORTANT DATES
                </Heading>
                <MotionDivider
                    bg={'#CC01FF'}
                    height={'2px'}
                    width={'10%'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={secondaryDivider}
                />
            </Flex>
            <Box p={{ base: 4, md: 8, lg: 10 }}>
                <MotionSimpleGrid
                    columns={{ base: 2, md: 4 }}
                    spacing={8}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={simpleGrid}
                >
                    <MotionStack
                        align={'center'}
                        p={{ base: 4 }}
                        borderRadius={5}
                        bg={'white'}
                        spacing={4}
                        boxShadow={'#CC01FF 0px 5px 15px'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={ternaryStack}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'#CC01FF'}
                            my={2}
                        >
                            <BsCalendarDate />
                        </Flex>
                        <Heading
                            color="#CC01FF"
                            fontSize={{ base: '1.2rem', lg: '3xl' }}
                            px={4}
                        >
                            MAY 25th
                        </Heading>
                        <Text
                            color={'gray.500'}
                            textTransform="uppercase"
                            textAlign={'center'}
                        >
                            Online Registration Begins
                        </Text>
                    </MotionStack>
                    <MotionStack
                        align={'center'}
                        p={{ base: 4 }}
                        borderRadius={5}
                        bg={'white'}
                        spacing={4}
                        boxShadow={'#CC01FF 0px 5px 15px'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={ternaryStack}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'#CC01FF'}
                            my={2}
                        >
                            <BsCalendarDate />
                        </Flex>
                        <Heading
                            color="#CC01FF"
                            fontSize={{ base: '1.2rem', lg: '3xl' }}
                            px={4}
                        >
                            JUNE 18th
                        </Heading>
                        <Text
                            color={'gray.500'}
                            textTransform="uppercase"
                            textAlign={'center'}
                        >
                            Online Registration Ends
                        </Text>
                    </MotionStack>
                    <MotionStack
                        align={'center'}
                        p={{ base: 4 }}
                        borderRadius={5}
                        bg={'white'}
                        spacing={4}
                        boxShadow={'#CC01FF 0px 5px 15px'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={ternaryStack}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'#CC01FF'}
                            my={2}
                        >
                            <BsCalendarDate />
                        </Flex>
                        <Heading
                            color="#CC01FF"
                            fontSize={{ base: '1.2rem', lg: '3xl' }}
                            px={4}
                        >
                            JUNE 22nd
                        </Heading>
                        <Text
                            color={'gray.500'}
                            textTransform="uppercase"
                            textAlign={'center'}
                        >
                            Hackathon Begins (Online Event)
                        </Text>
                    </MotionStack>
                    <MotionStack
                        align={'center'}
                        p={{ base: 4 }}
                        borderRadius={5}
                        bg={'white'}
                        spacing={4}
                        boxShadow={'#CC01FF 0px 5px 15px'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={ternaryStack}
                    >
                        <Flex
                            w={16}
                            h={16}
                            align={'center'}
                            justify={'center'}
                            color={'white'}
                            rounded={'full'}
                            bg={'#CC01FF'}
                            my={2}
                        >
                            <BsCalendarDate />
                        </Flex>
                        <Heading
                            color="#CC01FF"
                            fontSize={{ base: '1.2rem', lg: '3xl' }}
                            px={4}
                        >
                            JUNE 24th
                        </Heading>
                        <Text
                            color={'gray.500'}
                            textTransform="uppercase"
                            textAlign={'center'}
                        >
                            Hackathon Ends
                        </Text>
                    </MotionStack>
                </MotionSimpleGrid>
            </Box>
        </MotionStack>
    );
};

export default Dates;
