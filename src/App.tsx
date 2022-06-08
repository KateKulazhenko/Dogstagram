import React, { useState, useEffect } from 'react';
import { getDogsList, getBreedsList, getBreedList } from './api';
import { IDogData, IBreedData } from './config';
import { Flex, Box, Image, Select, Stack, Heading, Divider, Link, Button } from "@chakra-ui/react";
import { Header } from './components/Header';
import { DetailsDialog } from './components/DetailsDialog';
import { FavoriteDialog } from './components/FavoriteDialog';


function App() {
    const [dogsList, setDogsList] = useState<IDogData[]>([]);
    const [favouriteDogsList, setFavouriteDogsList] = useState<IDogData[]>([]);
    const [breedsList, setBreedsList] = useState<IBreedData[]>([]);
    const [openDetailsDialog, setOpenDetailsDialog] = useState<boolean>(false);
    const [currentBreed, setCurrentBreed] = useState<IDogData>();
    const [openFavDialog, setOpenFavDialog] = useState<boolean>(false);

    useEffect( () => {
        const fetchDogsData = async () => {
            let json = await getDogsList();
            let dogsWithBreedData = json.filter((dog: any) => dog.breeds.length);
            setDogsList(dogsWithBreedData);
        } 

        fetchDogsData();
    }, []);

    useEffect( () => {
        const fetchDogsData = async () => {
            const json = await getBreedsList();
            setBreedsList(json);
        } 

        fetchDogsData();
    }, []);

    const handleChangeSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        let json = await getBreedList(e.target.value);
        let dogs = json.filter((dog: any) => dog.breeds.length);
        setDogsList(dogs);
    }

    const handleFavorite = (dog: IDogData) => {
        setFavouriteDogsList([...favouriteDogsList, dog]);
    }

    const handleOpenDialog = (dog: IDogData) => {
        setCurrentBreed(dog);
        setOpenDetailsDialog(true);
    }

    const handleRemoveFromFavList = (id: string) => {
        let removeFromList = favouriteDogsList.filter((dog: IDogData) => dog.id !== id);
        setFavouriteDogsList(removeFromList);
    }

    const disableButton = (id: string) => {
        return favouriteDogsList.some((dog: IDogData) => dog.id === id);
    }

    return (
        <Flex direction="column" maxW={600} m="0 auto" minH="100vh">
            <Header openDialog={() => setOpenFavDialog(true)} />
            <Select placeholder='Select option' size='md' onChange={handleChangeSelect}>
                {breedsList.map((breed: IBreedData) => 
                    <option value={breed.id} key={`${breed.name}_${breed.id}`}>{breed.name}</option>
                )}
            </Select>
            <Divider m="16px 0 0" />
            <Box>
            {dogsList ? dogsList.map((dog: IDogData) => (
                <Stack key={`${dog.breeds[0].name}_${dog.id}`} m='16px 0'>
                    <Box borderRadius="lg" overflow="hidden" maxH={400}>
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }} onClick={() => handleOpenDialog(dog)}>
                            <Image
                                transform="scale(1.0)"
                                src={dog.url}
                                alt={dog.breeds[0].name}
                                objectFit="contain"
                                transition="0.3s ease-in-out"
                                _hover={{
                                    transform: 'scale(1.05)',
                                }}
                            />
                        </Link>
                    </Box>
                    <Heading size="md" textTransform="capitalize">{dog.breeds[0].name}</Heading>
                    <Flex>
                        <Button
                            bg={'#3182ce'}
                            color={'white'}
                            rounded={'md'}
                            marginRight='16px'
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => handleOpenDialog(dog)}
                        >See more</Button>
                        <Button
                            bg={'#F56565'}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => handleFavorite(dog)}
                            disabled={disableButton(dog.id)}
                        >
                            Favorite
                        </Button>
                    </Flex>
                </Stack>
            )) : <div>No Dogs</div>}
            </Box>
            {openDetailsDialog && currentBreed && <DetailsDialog open={openDetailsDialog} data={currentBreed} close={() => setOpenDetailsDialog(false)} />}
            {openFavDialog && favouriteDogsList && <FavoriteDialog open={openFavDialog} data={favouriteDogsList} close={() => setOpenFavDialog(false)} />}
        </Flex>
    );
}

export default App;
