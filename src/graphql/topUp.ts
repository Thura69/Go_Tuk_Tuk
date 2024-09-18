import { gql } from "@apollo/client";

export const GET_ALL_TOPUPS = gql`
  query getTopUpTransactions {
    driver_transactions(
      where: { transaction_type: { _eq: "cash in" } }
      order_by: { created_at: desc }
    ) {
      id
      amount
      status
      created_at
      transaction_number
      driver {
        name
        phone
        address
        profile_picture_url
        vehicle_number
        balance
        bookings {
          customer {
            name
            phone
            profile_picture_url
          }
        }
      }
    }
  }
`;
