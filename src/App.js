// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

function App() {


const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS,{
     context: {
      //clientName: 'mockService',
      clientName: 'mockService'
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}



  return (
     <div>
      <h2>My first Apollo app 🚀</h2>
       <DisplayLocations />
    </div>
  );
}

export default App;
