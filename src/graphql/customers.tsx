import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMERS = gql`
  query MyQuery {
    customers(order_by: { created_at: desc }) {
      email
      disabled
      name
      password
      phone
      profile_picture_url
    }
  }
`;
