interface Origin {
    name: string;
}

interface Location {
    type: string;
    name: string;
}


export interface FilterCharacter {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
}

export type CharactersState = {
    characters: Character[];
    pageCount: number,
    isLoading: boolean;
    error: string | null;
};

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    image: string;
}


interface Info {
    count: number;
    pages: number;
    next: number | null;
    prev: number | null;
}

export interface CharactersData {
    info: Info;
    results: Character[];
}

