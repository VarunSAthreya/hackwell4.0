import {
    Box,
    Button,
    Divider,
    DividerProps,
    Flex,
    FormControl,
    FormErrorMessage,
    Grid,
    GridItem,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Link,
    Select,
    Spinner,
    Stack,
    Text,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiNotepad } from 'react-icons/bi';
import { ITeam } from '../@types';
import { db } from '../lib/firebase';
import { divider, secondaryDivider } from '../util/variants';

const Register: NextPage = () => {
    const MotionDivider = motion<DividerProps>(Divider);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ITeam>();
    const router = useRouter();

    const teamSize = [1, 2, 3, 4];
    const year = [1, 2, 3, 4];
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const onSubmit = async (data: ITeam) => {
        if (new Date() > new Date('2022-06-22')) {
            toast({
                title: 'Registration Closed',
                description: 'Sorry, registration is closed for this year',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        console.log({ data });
        data.createdAt = new Date().toISOString();
        data.sendRegisterMail = false;
        setIsLoading(true);
        const documentSnapshot = await getDoc(
            doc(db, 'hackwell4', data.teamName)
        );

        if (documentSnapshot.exists()) {
            setError('teamName', {
                type: 'manual',
                message: 'Team name already exists',
            });
            setIsLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        await setDoc(doc(db, 'hackwell4', data.teamName), data);

        toast({
            title: 'Registration Successful',
            description: 'Your team has been registered successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        router.push('/');
        setIsLoading(false);
    };

    return (
        <Stack
            minH={'75vh'}
            direction={{ base: 'column' }}
            spacing={{ base: 36, lg: 24 }}
        >
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                position={'relative'}
                top={{ base: '140px', md: '160px' }}
            >
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
                        REGISTER
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
            <Flex>
                <Box
                    color="white"
                    borderRadius="lg"
                    w={'100%'}
                    m={{ sm: 4, md: 16, lg: 8 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <VStack spacing={5}>
                        <Box
                            p={4}
                            borderRadius={8}
                            bg={'#232323'}
                            my={10}
                            mx={3}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Team Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem
                                        p={{ base: 1, md: 4 }}
                                        py={5}
                                        colSpan={2}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <MotionDivider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                                initial="hidden"
                                                whileInView="whileInView"
                                                viewport={{ once: true }}
                                                variants={secondaryDivider}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize="3xl"
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Team Details
                                            </Text>
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
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.teamName !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Team Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Team Name"
                                                    {...register('teamName', {
                                                        required:
                                                            'Please enter The Team Name',
                                                    })}
                                                />
                                            </InputGroup>
                                            <FormErrorMessage>
                                                {errors.teamName &&
                                                    errors.teamName.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.college !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    College Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="College Name"
                                                    {...register('college', {
                                                        required:
                                                            'Please Enter The College name',
                                                    })}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.college &&
                                                    errors.college.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.teamSize !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Team Size:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Team Size"
                                                    {...register('teamSize', {
                                                        required:
                                                            'Please Enter The Team Size',
                                                    })}
                                                >
                                                    {teamSize.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.teamSize &&
                                                    errors.teamSize.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                {/* Member Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem p={4} colSpan={2}>
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <MotionDivider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                                initial="hidden"
                                                whileInView="whileInView"
                                                viewport={{ once: true }}
                                                variants={secondaryDivider}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize="3xl"
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Members Details
                                            </Text>
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
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 1
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member1.name',
                                                        {
                                                            required:
                                                                'Please enter the name',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.name &&
                                                    errors.member1?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member1.email',
                                                        {
                                                            required:
                                                                'Please enter the email',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.email &&
                                                    errors.member1?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member1.phone',
                                                        {
                                                            required:
                                                                'Please enter the phone number',
                                                            maxLength: {
                                                                value: 10,
                                                                message:
                                                                    'Please enter a valid phone number',
                                                            },
                                                            minLength: {
                                                                value: 10,
                                                                message:
                                                                    'Please enter a valid phone number',
                                                            },
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.phone &&
                                                    errors.member1?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member1.year',
                                                        {
                                                            required:
                                                                'Please Enter The Year',
                                                        }
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.year &&
                                                    errors.member1?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member1?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member1.address',
                                                        {
                                                            required:
                                                                'Please enter the address',
                                                        }
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member1?.address &&
                                                    errors.member1?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 2
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member2.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.name &&
                                                    errors.member2?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member2.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.email &&
                                                    errors.member2?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member2.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.phone &&
                                                    errors.member2?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member2.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.year &&
                                                    errors.member2?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member2.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.address &&
                                                    errors.member2?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    {/* <GridItem p={4}>
                                        <FormControl
                                            isInvalid={
                                                errors.member2?.resume !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon

                                                >
                                                    Resume:
                                                </InputLeftAddon>
                                                <Input

                                                    type="file"
                                                    placeholder="Resume"
                                                    {...register(
                                                        'member2.resume'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member2?.resume &&
                                                    errors.member2?.resume
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem> */}
                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 3
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member3.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.name &&
                                                    errors.member3?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member3.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.email &&
                                                    errors.member3?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member3.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.phone &&
                                                    errors.member3?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member3.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.year &&
                                                    errors.member3?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member3?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member3.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member3?.address &&
                                                    errors.member3?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>

                                    <GridItem p={4} colSpan={2}>
                                        <Text
                                            bgGradient={
                                                'linear(to-l, #00FFDD,#CC01FF)'
                                            }
                                            bgClip="text"
                                            fontSize="xl"
                                            fontWeight="bold"
                                            textTransform={'uppercase'}
                                        >
                                            Member 4
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.name !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Name:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Name"
                                                    {...register(
                                                        'member4.name'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.name &&
                                                    errors.member4?.name
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.email !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Email:
                                                </InputLeftAddon>
                                                <Input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...register(
                                                        'member4.email'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.email &&
                                                    errors.member4?.email
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.phone !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Phone Number:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    {...register(
                                                        'member4.phone'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.phone &&
                                                    errors.member4?.phone
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem
                                        p={4}
                                        colSpan={{ base: 2, md: 1 }}
                                    >
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.year !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Year:
                                                </InputLeftAddon>
                                                <Select
                                                    rounded={0}
                                                    placeholder="Year"
                                                    {...register(
                                                        'member4.year'
                                                    )}
                                                >
                                                    {year.map((br) => (
                                                        <option
                                                            value={br}
                                                            key={br}
                                                        >
                                                            {br}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.year &&
                                                    errors.member4?.year
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.member4?.address !==
                                                undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Address:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Address"
                                                    {...register(
                                                        'member4.address'
                                                    )}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.member4?.address &&
                                                    errors.member4?.address
                                                        .message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                {/* Payment Details */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem
                                        p={{ base: 1, md: 4 }}
                                        py={5}
                                        colSpan={2}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                        >
                                            <MotionDivider
                                                bg={'#CC01FF'}
                                                height={'2px'}
                                                width={'10%'}
                                                initial="hidden"
                                                whileInView="whileInView"
                                                viewport={{ once: true }}
                                                variants={secondaryDivider}
                                            />
                                            <Text
                                                bgGradient={
                                                    'linear(to-l, #00FFDD,#CC01FF)'
                                                }
                                                bgClip="text"
                                                fontSize="3xl"
                                                mx={2}
                                                fontWeight="extrabold"
                                                textAlign={'center'}
                                                textTransform={'uppercase'}
                                            >
                                                Payment Details
                                            </Text>
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
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <Box
                                            display={'flex'}
                                            alignItems={'center'}
                                            bg={'white'}
                                            padding={3}
                                            borderRadius={'10px'}
                                        >
                                            <Text
                                                color={'#CC01FF'}
                                                _focus={{ outline: 'none' }}
                                                fontWeight="medium"
                                            >
                                                Note: Finish Payment by clicking
                                                the link below. Then paste the
                                                payment id in the field. ₹100
                                                per team member.
                                            </Text>
                                        </Box>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <Box
                                            display={'flex'}
                                            alignItems={'center'}
                                            bg={'white'}
                                            padding={3}
                                            borderRadius={'10px'}
                                        >
                                            <Icon
                                                as={BiNotepad}
                                                color={'#CC01FF'}
                                                mr={5}
                                            />
                                            <Link
                                                color={'#CC01FF'}
                                                href={
                                                    'https://rzp.io/l/d6HXzspc'
                                                }
                                                _focus={{ outline: 'none' }}
                                                fontWeight="medium"
                                                isExternal
                                            >
                                                Click Here To Pay
                                            </Link>
                                        </Box>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.paymentId !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Payment ID:
                                                </InputLeftAddon>
                                                <Input
                                                    type="text"
                                                    placeholder="Payment ID"
                                                    {...register('paymentId', {
                                                        required:
                                                            'Please Enter The Payment ID',
                                                    })}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.paymentId &&
                                                    errors.paymentId.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem p={4} colSpan={2}>
                                        <FormControl
                                            isInvalid={
                                                errors.paidAmount !== undefined
                                            }
                                        >
                                            <InputGroup>
                                                <InputLeftAddon>
                                                    Paid Amount:
                                                </InputLeftAddon>
                                                <Input
                                                    type="number"
                                                    placeholder="Paid Amount"
                                                    {...register('paidAmount', {
                                                        required:
                                                            'Please enter the Paid amount',
                                                        min: {
                                                            value: 100,
                                                            message:
                                                                'Please enter the Paid amount greater than 100',
                                                        },
                                                        max: {
                                                            value: 400,
                                                            message:
                                                                'Pleas enter the Paid amount less than 400',
                                                        },
                                                    })}
                                                />
                                            </InputGroup>

                                            <FormErrorMessage>
                                                {errors.paidAmount &&
                                                    errors.paidAmount.message}
                                            </FormErrorMessage>
                                        </FormControl>
                                    </GridItem>
                                </Grid>
                                {/* Register Button */}
                                <Grid templateColumns="repeat(2, 1fr)">
                                    <GridItem p={4} colSpan={2} mt={4}>
                                        <Flex justify={'center'}>
                                            <Button
                                                fontSize={'1.3rem'}
                                                size={'lg'}
                                                color={'white'}
                                                bg={
                                                    'linear-gradient( 310deg, #00FFDD 0%, #CC01FF 100%)'
                                                }
                                                _hover={{
                                                    bg: 'linear-gradient( 310deg,  #00FFDD 0%, #CC01FF 100%)',
                                                }}
                                                _focus={{ outline: 'none' }}
                                                type="submit"
                                                textTransform={'uppercase'}
                                                disabled={isLoading}
                                            >
                                                Register
                                                {isLoading && (
                                                    <Spinner
                                                        ml={2}
                                                        thickness="4px"
                                                        speed="0.65s"
                                                        emptyColor="#00FFDD"
                                                        color="#CC01FF"
                                                    />
                                                )}
                                            </Button>
                                        </Flex>
                                    </GridItem>
                                </Grid>
                            </form>
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Stack>
    );
};

export default Register;
