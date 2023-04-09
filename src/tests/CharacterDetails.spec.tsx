import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom'

import CharacterDetails from '@/pages/CharacterDetails';
import { GET_CHARACTER_BY_ID } from '@/graphql/queries';

describe('CharacterDetails', () => {
    const mocks = [
        {
            request: {
                query: GET_CHARACTER_BY_ID,
                variables: {
                    id: '1',
                },
            },
            result: {
                data: {
                    character: {
                        id: '1',
                        name: 'Rick Sanchez',
                        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Male',
                        origin: {
                            name: 'Earth (C-137)',
                        },
                    },
                },
            },
        },
    ];

    it('renders the loading spinner when loading', () => {
        render(
            <MockedProvider mocks={mocks}>
                <MemoryRouter initialEntries={['/character/1']}>
                    <Routes>
                        <Route path="/character/:id" element={<CharacterDetails />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('renders an error message when there is an error', async () => {
        const errorMessage = 'An error occurred';
        const errorMock = {
            request: {
                query: GET_CHARACTER_BY_ID,
                variables: {
                    id: '1',
                },
            },
            error: new Error(errorMessage),
        };

        render(
            <MockedProvider mocks={[errorMock]}>
                <MemoryRouter initialEntries={['/character/1']}>
                    <Routes>
                        <Route path="/character/:id" element={<CharacterDetails />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        const errorElement = await screen.findByText(`Error: ${errorMessage}`);
        expect(errorElement).toBeInTheDocument();
    });

    it('renders the character details when data is loaded', async () => {
        render(
            <MockedProvider mocks={mocks}>
                <MemoryRouter initialEntries={['/character/1']}>
                    <Routes>
                        <Route path="/character/:id" element={<CharacterDetails />} />
                    </Routes>
                </MemoryRouter>
            </MockedProvider>
        );

        const nameElement = await screen.findByText('Rick Sanchez');
        const statusElement = screen.getByText('Status:');
        const speciesElement = screen.getByText('Species:');
        const genderElement = screen.getByText('Gender:');
        const originElement = screen.getByText('Origin:');

        expect(nameElement).toBeInTheDocument();
        expect(statusElement).toBeInTheDocument();
        expect(speciesElement).toBeInTheDocument();
        expect(genderElement).toBeInTheDocument();
        expect(originElement).toBeInTheDocument();
    });
});