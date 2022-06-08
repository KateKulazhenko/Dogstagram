import React from 'react';
import { 
    Box, 
    Image, 
    Heading, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton, Flex, Grid, Stack, Text
} from "@chakra-ui/react";
import { IDogData } from '../config';

interface IFavDialog {
    open: boolean;
    data: IDogData[];
    close: () => void;
}

export const FavoriteDialog = (props: IFavDialog) => {
    return(
        <Modal isOpen={props.open} onClose={props.close} motionPreset='slideInBottom' size='full'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Box marginTop={{ base: '5' }}>
                        {props.data.length 
                        ? <Flex
                            direction="column"
                            justifyContent="center"
                            maxW={{ base: "1000" }}
                            m="0 auto"
                            minH="100vh"
                        >
                        <Grid
                            w="full"
                            gridGap="5"
                            gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
                        >
                            {props.data.map((dog: IDogData) => (
                                <Stack p={{ base: "0 2rem" }} key={dog.id}>
                                    <Box borderRadius="lg" overflow="hidden" maxH={350} marginTop="40px">
                                            <Image
                                                src={dog.url}
                                                alt={dog.breeds[0].name}
                                                objectFit='cover'
                                            />
                                    </Box>
                                    <Text color="teal.600" textTransform="uppercase">{dog.breeds[0].name}</Text>
                                </Stack>
                            ))}
                        </Grid>
                        </Flex> 
                        : <Box display='flex' justifyContent="center" alignItems='center' minH="100vh"><Heading size="md">No favorite breeds</Heading></Box>}
                    </Box>
                </ModalBody>
                <ModalCloseButton />
            </ModalContent>
        </Modal>
    );
}