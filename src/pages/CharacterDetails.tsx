import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';

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

  return (<>
    <Container className="!flex justify-between items-center h-full">
      <Box>
        <Typography gutterBottom variant="h4" component="div">
          Name: <span>{character.name}</span>
        </Typography>
        <div className="flex gap-4">
          <Typography variant="h6">Status:</Typography>
          <Typography>{character.status}</Typography>
        </div>
        <div className="flex gap-4">
          <Typography variant="h6">Species:</Typography>
          <Typography>{character.species}</Typography>
        </div>
        <div className="flex gap-4">
          <Typography variant="h6">Gender:</Typography>
          <Typography>{character.gender}</Typography>
        </div>
        <div className="flex gap-4">
          <Typography variant="h6">Origin:</Typography>
          <Typography>{character.origin.name}</Typography>
        </div>
      </Box>
      <img
        className="rounded-md w-1/2 max-w-600px flex-1"
        src={character.image}
        alt={character.name}
      />
    </Container>
  </>
  );
};


export default CharacterDetails