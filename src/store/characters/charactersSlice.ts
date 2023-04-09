import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import apolloClient from '@/graphql/client';
import { GET_CHARACTERS } from '@/graphql/queries';
import type { CharactersData, CharactersState, FilterCharacter } from '@/types/character';



const initialState: CharactersState = {
    characters: [],
    pageCount: 1,
    isLoading: false,
    error: null,
};


export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async ({ page = 1, filter }: { page?: number; filter?: FilterCharacter }) => {

        const { data } = await apolloClient.query({
            query: GET_CHARACTERS,
            variables: {
                page,
                filter,
            },
        });


        return {
            results: data.characters.results,
            info: data.characters.info
        };
    },
);



export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<CharactersData>) => {
                state.isLoading = false;
                state.characters = action.payload.results;
                state.pageCount = action.payload.info.pages;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? 'Error fetching characters';
            });
    },
});


export const charactersActions = charactersSlice.actions
