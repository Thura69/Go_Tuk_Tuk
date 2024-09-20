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


export const UPDATE_DRIVER_BY_ID = gql`
  mutation MyMutation(
    $id: uuid!
    $disabled: Boolean!
    $driver_id: String = ""
  ) {
    update_drivers_by_pk(
      pk_columns: { id: $id }
      _set: { disabled: $disabled, driver_id: $driver_id }
    ) {
      disabled
      driver_id
    }
  }
`;

