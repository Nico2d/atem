import { GraphQLClient } from "graphql-request";

export const sendRequest = async <T extends unknown>(
  schema: string,
  variables?: any
): Promise<T | undefined> => {
  const graphQLClient = new GraphQLClient(process.env.APIURL, {
    mode: "cors",
    credentials: "include",
  });

  const data = await graphQLClient.request<T>(schema, variables);
  const keys = Object.keys(data);

  return data[keys[0]];
};
