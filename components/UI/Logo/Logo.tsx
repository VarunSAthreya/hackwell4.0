import { Box, Image, Link } from '@chakra-ui/react';
import { FC } from 'react';

const Logo: FC = () => {
    return (
        <Box>
            <Link href="/" _focus={{ outline: 'none' }}>
                <Image
                    src={'/../assets/images/Logo/Hackwell_logo.png'}
                    alt="Logo"
                    maxW={'150px'}
                    h={'auto'}
                    _focus={{ outline: 'none' }}
                />
            </Link>
        </Box>
    );
};

export default Logo;
