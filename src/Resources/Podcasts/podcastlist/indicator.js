import React from 'react';
import indicatorimg from '../../Images/podcasts/indicatorimg.png';
import '../../BookReviews/bookpages/book-page.css';

const indicator = () => {
  

  return (
    <div className="book-page-box">
      <div className="book-header">
        <a href="https://open.spotify.com/show/4X3yDKgVTWRjSd6r0vhgo4" target="_blank" rel="noopener noreferrer">
          <img 
            src={indicatorimg} 
            alt="The Indicator from Planet Money" 
          />
        </a>
        
        <div className="book-title">
          <h1>The Indicator from Planet Money</h1>
          <p className="author">Rating: ★★★★☆ (4.5/5)</p>
          <p>Podcast review by <i>Harshita Bhalla</i></p>
        </div>
      </div>
      
      <div className="book-para">
        <p>
            <h2>Overview</h2>
        “The Indicator from Planet Money” is a podcast that makes economics, finance,
            and business concepts engaging and informative. With a conversational yet
            educational tone, it appeals to a wide audience, from beginners to experts.
            Episodes are released daily, lasting 10–15 minutes each.
          <br/><br/>
          <h2>Episode Reviews</h2>
          The episode “Why the US Economy is Still the Envy of the World” explores the U.S.
          economy's resilience and global leadership amid challenges. It highlights the
          roles of innovation and labour market flexibility, presenting its strengths and
          hurdles in an accessible way. <br/>
          In “The Economy’s Unseen Workers,” the episode explores the gig economy,
          highlighting the contributions of gig workers alongside their instability and lack of
          benefits. It discusses both the flexibility of this work and the vulnerabilities faced
          by these individuals, offering an insightful look at a key aspect of the modern
          economy.<br/>
          The episode “Why You Can’t Buy a Used Car Right Now” explores rising used car
          prices linked to supply chain disruptions. It illustrates the interconnectedness of
          the global economy, showing how shortages in one sector affect others. The
          episode presents the complexities of the used car market in an engaging,
          understandable way.<br/>
          Finally, “The 2024 U.S. Election and Economic Uncertainty” explores the impact
          of the upcoming U.S. election on economic policies, immigration, and trade
          agreements. It underscores how political polarization contributes to economic
          uncertainty and provides a timely and relevant analysis of the potential
          economic consequences of the election.
            
          <br/><br/>
          <h2>Hosts and Contributors</h2>
          <strong>•Main Hosts:</strong> Adrian Ma serves as the primary host, bringing a conversational
          and engaging tone to the episodes.<br/>
          <strong>•Guest List:</strong> The podcast often features diverse guest speakers, even Simon
          Rabinovitch offers insights on the sustainability and resilience of the U.S.
          economy.<br/>
          <br/>
          <h2>Podcast’s Beginner-Friendliness</h2>
          <strong>•Is the Podcast Beginner-Friendly?:</strong> <br/>
          Yes, the podcast is highly beginner-friendly. The hosts break down complex
          topics into simple, digestible points, making it easy for new listeners.
          <br/>
          <strong>•Language Used:</strong>
          The language is simple and avoids heavy jargon.
          <br/><br/>
          <h2>Conclusion</h2>
          “The Indicator from Planet Money” is a highly recommended podcast that
          makes economics engaging and accessible. It simplifies complex topics and
          entertains while educating listeners. Including more practical applications of
          economic theories could enhance it further, but its strength is in informing and
          entertaining simultaneously.
          
        </p>
      </div>
      
    </div>
  );
};

export default indicator;
