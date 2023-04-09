import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Pagination, TextField } from '@mui/material';

import { RootState } from '@/store';
import { fetchCharacters } from '@/store/characters/charactersSlice';
import { useAppDispatch } from '@/store/hooks';

import CharactersList from '@/components/characters/CharactersList';

import { debounce } from '@/utils';

const Characters = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const { pageCount, isLoading } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = parseInt(params.get('page') ?? '1', 10);
    setPage(pageParam);

    const searchParam = params.get('search') ?? '';
    setSearchTerm(searchParam);

    dispatch(fetchCharacters({ page, filter: { name: searchParam } }));
  }, [dispatch, location.search]);



  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', value.toString());

    if (value === 1) {
      searchParams.delete('page');
    }
    navigate(`?${searchParams.toString()}`);
    dispatch(fetchCharacters({ page: value }));
  };

  const handleSearchChange = useMemo(() =>
    debounce((value: string) => {
      setSearchTerm(value);
      const searchParams = new URLSearchParams(location.search);
      if (value.trim() === '') {
        searchParams.delete('search');
      } else {
        searchParams.set('search', value.trim());
      }

      searchParams.delete('page');


      navigate(`?${searchParams.toString()}`);
      dispatch(fetchCharacters({ page: 1, filter: { name: value } }));
    }, 500), [dispatch, location.search]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearchChange(value);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <TextField
            label="Search by name"
            value={searchTerm}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <CharactersList />
      {!isLoading && (
        <Pagination
          className="w-full flex justify-center mb-8"
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      )}
    </>
  );
};

export default Characters;

