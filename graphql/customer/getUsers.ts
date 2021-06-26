import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers{
    id
    name
    imgUser
    phone
    CMND
    email
    password
    role
    myWallet
    token
    createAt
  }
  }
`;
