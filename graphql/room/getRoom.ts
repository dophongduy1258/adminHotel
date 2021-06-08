import { gql } from "@apollo/client";

export const GET_ROOM = gql`
  query getRoom($id: String!) {
    getRoom(id: $id) {
    id 
    numberRoom
    imgRoom
    status
    sizeRoom
    bed
    amountOfPeople
    aboutRoom
    price
    quality
    benefits{
      benefit
    }
    conditions{
      condition
    }
    hotel
    createAt
    updateAt
  }
  }
`;
