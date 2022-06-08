import React from 'react';
import { 
    Box, 
    Image, 
    Heading, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton, 
    Text, Tag 
} from "@chakra-ui/react";
import { IDogData } from '../config';

interface IDialog {
    open: boolean;
    close: () => void;
    data: IDogData;
}

export const DetailsDialog = (props: IDialog) => {
    return(
        <Modal isOpen={props.open} onClose={props.close} motionPreset='slideInBottom' size='2xl'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Box marginTop={{ base: '1' }}>
                        <Box borderRadius="lg" overflow="hidden" maxH={500} marginTop="40px">
                                <Image
                                    src={props.data.url}
                                    alt={props.data.breeds[0].name}
                                    objectFit="contain"
                                    width="100%"
                                />
                        </Box>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{ base: '3'}}
                            marginBottom={{base: '3'}}
                        >
                            <Heading size="md" textTransform="capitalize">{props.data.breeds[0].name}</Heading>
                            {props.data.breeds[0].life_span && <Text as="p" marginTop="2" fontSize="md">Life expectancy: {props.data.breeds[0].life_span}</Text>}
                            {props.data.breeds[0].breed_group && <Text as="p" marginTop="2" fontSize="md">Breed group: {props.data.breeds[0].breed_group}</Text>}
                            {props.data.breeds[0].bred_for && <Text as="p" marginTop="2" fontSize="md">Bred for: {props.data.breeds[0].bred_for}</Text>}
                            {props.data.breeds[0].temperament && <Box marginTop='16px'>
                                {props.data.breeds[0].temperament.split(',').map((tag: string) => {
                                    return (
                                    <Tag variant="solid" colorScheme="orange" key={tag} m={'0 8px 8px 0'}>
                                        {tag}
                                    </Tag>
                                    );
                                })}
                            </Box>}
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}