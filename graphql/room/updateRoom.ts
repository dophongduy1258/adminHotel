import { gql } from "@apollo/client";

export const UPDATE_ROOM = gql`
  mutation updateRoom($inputs: UpdateRoom) {
    updateRoom(inputs: $inputs) {
      data{
        id
        numberRoom
        amountOfPeople
        status
        sizeRoom
        bed
        price
        hotel
      }
      message
    }
  }
`;
