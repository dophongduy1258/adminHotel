import { gql } from "@apollo/client";

export const GET_PAYMENTS = gql`
  query getPayments($token: String) {
    getPayments(token: $token) {
      id
      paymentMethod
      orderDetail
      checkout
      email
      createAt
    }
  }
`;
