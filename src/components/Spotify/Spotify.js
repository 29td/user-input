import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';
import ReactAudioPlayer from 'react-audio-player';
 
const CLIENT_ID = "5d9dfb5278644d07a2c20773b1490fd0";
const CLIENT_SECRET = "1f7b7f725f6c4a65a1a3c1eb3d598ad6";
 
function Spotify() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [tracks, setAlbums] = useState([]);
 
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
  }, [accessToken]);
 
  async function Search() {
    // search for artist and display albums
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    const data = await response.json();
    console.log(data.tracks.items)
    setAlbums(data.tracks.items);
  }
 
  return (
    <div className="App">
      <Container>
        <InputGroup className="rb-3" size="lg">
          <FormControl
          placeholder="Search For Song"
          type="input"
          onKeyPress={event => {
            if (event.key === "Enter") {
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
        {!tracks.length && <p>No songs found please try another name</p>}
        <Row className="mx-2 row row-cols-4">
          {tracks.map( (track, i) => {
            return (
              <Card key={i}>
                <Card.Img src={track.album.images[0].url} />
                <Card.Body>
                  <Card.Title>Name: {track.album.name}</Card.Title>
                  <Card.Text>Artist: {track.artists[0].name}</Card.Text>
                  <Card.Text>Album: {track.name}</Card.Text>
                </Card.Body>
                <ReactAudioPlayer src={track.preview_url} controls />
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
 
 
export default Spotify;
 
