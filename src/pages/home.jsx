import React from 'react';
import Header from '../components/header';
import Tweeteditor from '../components/tweeteditor';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweeteditor />
    </main>
  );
}

export default Home;