import { gql } from "@apollo/client";

export const GET_ORDER_DETAILS = gql`
  query getOrderDetails($token: String) {
    getOrderDetails(token: $token) {
      id
      numberRoom
      status
      sizeRoom
      bed
      amountOfPeople
      price
      quality
      hotel
      total
      email
      isCheckout
      createAt
      
    }
  }
`;


export const DELETE_ORDER_DETAIL = gql`
  mutation deleteOrderDetail($orderDetailID: String) {
    deleteOrderDetail(orderDetailID: $orderDetailID) {
      message
    }
    }
`;
