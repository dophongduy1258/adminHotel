import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation adminLogin($email:String,$password:String) {
    adminLogin(email:$email,password:$password) {
      
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
    updateAt
    coupon
    vouchers{
          id
          code
          voucher
          displayName
          status
          createAt
    }
    }
  }
`;
