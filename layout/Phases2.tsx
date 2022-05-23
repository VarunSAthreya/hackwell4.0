import {
    Box,
    Center,
    Divider,
    DividerProps,
    Flex,
    GridItem,
    GridItemProps,
    Heading,
    Icon,
    Stack,
    StackProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import Stepper from '../components/UI/Stepper';
import { divider, gridItem, stack } from '../util/variants';

const Phases2: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionGridItem = motion<GridItemProps>(GridItem);

    const data = [];

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
                <Box p={{ base: 6, lg: 16 }} pb={4}>
                    <MotionGridItem
                        colSpan={1}
                        rounded={10}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={gridItem}
                    >
                        {/* <Heading
                            textTransform={'uppercase'}
                            bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                            roundedTopRight={10}
                            roundedTopLeft={10}
                            bgClip="text"
                            p={5}
                            textAlign={'center'}
                            fontSize={'3xl'}
                        >
                            Phases
                        </Heading> */}
                        {data.map((data, index) => (
                            <Stepper key={index} data={data} />
                        ))}
                        <Icon
                            width={5}
                            height={5}
                            mx={2}
                            as={BsCircleFill}
                            color={'#CC01FF'}
                        />
                    </MotionGridItem>
                </Box>
            </Center>
        </MotionStack>
    );
};

export default Phases2;
