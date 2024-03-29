import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query {
    characters {
        results {
            id
            name
            image
        }
    }
}`;

const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
    character(id: $id) {
            id
            name
            image
            episode {
                name
                episode
            }
    }
}`;

function UseCharacters() {
    const { error, data, loading } = useQuery(GET_CHARACTERS)

    return {
        error,
        data,
        loading,
    };
  }

  
  export default UseCharacters;