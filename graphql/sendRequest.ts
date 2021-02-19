import { request, GraphQLClient } from "graphql-request";

const ENDPOINT = "localhost:4000";

const client = new GraphQLClient(ENDPOINT, { headers: {} });
