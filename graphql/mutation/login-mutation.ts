import { gql } from "graphql-request";

export const loginMutation = gql`
  mutation Login($login: String!, $password: String!, $staySignIn: Boolean!) {
    login(login: $login, password: $password, staySignIn: $staySignIn) {
      errors {
        field
        message
      }
      user {
        id
        email
        username
      }
    }
  }
`;
