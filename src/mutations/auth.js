import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation {
    logout {
      id
      email
    }
  }
`;
