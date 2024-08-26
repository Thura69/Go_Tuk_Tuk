import { gql } from "@apollo/client";

export const GET_ALL_TRIPS = gql`
  query MyQuery {
    trips(order_by: { created_at: desc }) {
      commission_fee
      commission_rate
      commission_rate_type
      created_at
      distance_fee
      distance_fee_per_km
      distance_km
      total_amount
      start_location
      end_location
      driver_id
      extra_fee
      location_points
      waiting_fee
    }
  }
`;
