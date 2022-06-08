import React from 'react';
import logo from '../images/logo.png';
import { Flex, Box, Image, Text, useColorModeValue, Link} from "@chakra-ui/react";

interface IHeader {
    openDialog: () => void;
}

export const Header = (props: IHeader) => {
    return (
        <Box m={'16px 0'}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                align={'center'}
            >
                <Flex flex={{ base: 1 }} align={'center'} justify={{ base: 'center', md: 'space-between' }}>
                    <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                        <Flex align={'center'}>
                            <Image
                                src={logo}
                                alt="Logo Dogstagram"
                                objectFit="contain"
                                height={70}
                            />
                            <Text fontFamily={'heading'} fontSize={18} padding={'0 16px'} color={useColorModeValue('gray.800', 'white')}>DOGSTAGRAM</Text>
                        </Flex>
                    </Link>
                    <Link textDecoration="none" _hover={{ textDecoration: 'none', color: 'black' }} onClick={props.openDialog}>Favorite</Link>
                </Flex>
            </Flex>
        </Box>
    );
}
