import { gql } from "@apollo/client";

export const GET_BILLS = gql`
  query getBills($token: String) {
    getBills(token: $token) {
      id
      hotel
      room
      bed
      nameUser
      email
      phoneNumber
      CMND
      bookingDate
      codeVoucher
      moneyDecreased
      total
      textLabel1
      textLabel2
      textLabel3
      hotline
      createAt
      
    }
  }
`;

