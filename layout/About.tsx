import {
    AspectRatio,
    AspectRatioProps,
    Box,
    Divider,
    DividerProps,
    Flex,
    Heading,
    IconButton,
    Image,
    ImageProps,
    Link,
    Stack,
    StackProps,
    Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {
    aspectRatio,
    divider,
    image,
    secondaryStack,
    stack,
} from '../util/variants';
const About: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);
    const MotionStack = motion<StackProps>(Stack);
    const MotionImage = motion<ImageProps>(Image);
    const MotionAspectRatio = motion<AspectRatioProps>(AspectRatio);

    return (
        <MotionStack
            minH={'65vh'}
            direction={{ base: 'column' }}
            my={12}
            id="about jssate-b"
            spacing={12}
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
                    width={{ base: '200px', lg: '500px' }}
                >
                    <Heading
                        fontSize={{ base: '2xl', md: '4xl' }}
                        textAlign={'center'}
                        border={'2px solid #CC01FF'}
                        p={3}
                        width={{ base: '200px', lg: '500px' }}
                        position="relative"
                        top="7px"
                        left="7px"
                        padding="1rem"
                        transform="translateZ(-10px)"
                    >
                        ABOUT JSSATEB
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
                spacing={{ base: 5, lg: 12 }}
                justifyContent={'space-around'}
                direction={{ base: 'column', lg: 'row' }}
            >
                <Box
                    width={{ base: '100%', lg: '45%' }}
                    padding={{ base: 5, lg: 16 }}
                    ml={{ base: 0, lg: 14 }}
                >
                    <MotionAspectRatio
                        ratio={14 / 12}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={aspectRatio}
                    >
                        <MotionImage
                            whileInView="whileInView"
                            viewport={{ once: true }}
                            variants={image}
                            alt={'hackwell'}
                            rounded={8}
                            w={{ base: '300px', lg: '600px' }}
                            h={{ base: '200px', lg: '400px' }}
                            src={'../assets/images/Main/CollegeLogo-01.png'}
                        />
                    </MotionAspectRatio>
                </Box>
                <Box
                    borderRadius="lg"
                    mr={{ base: 5 }}
                    p={{ base: 5, lg: 16 }}
                    width={{ base: '100%', lg: '55%' }}
                >
                    <MotionStack
                        spacing={6}
                        maxW={'lg'}
                        align={{ base: 'center', md: 'flex-start' }}
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        variants={secondaryStack}
                    >
                        <Heading
                            fontSize={{ base: '2xl' }}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            JSS ACADEMY OF TECHNICAL EDUCATION BENGALURU
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.200'}
                            lineHeight={1.6}
                            textAlign={{ base: 'center', lg: 'left' }}
                        >
                            JSS Academy of Technical Education (JSSATE) was
                            established in the year 1997 at Bengaluru and is
                            under the umbrella of JSS Mahavidyapeetha, Mysuru.
                            JSSATE is the result of the vision of our President,
                            His Holiness Jagadguru Sri Shivarathri Deshikendra
                            Mahaswamiji to proactively participate in
                            establishing a world class Institution for Technical
                            Education. The Campus is located on a sprawling
                            21.17 acres land surrounded by lush green plantation
                            on the South-Western edge of Bangalore City. The
                            institution is affiliated to Visvesvaraya
                            Technological University (VTU), Belgaum, India.
                        </Text>
                        <Stack direction={'row'} spacing={5}>
                            <Link
                                href="mailto:info@jssateb.ac.in"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconButton
                                    aria-label="email"
                                    variant="ghost"
                                    size="lg"
                                    fontSize="3xl"
                                    icon={<MdEmail />}
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    _focus={{ outline: 'none' }}
                                    _active={{ bg: '#CC01FF' }}
                                    isRound
                                />
                            </Link>

                            <Link
                                href="tel:+918028611702"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <IconButton
                                    aria-label="github"
                                    variant="ghost"
                                    size="lg"
                                    fontSize="2xl"
                                    icon={<BsTelephoneFill />}
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    isRound
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jssateb-bengaluru-3a432520a/?originalSubdomain=in">
                                <IconButton
                                    aria-label="linkedin"
                                    variant="ghost"
                                    size="lg"
                                    icon={<BsLinkedin size="28px" />}
                                    _hover={{
                                        bg: '#CC01FF',
                                        color: 'white',
                                    }}
                                    isRound
                                />
                            </Link>
                        </Stack>
                    </MotionStack>
                </Box>
            </Stack>
        </MotionStack>
    );
};

export default About;
