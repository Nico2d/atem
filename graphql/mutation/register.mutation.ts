import { gql } from "graphql-request";

export const registerMutation = gql`
  mutation Register($username: String!, $password: String!, $email: String!) {
    register(
      parameters: { username: $username, password: $password, email: $email }
    ) {
      errors {
        field
        message
      }
      user {
        id
        email
      }
    }
  }
`;
