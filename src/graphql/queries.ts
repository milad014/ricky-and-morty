import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query($page:Int, $filter: FilterCharacter){
        characters(page:$page,filter:$filter){
        info {
            pages
            count
            next
            prev
        }
        results{
                id
                name
                image
                status
                gender
        }
    }        
    }
`


export const GET_CHARACTER_BY_ID = gql`
query($id:ID!){
    character(id:$id){
        name
        gender
        status
        image
        species
        origin{
            name
        }

    }
}
`;
