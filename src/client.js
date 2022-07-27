import {
  ApolloClient, InMemoryCache, ApolloLink, HttpLink,
} from '@apollo/client';


const service = new HttpLink({
  uri:  'https://flyby-gateway.herokuapp.com/'
});


const mockService = new HttpLink({
  uri: 'https://7717c985-f4f1-45dd-9130-1e92404f118c.mock.pstmn.io/mockAPI'
});


const client = new ApolloClient({
   link: ApolloLink.split(
    	(operation) => operation.getContext().clientName === 'mockService',
    	mockService,
    	service
    ),
  cache: new InMemoryCache(),
});



export default client;