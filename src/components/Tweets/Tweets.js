// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BEARER_TOKEN="AAAAAAAAAAAAAAAAAAAAAIEVjwEAAAAAwk1Gj%2FzlTgDFJGFqzbzknyH3TbA%3DR4c8DVqtxhGUwakpYmtUscfUoYUEIHEW3CVcgtOfCSDHKnEozr";


function Tweets() {
//   const [searchInput, setSearchInput] = useState('');
//   const [tweets, setTweets] = useState([]);

  // Search
  async function Search() {
    // search for artist and display tweets
    const params = {
        'query': 'from:elonmusk',
        'granularity': 'day'
    }
    const response = await fetch(`https://api.twitter.com/2/tweets/counts/recent`, params, {
      method: "GET",
      headers: {
        mode: "no-cors",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data.text);
  }
// console.log(tweets)
  return (
      Search()
//     <div className="App">
//       <Container>
//         <InputGroup className="rb-3" size="lg">
//           <FormControl 
//           placeholder="Search recent tweets"
//           type="input"
//           onKeyPress={event => {
//             if (event.key == "Enter") {
//               Search();
//             }
//           }} 
//           onChange={event => setSearchInput(event.target.value)}
//           />
//           <Button onClick={Search}>
//             Search Tweets
//           </Button>
//         </InputGroup>
//       </Container>
//       <Container>
//         <Row className="mx-2 row row-cols-4">
//           {tweets.map( (album, i) => {
//             console.log(album)
//             return (
//               <Card key={i}>
//               <a 
//               target = "_blank"
//               href={album.external_urls.spotify}
//               rel="noopener noreference"
//               className="card-image-link"
//               >
//               <Card.Link>{album.link}</Card.Link>
//               </a>
//               <Card.Img variant="top"
//                     src={album.images[0].url} alt="" 
//                     />
//                 <Card.Body>
//                   <Card.Title>{album.name}</Card.Title>
//                 </Card.Body>
//             </Card>
    
//             )
//           })}

//         </Row>
//       </Container>
//     </div>
  );
}


export default Tweets;



















// import { Client } from "twitter-api-sdk";


// function Tweets() {
//     async function main() {

//         const client = new Client(process.env.BEARER_TOKEN);
//         const user = 44196397 
      
//         const response = await client.tweets.usersIdTweets(`${user}`, {
      
//           "max_results": 20
      
//         });
      
        
      
//         console.log("response", JSON.stringify(response, null, 2));
      
//       }
//     return (
//         main()
//     );
      
// }

// export default Tweets();


// // import needle from 'needle';

// // // The code below sets the bearer token from your environment variables
// // // To set environment variables on macOS or Linux, run the export command below from the terminal:
// // // export BEARER_TOKEN='YOUR-TOKEN'
// // const token = "AAAAAAAAAAAAAAAAAAAAAIEVjwEAAAAAwk1Gj%2FzlTgDFJGFqzbzknyH3TbA%3DR4c8DVqtxhGUwakpYmtUscfUoYUEIHEW3CVcgtOfCSDHKnEozr";

// // const endpointUrl = "https://api.twitter.com/2/tweets/counts/recent";

// // async function getRequest() {

// //     // Edit query parameters below and specify a search query
// //     // optional params: start_time,end_time,since_id,until_id,next_token,granularity
    // const params = {
    //     'query': 'from:twitterdev',
    //     'granularity': 'day'
    // }

// //     const res = await needle('get', endpointUrl, params, {
// //         headers: {
// //             "User-Agent": "v2RecentTweetCountsJS",
// //             "authorization": `Bearer ${token}`
// //         }
// //     })

// //     if (res.body) {
// //         return res.body;
// //     } else {
// //         throw new Error('Unsuccessful request');
// //     }
// // }

// // (async () => {

// //     try {
// //         // Make request
// //         const response = await getRequest();
// //         console.dir(response, {
// //             depth: null
// //         });

// //     } catch (e) {
// //         console.log(e);
// //         process.exit(-1);
// //     }
// //     process.exit();
// // })();




