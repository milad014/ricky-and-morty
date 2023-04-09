import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CircularProgress, Grid, Typography } from '@mui/material';

import type { Character as CharacterType } from '../types/character';

import { GET_CHARACTER_BY_ID } from '../graphql/queries';

const CharacterDetails: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<{ character: CharacterType }>(GET_CHARACTER_BY_ID, {
    variables: { id },
  });

  if (loading) {
    return <div className="flex justify-center items-center h-full"><CircularProgress /></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { character } = data!;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">{character.name}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={character.image} alt={character.name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Status:</Typography>
        <Typography>{character.status}</Typography>
        <Typography variant="h6">Species:</Typography>
        <Typography>{character.species}</Typography>
        <Typography variant="h6">Gender:</Typography>
        <Typography>{character.gender}</Typography>
        <Typography variant="h6">Origin:</Typography>
        <Typography>{character.origin.name}</Typography>
      </Grid>
    </Grid>
  );
};


export default CharacterDetails