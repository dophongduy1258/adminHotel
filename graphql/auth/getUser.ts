import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($token:String) {
    getUser(token:$token) {
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

export const GET_USER_BY_ID = gql`
  query getUserbyID($userID:String) {
    getUserbyID(userID:$userID) {
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
