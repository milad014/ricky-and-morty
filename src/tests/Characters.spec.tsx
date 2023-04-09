import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import CharactersList from '@/components/characters/CharactersList';
import store from '@/store';

describe('CharactersList component', () => {

    it('displays a "No result found" message if there are no characters', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <CharactersList />
            </Provider>,
        );

        expect(getByText('No result found')).toBeInTheDocument();
    });
});