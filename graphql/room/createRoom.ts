import { gql } from "@apollo/client";

export const CREATE_ROOM = gql`
  mutation createRoom($inputs: CreateRoom) {
    createRoom(inputs: $inputs) {
      # id
      # numberRoom
      # imgRoom
      # status
      # sizeRoom
      # bed
      # amountOfPeople
      # aboutRoom
      # price
      # quality
      # benefits{
      #   benefit
      # }
      # conditions{
      #   condition
      # }
      # hotel
      # createAt
      # updateAt
      message
    }
  }
`;
