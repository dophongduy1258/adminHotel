import { gql } from "@apollo/client";

export const DELETE_ROOM = gql`
  mutation deleteRoom($roomID: String) {
    deleteRoom(roomID: $roomID) {
      message
    }
    }
`;
