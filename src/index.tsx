import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import {ApolloProvider} from '@apollo/react-hooks'

//Apollo
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  })
});

client.query({
  query: gql`
    query getLoginTypes($LoginTypeInput: LoginTypeInput!) {
      getLoginTypes(input: $LoginTypeInput) {
        LoginTypes {
          id
          name
        }
        status {
          success
          detail
          code
          name
        }
      }
    }
  `,
  variables: {
    "LoginTypeInput": {
      "portalLoginProviderId": 10
    }
  },
})
.then(result => console.log(result)).catch(err => {console.log(err);})


const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Primer Apollo</h2>
    </div>
  </ApolloProvider>
)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
