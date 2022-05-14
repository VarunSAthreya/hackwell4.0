import {
    Box,
    Center,
    Divider,
    DividerProps,
    Flex,
    GridItem,
    GridItemProps,
    Heading,
    Image,
    Link,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { divider, gridItem, stack } from '../util/variants';

const Phases: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionGridItem = motion<GridItemProps>(GridItem);

    return (
        <MotionStack
            minH={'75vh'}
            direction={{ base: 'column' }}
            my={10}
            id="phases"
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
                        fontSize={{ base: '1.2rem', md: '4xl' }}
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
                        HACKWELL 4.0 PHASES
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
            <Center>
                <Box
                    p={{ base: 6, lg: 16 }}
                    pb={4}
                    width={{ base: '95%', lg: '800px' }}
                >
                    <MotionGridItem
                        colSpan={1}
                        rounded={10}
                        backgroundColor={'white'}
                        boxShadow={'#CC01FF 0px 5px 15px'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={gridItem}
                    >
                        <Heading
                            textTransform={'uppercase'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            roundedTopRight={10}
                            roundedTopLeft={10}
                            color={'white'}
                            p={5}
                            textAlign={'center'}
                            fontSize={'3xl'}
                        >
                            Phases
                        </Heading>
                        <Stack spacing={5} p={3}>
                            <Box
                                p={{ base: 2, lg: 4 }}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Box>
                                    <Heading
                                        mb={2}
                                        bgGradient={
                                            'linear(to-l, #00FFDD,#CC01FF)'
                                        }
                                        bgClip="text"
                                        textTransform={'uppercase'}
                                        fontSize={{ base: 'lg', lg: '2xl' }}
                                    >
                                        Register online
                                    </Heading>
                                    <Box display={'flex'}>
                                        <Text
                                            fontSize={{
                                                base: 'sm',
                                                lg: 'md',
                                            }}
                                            color={'gray.700'}
                                            lineHeight={1.6}
                                            mr={2}
                                        >
                                            Register your team(1-4)
                                        </Text>
                                        <Link
                                            color={'#CC01FF'}
                                            href={'/register'}
                                            _focus={{ outline: 'none' }}
                                        >
                                            Click Here
                                        </Link>
                                    </Box>
                                </Box>
                                <Image
                                    src={
                                        '../assets/images/Phases/to-do-list.png'
                                    }
                                    boxSize={'50px'}
                                />
                            </Box>
                            <Box
                                p={{ base: 2, lg: 4 }}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Image
                                    src={
                                        '../assets/images/Phases/payment-method.png'
                                    }
                                    boxSize={'50px'}
                                />
                                <Box>
                                    <Heading
                                        bgGradient={
                                            'linear(to-l, #00FFDD,#CC01FF)'
                                        }
                                        bgClip="text"
                                        mb={2}
                                        textAlign={'right'}
                                        textTransform={'uppercase'}
                                        fontSize={{ base: 'lg', lg: '2xl' }}
                                    >
                                        Fee Payment
                                    </Heading>
                                    <Text
                                        fontSize={{ base: 'sm', lg: 'md' }}
                                        color={'gray.700'}
                                        lineHeight={1.6}
                                    >
                                        Shortlisted students must pay a
                                        registration fee of INR 250.
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                p={{ base: 2, lg: 4 }}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Box>
                                    <Heading
                                        bgGradient={
                                            'linear(to-l, #00FFDD,#CC01FF)'
                                        }
                                        bgClip="text"
                                        mb={2}
                                        textTransform={'uppercase'}
                                        fontSize={{ base: 'lg', lg: '2xl' }}
                                    >
                                        confirmation email
                                    </Heading>
                                    <Text
                                        fontSize={{ base: 'sm', lg: 'md' }}
                                        color={'gray.700'}
                                        lineHeight={1.6}
                                    >
                                        The teams will receive a conformation
                                        email.
                                    </Text>
                                </Box>
                                <Image
                                    ml={1}
                                    src={'../assets/images/Phases/mail.png'}
                                    boxSize={'50px'}
                                />
                            </Box>
                            <Box
                                p={{ base: 2, lg: 4 }}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Image
                                    src={
                                        '../assets/images/Phases/binary-code.png'
                                    }
                                    boxSize={'50px'}
                                />
                                <Box>
                                    <Heading
                                        bgGradient={
                                            'linear(to-l, #00FFDD,#CC01FF)'
                                        }
                                        bgClip="text"
                                        mb={2}
                                        textAlign={'right'}
                                        textTransform={'uppercase'}
                                        fontSize={{ base: 'lg', lg: '2xl' }}
                                    >
                                        Finally 48 - hour hackathon
                                    </Heading>
                                    <Text
                                        textAlign={'right'}
                                        fontSize={{ base: 'sm', lg: 'md' }}
                                        color={'gray.700'}
                                        lineHeight={1.6}
                                    >
                                        The shortlisted teams will be hacking on
                                        the problem statements given on the day
                                        of the event.
                                    </Text>
                                </Box>
                            </Box>
                        </Stack>
                    </MotionGridItem>
                </Box>
            </Center>
        </MotionStack>
    );
};

export default Phases;
