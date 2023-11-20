import React from 'react';
import Header from '../components/header';
import Tweeteditor from '../components/tweeteditor';
import Tweets from '../components/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweeteditor />
      <Tweets />

    </main>
  );
}

export default Home;