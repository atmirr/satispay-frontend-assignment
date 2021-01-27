import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { offsetFromCursor } from './utils/apollo-utils';
import Main from './Main';

function App() {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: ['q', 'type'],

            merge(existing, incoming, { args, readField }) {
              const cursor = args?.after;
              const existingEdges = existing?.edges;
              const incomingEdges = incoming?.edges;
              const mergedEdges = existingEdges ? existingEdges.slice(0) : [];
              let offset = offsetFromCursor(mergedEdges, cursor, readField);
              // If we couldn't find the cursor, default to appending to
              // the end of the list, so we don't lose any data.
              if (offset < 0) offset = mergedEdges.length;
              for (let i = 0; i < incomingEdges.length; ++i) {
                mergedEdges[offset + i] = incomingEdges[i];
              }
              return { edges: mergedEdges, pageInfo: incoming?.pageInfo };
            },
          },
        },
      },
    },
  });
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache,
  });
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
