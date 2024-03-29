import {
    Box,
    Container,
    Divider,
    DividerProps,
    Flex,
    HStack,
    Icon,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlineTwitter,
} from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { ISocialMedia } from '../../@types';
import { footerDivider } from '../../util/variants';
import Logo from '../UI/Logo/Logo';
import SocialMedia from '../UI/SocialMedia/SocialMedia';

const Footer: FC = () => {
    const MotionDivider = motion<DividerProps>(Divider);

    const Social: ISocialMedia[] = [
        {
            icon: AiOutlineMail,
            label: 'Email',
            url: 'mailto:jsshackwell@jssateb.ac.in',
        },
        {
            icon: AiOutlineTwitter,
            label: 'Twitter',
            url: 'https://twitter.com/jsshackwell',
        },
        {
            icon: AiOutlineInstagram,
            label: 'Instagram',
            url: 'https://www.instagram.com/jsshackwell/',
        },
        {
            icon: AiFillFacebook,
            label: 'Facebook',
            url: 'https://www.facebook.com/jsshackwell/',
        },
    ];

    return (
        <Box p={18} color={useColorModeValue('gray.700', 'gray.200')}>
            <Flex alignItems={'center'} justifyContent={'center'}>
                <MotionDivider
                    bg={'#CC01FF'}
                    height={'2px'}
                    width={'90%'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={footerDivider}
                    mr={2}
                />

                <Logo />

                <MotionDivider
                    bg={'#CC01FF'}
                    height={'2px'}
                    width={'90%'}
                    initial="hidden"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={footerDivider}
                    ml={2}
                />
            </Flex>
            <Container
                as={Stack}
                maxW={'8xl'}
                py={4}
                my={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: 8, lg: 4 }}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack direction={'row'}>
                    <Text>© 2022 HackWell 4.0</Text>
                    <Text>All rights reserved</Text>
                </Stack>
                <Stack direction={'row'} spacing={10}>
                    {Social.map((data, index) => {
                        return <SocialMedia data={data} key={index} />;
                    })}
                </Stack>
                <Stack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
                    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                        Designed And Developed By:
                    </Text>
                    <HStack spacing={4}>
                        <Text fontWeight={'500'} fontSize={'lg'}>
                            Varun S Athreya
                        </Text>
                        <Link
                            href={'https://github.com/VarunSAthreya'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsGithub}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/varunsathreya/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsLinkedin}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                    <HStack spacing={4}>
                        <Text fontWeight={'500'} fontSize={'lg'}>
                            Sandeep M
                        </Text>
                        <Link
                            href={'https://github.com/Sandeep-M23'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsGithub}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/sandeep-m23/'}
                            target="_blank"
                            rel="noreferrer"
                            rounded={'full'}
                            _hover={{ color: '#CC01FF' }}
                            _focus={{ outline: 'none' }}
                        >
                            <Icon
                                as={BsLinkedin}
                                w={5}
                                h={5}
                                mt={1}
                                alignItems={'center'}
                            />
                        </Link>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
