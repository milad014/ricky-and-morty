import { CircularProgress, Grid } from "@mui/material"

import CharacterListItem from "./CharacterListItem"

import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CharactersList = () => {

    const { characters, isLoading, error } = useSelector(
        (state: RootState) => state.characters
    );


    if (isLoading) return (
        <div className="flex justify-center items-center h-full">
            <CircularProgress />
        </div>
    )

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (!characters.length) {
        return <div className="flex justify-center h-full py-12">
            No result found
        </div>
    }
    return (
        <Grid container py={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {characters.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                    <CharacterListItem character={character} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CharactersList