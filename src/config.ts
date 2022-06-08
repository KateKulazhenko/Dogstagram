export interface IBreedData {
    bred_for: string;
    breed_group: string;
    height: {
        imperial: string; 
        metric: string;
    }
    id: number;
    image: {
        id: string;
        width: number;
        height: number;
        url: string;
    }
    life_span: string;
    name: string;
    origin: string;
    reference_image_id: string;
    temperament: string;
    weight: {
        imperial: string;
    }
}

export interface IDogData {
    breeds: [
        {
            weight: {
                imperial: string;
                metric: string;
            },
            height: {
                imperial: string;
                metric: string;
            },
            id: number;
            name: string;
            bred_for: string;
            breed_group: string;
            life_span: string;
            temperament: string;
            reference_image_id: string;
        }
    ],
    id: string;
    url: string;
    width: number;
    height: number;
}