import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Character } from '@/types/character';

interface Props {
  character: Character;
}

const CharacterListItem: React.FC<Props> = ({ character }) => {
  return (
    <Card className='h-full' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.species} - {character.status}
        </Typography>
        <Link to={`/character/${character.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default CharacterListItem;