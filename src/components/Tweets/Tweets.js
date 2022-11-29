import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAIEVjwEAAAAAZS3GvnuOeWJ8ntEpnopVP2d3XRE%3DlmbPIyA1zctNK1PktlBS324TSSQGMbAqxzIiPu4wMBpynrjnCj";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState("elonmusk");
  // const [count, setCount] = useState(20);

  const getTweets = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + BEARER_TOKEN);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const response = await fetch(`https://api.twitter.com/2/tweets/search/recent?query=${user}&max_results=20`, requestOptions);

    if (response.ok) {
      const result = response.text();
      result.then((data) => {
        setTweets(JSON.parse(data).data);
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand">Tweets</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" onSubmit={getTweets}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={user} onChange={(e) => setUser(e.target.value)} />
              {/* <input className="form-control me-2" type="search" placeholder="Count" aria-label="Count" value={count} onChange={(e) => setCount(e.target.value)} /> */}
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {tweets.map((tweet, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <p className="card-text">{tweet.text}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={`https://twitter.com/${tweet.author_id}/status/${tweet.id}`} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tweets;
