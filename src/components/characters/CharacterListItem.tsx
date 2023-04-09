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
      <Link className="no-underline" to={`/character/${character.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={character.image}
          alt={character.name}
          className="transition ease-in-out delay-150 hover:opacity-70"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"  component="div">
            <div className="relative">
              {character.species} - {character.status}
              <span className={`animate-ping absolute inline-flex bottom-1 right-0 h-2 w-2 rounded-full opacity-75 ${character.status==='Alive' ? 'bg-green-400' : character.status==='Dead' ? 'bg-red-400' : 'bg-gray-900' }`}></span>
            </div>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CharacterListItem;