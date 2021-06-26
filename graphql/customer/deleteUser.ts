import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteUser($userID:String) {
    deleteUser(userID:$userID){
    message
  }
  }
`;
