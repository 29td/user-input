import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from "react";

const CLIENT_ID = "5d9dfb5278644d07a2c20773b1490fd0";
const CLIENT_SECRET = "1f7b7f725f6c4a65a1a3c1eb3d598ad6";

function Spotify() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // access token
    var authParameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic' +  CLIENT_ID + CLIENT_SECRET,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  // Search
  async function Search() {
    console.log("Search for " + searchInput);

    // get request using search to get artist id
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => { return data.artists.items[0].id })

    console.log('Artist ID is ' + artistID);
    // get request with artist id in order to grab all albums from artist

    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50')
    .then(response =>response.json())
    .then(data => {
      console.log(data);
      setAlbums(data.items);
    });
    // display those albums to the user
  }
// console.log(albums)
  return (
    <div className="App">
      <Container>
        <InputGroup className="rb-3" size="lg">
          <FormControl 
          placeholder="Search For Artist"
          type="input"
          onKeyPress={event => {
            if (event.key == "Enter") {
              Search();
            }
          }} 
          onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={Search}>
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map( (album, i) => {
            console.log(album)
            return (
              <Card>
              <Card.Img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                </Card.Body>
            </Card>
    
            )
          })}

        </Row>
      </Container>
    </div>
  );
}


export default Spotify;

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from '../Spotify/home';
// import RedirectPage from '../Spotify/RedirectPage';
// import Dashboard from '../Spotify/dashboard';
// import NotFoundPage from '../Spotify/notFoundPage';

// function Spotify() {
//     return (
//       <BrowserRouter>
//       <div className="main">
//       <h1 className="main-heading">Spotify Music Search</h1>
//         {/* <Switch> */}
//           <Route path="/" component={Home} exact={true} />
//           <Route path="/redirect" component={RedirectPage} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route component={NotFoundPage} />
//         {/* </Switch> */}
//       </div>
//     </BrowserRouter>
//     );
//   }
  
//   export default Spotify;


// class AppRouter extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div className="main">
//           <Switch>
//             <Route path="/" component={Home} exact={true} />
//             <Route path="/redirect" component={RedirectPage} />
//             <Route path="/dashboard" component={Dashboard} />
//             <Route component={NotFoundPage} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// export default AppRouter;