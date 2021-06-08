import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  query getRooms($hotelId: String) {
    getRooms(hotelId: $hotelId) {
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
