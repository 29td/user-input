import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';
import _ from 'lodash';
// import music from './assets/images/music.png'

const CLIENT_ID = "5d9dfb5278644d07a2c20773b1490fd0";
const CLIENT_SECRET = "1f7b7f725f6c4a65a1a3c1eb3d598ad6";

function Spotify() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // access token
    const getAccessToken = async () => {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        },
        body: "grant_type=client_credentials"
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    };

    if (!accessToken) {
      getAccessToken();
    }
    console.log(accessToken);
  }, [accessToken]);
  // https://api.twitter.com/2/users/by/username/${searchInput}

  // Search
  async function Search() {
    // search for artist and display albums
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=album`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    const data = await response.json();
    setAlbums(data.albums.items);
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
              <Card key={i}>
              <Card.Img variant="top"
                    src={album.images[0].url} alt="" 
                    />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <a 
              target = "_blank"
              href={album.external_urls.spotify}
              rel="noopener noreference"
              className="card-image-link"
              >
              Link
              </a>
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
