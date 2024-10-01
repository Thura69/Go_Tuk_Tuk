import { gql } from "@apollo/client";

export const GETALL_EXTRAFEES = gql`
  query MyQuery {
    extra_fees(order_by: { created_at: desc_nulls_first }) {
      updated_at
      name
      id
      disabled
      created_at
      amount
    }
  }
`;

export const DELETE_EXTRAFEES_BY_ID = gql`
  mutation MyMutation($id: uuid = "") {
    delete_extra_fees_by_pk(id: $id) {
      id
    }
  }
`;

export const ADD_EXTRAFEES = gql`
  mutation MyMutation(
    $name: String = ""
    $disabled: Boolean = false
    $amount: numeric = ""
  ) {
    insert_extra_fees(
      objects: { name: $name, disabled: $disabled, amount: $amount }
    ) {
      affected_rows
      returning {
        id
        name
        amount
        disabled
      }
    }
  }
`;
