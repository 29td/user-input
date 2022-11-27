import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';

const TWITTER_API_KEY = "3BIvglMa3QdoQYTf88aePx6M8";
const TWITTER_API_SECRET = "Qu2painFz8DtlL7ou9FQvr98XFwqh9JPhHd9nsyTbwSv1D7NpR";
const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAIEVjwEAAAAAwk1Gj%2FzlTgDFJGFqzbzknyH3TbA%3DR4c8DVqtxhGUwakpYmtUscfUoYUEIHEW3CVcgtOfCSDHKnEozr";


function Tweets() {
  // const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // access token
    const getAccessToken = async () => {
      const response = await fetch("https://api.twitter.com/oauth2/token", {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + "Basic " + new Buffer.from(TWITTER_API_KEY  + ":" + TWITTER_API_SECRET).toString("base64"),
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

  // Search
  async function Search() {
    // search for artist and display tweets
    const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=from:twitterdev`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TWITTER_BEARER_TOKEN,
      },
    });
    const data = await response.json();
    setTweets(data.tweets.user);
  }
// console.log(tweets)
  return (
    <div className="App">
      <Container>
        <InputGroup className="rb-3" size="lg">
          {/* <FormControl 
          placeholder="Search For Tweets"
          type="input"
          onKeyPress={event => {
            if (event.key == "Enter") {
              Search();
            }
          }} 
          onChange={event => setSearchInput(event.target.value)}
          /> */}
          {/* <Button onClick={Search}>
            Tweets
          </Button> */}
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {tweets.map( (tweet, i) => {
            console.log(tweet)
            return (
              <Card key={i}>
              <Card.Img src={tweet.images[0].url} />
                <Card.Body>
                  <Card.Title>{tweet.name}</Card.Title>
                </Card.Body>
            </Card>
    
            )
          })}

        </Row>
      </Container>
    </div>
  );
}


export default Tweets;












// // const needle = require('needle');
// import axios from 'axios';
// const token = process.env.BEARER_TOKEN;

// const endpointUrl = "https://api.twitter.com/2/tweets/counts/recent";

// function Tweets() {
//   var Twitter = require('twitter');

// var client = new Twitter({
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });
//   client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
//     console.log(tweets);
//  });
//   async function getRequest() {

//     // Edit query parameters below and specify a search query
//     // optional params: start_time,end_time,since_id,until_id,next_token,granularity
//     const params = {
//         'query': 'from:twitterdev',
//         'granularity': 'day'
//     }
  
//     (async () => {
//       // search for artist and display tweets
//       const response = await fetch(`https://api.twitter.com/2/users/by/username/${searchInput}`, params, {
//         method: "GET",
//         headers: {
//           "User-Agent": "v2RecentTweetCountsJS",
//           "authorization": `Bearer ${token}`
//         },
//       });
//       const data = await response.json();
//       setTweets(data.user);
//     })

//     if (response.body) {
//       return response.body;
//   } else {
//       throw new Error('Unsuccessful request');
//   }
// }

// (async () => {

//   try {
//       // Make request
//       const response = await getRequest();
//       console.dir(response, {
//           depth: null
//       });

//   } catch (e) {
//       console.log(e);
//       process.exit(-1);
//   }
//   process.exit();
// })();



//   //   const res = await fetch('get', endpointUrl, params, {
//   //       headers: {
//   //           "User-Agent": "v2RecentTweetCountsJS",
//   //           "authorization": `Bearer ${token}`
//   //       }
//   //   })
  
//   //   if (res.body) {
//   //       return res.body;
//   //   } else {
//   //       throw new Error('Unsuccessful request');
//   //   }
//   // }
  
//   // (async () => {
  
//   //   try {
//   //       // Make request
//   //       const response = await getRequest();
//   //       console.dir(response, {
//   //           depth: null
//   //       });
  
//   //   } catch (e) {
//   //       console.log(e);
//   //       process.exit(-1);
//   //   }
//   //   process.exit();
//   // })();
  
// }

// export default Tweets;



// // import React from "react";

// // require('dotenv').config();
// // import TwitterClient from "twitter-api-client";
// // import axios from "axios";

// // const Tweet = () => {

// //   const twitterClient = new TwitterClient ({
// //     apiKey: process.env.TWITTER_API_KEY,
// //     apiSecret: process.env.TWITTER_API_SECRET,
// //     accessToken: process.env.TWITTER_ACCESS_TOKEN,
// //     accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// // })
// // axios.get('http://history.muffinlabs.com/date')
// //     .then(response => {
// //     const data = response.data.data ? response.data.data : {}
// //     let tweet
// //     if (data.Events && data.Events.length) {
// //         //tweet the first event in the array
// //         tweet = 'Year ' + data.Events[0].year + ' - ' + data.Events[0].text
// //     } else {
// //         tweet = 'Nothing happened today :)'
// //     }

// //     //TODO send the tweet
// // }).catch (err => {
// //     console.error(err)
// // })
// //   // const [searchInput, setSearchInput] = useState('');
// //   // const [accessToken, setAccessToken] = useState('');
// //   // const [tweets, setTweets] = useState([]);
// //   // Search
// //   // async function Search() {
// //     // search for artist and display tweets
// //   //   const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=tweet`, {
// //   //     method: "GET",
// //   //     headers: {
// //   //       Authorization: "Bearer " + accessToken,
// //   //     },
// //   //   });
// //   //   const data = await response.json();
// //   //   settweets(data.tweets.items);
// //   // }
  
// // };

// // export default Tweet;


// // // console.log('SA')

// //   // const response = await fetch(`https://api.twitter.com/2/users/by/username/#{@Jito765079951}`)
// //   // console.log(response)
// //   // const twitterClient = new TwitterClient({

// //   //     apiKey: process.env.TWITTER_API_KEY,
// //   //     apiSecret: process.env.TWITTER_API_SECRET,
// //   //     accessToken: process.env.TWITTER_ACCESS_TOKEN,
// //   //     accessTokenSecret: process.env.TWITTER_BEARER_TOKEN
// //   // })
  
// //   // axios.get('http://history.muffinlabs.com/date')
// //   //     .then(response => {
// //   //     const data = response.data.data ? response.data.data : {}
// //   //     let tweet
// //   //     if (data.Events && data.Events.length) {
// //   //         //tweet the first event in the array
// //   //         tweet = 'Year ' + data.Events[0].year + ' - ' + data.Events[0].text
// //   //     } else {
// //   //         tweet = 'Nothing happened today :)'
// //   //     }
  
// //   //     twitterClient.tweets.statusesUpdate({
// //   //         status: tweet
// //   //     }).then (response => {
// //   //         console.log("Tweeted!", response)
// //   //     }).catch(err => {
// //   //         console.error(err)
// //   //     })
// //   // }).catch (err => {
// //   //     console.error(err)
// //   // })