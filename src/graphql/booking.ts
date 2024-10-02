import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
query MyQuery {
  bookings {
    customer {
      name
      phone
      profile_picture_url
    }
    driver {
      name
      phone
      profile_picture_url
      vehicle_number
    }
    trip {
      total_amount
      status
    }
    start_location
    end_location
  }
}

  
`;


