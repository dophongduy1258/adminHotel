import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation adminLogin($email:String,$password:String) {
    adminLogin(email:$email,password:$password) {
      token
      email
    }
  }
`;
