import { gql } from "graphql-request";

export const meQuery = gql`
  {
    me {
      id
      username
    }
  }
`;
