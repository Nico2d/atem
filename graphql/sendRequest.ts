import { GraphQLClient, request } from "graphql-request";

const ENDPOINT = "http://localhost:4000/graphql";

export const sendRequest = async <T extends unknown>(
  schema: string,
  variables?: any
): Promise<T | undefined> => {
  const graphQLClient = new GraphQLClient(ENDPOINT, {
    mode: "cors",
  });

  const data = await graphQLClient.request<T>(schema, variables);

  return data;
};