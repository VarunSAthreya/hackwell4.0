import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Divider,
    DividerProps,
    Flex,
    Heading,
    Image,
    ImageProps,
    Link,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { divider, innerStack, secondaryImage, stack } from '../util/variants';

const Sponsors: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionImage = motion<ImageProps>(Image);

    return (
        <MotionStack
            minH={{ base: '40vh', lg: '60vh' }}
            direction={{ base: 'column' }}
            my={20}
            spacing={12}
            id="sponsor"
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
                        OUR SPONSOR PARTNER
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
            <Stack
                minH={'40vh'}
                direction={{ base: 'column-reverse', md: 'row' }}
                align={'center'}
            >
                <Flex p={6} flex={1} align={'center'} justify={'center'}>
                    <MotionStack
                        spacing={6}
                        w={'full'}
                        maxW={'lg'}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={innerStack}
                    >
                        <Heading
                            fontSize={{ base: '3xl' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            ABOUT SPONSOR
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.200'}
                            lineHeight={1.8}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            Honeywell International Inc. is an American publicly
                            traded, multinational conglomerate corporation
                            headquartered in Charlotte, North Carolina. It
                            primarily operates in four areas of business:
                            aerospace, building technologies, performance
                            materials and technologies, and safety and
                            productivity solutions.
                        </Text>
                        <Box
                            alignItems={{ base: 'center' }}
                            display={'flex'}
                            justifyContent={{
                                base: 'center',
                                md: 'flex-start',
                            }}
                        >
                            <Link
                                href={'https://www.honeywell.com/us/en'}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    color="black"
                                    bg="white"
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    _active={{ bg: '#CC01FF' }}
                                >
                                    LEARN MORE ABOUT US
                                </Button>
                            </Link>
                        </Box>
                    </MotionStack>
                </Flex>
                <Flex flex={1} justify={'center'}>
                    <MotionImage
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={secondaryImage}
                        width={{ base: '90%', lg: '75%' }}
                        p={4}
                        height={'50%'}
                        src={'../assets/images/Logo/Honeywell_logo.png'}
                    />
                </Flex>
            </Stack>
        </MotionStack>
    );
};

export default Sponsors;
