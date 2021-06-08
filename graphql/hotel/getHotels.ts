import { gql } from "@apollo/client";

export const GET_HOTELS = gql`
  query getHotels($address: String) {
    getHotels(address: $address) {
      id
      nameHotel
      imgHotel
      rate
      impress
      checkIn
      checkOut
      address{
        address
      }
      benefits{
        benefit
      }
      conditions{
        condition
      }
      locations{
        location
      }
      createAt
      updateAt
      
    }
  }
`;
