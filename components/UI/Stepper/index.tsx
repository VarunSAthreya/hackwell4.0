import { Box, Center, Divider, Heading, Icon, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { BsCircle } from 'react-icons/bs';
import { InViewStepperDivider, StepperBox } from '../../../util/variants';

const Stepper = ({ data }) => {
    const MotionDivider = motion(Divider);
    const MotionBox = motion(Box);

    return (
        <React.Fragment>
            <Box display={'flex'}>
                <Center
                    height={{ base: 'auto', lg: '145px' }}
                    flexDir={'column'}
                >
                    {/*ON RESPONSIVE HEIGHT=AUTO*/}
                    <Icon
                        width={5}
                        height={5}
                        mx={2}
                        as={BsCircle}
                        color={'#CC01FF'}
                    />
                    <MotionDivider
                        bgGradient={'linear(to-l, #00FFDD,#CC01FF)'}
                        width="1px"
                        orientation={'vertical'}
                        initial="hidden"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={InViewStepperDivider}
                    />
                </Center>
                <MotionBox
                    display={'flex'}
                    flexDir={'column'}
                    justifyContent={'flex-start'}
                    mb={4}
                    variants={StepperBox}
                    animate="visible"
                    initial="hidden"
                >
                    <Heading fontSize={'1.35rem'} mb={3} mt={0} mx={2}>
                        {data.course}
                    </Heading>
                    <Box
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-start'}
                        m={2}
                    >
                        <Text>{data.year}</Text>
                        <Text>{data.institution}</Text>
                        <Text>{data.grade}</Text>
                    </Box>
                </MotionBox>
            </Box>
        </React.Fragment>
    );
};

export default Stepper;
