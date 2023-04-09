import { ApolloClient, HttpLink } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';
import { GRAPHQL_URI } from '@/config'
import fetch from 'cross-fetch';

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: GRAPHQL_URI, fetch }),
    cache: new InMemoryCache(),
});


export default apolloClient