import {
    Box,
    Divider,
    DividerProps,
    Flex,
    Heading,
    Image,
    ImageProps,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { divider, image, innerStack, stack } from '../util/variants';

const Hackwell: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionImage = motion<ImageProps>(Image);

    return (
        <MotionStack
            minH={'75vh'}
            direction={{ base: 'column' }}
            my={10}
            id="hackwell 4.0"
            spacing={{ base: 10, lg: 20 }}
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
                        ABOUT HACKWELL 4.0
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
                p={8}
                spacing={{ base: 10, lg: 3 }}
                justifyContent={'space-around'}
                direction={{ base: 'column-reverse', lg: 'row' }}
                alignItems={'center'}
            >
                <MotionStack
                    spacing={{ base: 5, lg: 3 }}
                    w={'full'}
                    maxW={'lg'}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={innerStack}
                >
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color={'gray.200'}
                        textAlign={{ base: 'center', lg: 'left' }}
                        lineHeight={1.6}
                    >
                        Hackwell 4.0 is a 48-hour Hackathon hosted by JSSATEB in
                        association with Honeywell.
                    </Text>
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color={'gray.200'}
                        textAlign={{ base: 'center', lg: 'left' }}
                        lineHeight={1.6}
                    >
                        Honeywell will be driving the event, provide mentors
                        during the course of the event, guide the teams, judge
                        the solutions and also sponsor the cash prize worth INR
                        1,50,000 to the winner.
                    </Text>
                    <Text
                        fontSize={{ base: 'md', lg: 'lg' }}
                        color={'gray.200'}
                        textAlign={{ base: 'center', lg: 'left' }}
                        lineHeight={1.6}
                    >
                        This event is intended to create a platform for
                        student's self-expression and creativity to foster a
                        culture of learning, team work and innovation.
                    </Text>
                </MotionStack>
                <MotionImage
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={image}
                    alt={'hackwell'}
                    rounded={8}
                    w={{ base: '300px', lg: '600px' }}
                    h={{ base: '200px', lg: '400px' }}
                    src={'../assets/images/Main/about.jpg'}
                />
            </Stack>
        </MotionStack>
    );
};

export default Hackwell;
