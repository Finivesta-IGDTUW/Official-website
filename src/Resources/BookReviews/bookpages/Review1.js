import React from "react";
import "./book-page.css";
import Doglapan from "../../Images/books/Doglapan.jpg";

const Review1 = () => {
  return (
    <div className="Reviews">
      <div className="book-page-box">
        <div class="book-header ">
          <div className="book-img">
            <img src={Doglapan} alt="Doglapan" />
          </div>

          <div class="book-title">
            <h1> DOGLAPAN</h1>
            <p class="author">
              by <i>Ashneer Grover</i>
            </p>
            <p>
              Book review by <i>Aiman</i>, <i>Urja Kohli</i> and <i>Kritika</i>{" "}
            </p>
          </div>
        </div>

        <div className="book-para">
          This is the unfettered story of Ashneer Grover - the favorite and
          misunderstood poster boy of Start-up India. A raw, gut-wrenching in
          its honesty, and completely from the heart, this is storytelling at
          its finest.
          <br />
          <br />
          A young boy with a 'refugee' tag growing up in Delhi's Malviya Nagar
          outpaces his circumstances by becoming a rank-holder at the pinnacle
          of academic excellence in India-IIT Delhi. He goes on to do an MBA
          from the hallowed halls of IIM Ahmedabad, builds a career as an
          investment banker at Kotak Investment Banking and AmEx, and is pivotal
          in the making of two unicorns-Grofers, as CFO, and BharatPe, as
          co-founder. As a judge on the popular TV show Shark Tank India,
          Ashneer becomes a household name even as his life turns upside down.
          Controversy, media spotlight, and garrulous social media chatter
          descend, making it difficult to distinguish fact from fiction. The
          book starts with the scene from Bharatpe Saga in January 2022 and then
          quickly moves on to Ashneer's childhood. Ashneer has described his
          childhood, his trips as a middle-class refugee boy, his background,
          and the profession of his parents quite vividly. He describes how he
          with his wife, moved into a 1BHK in Mumbai at a reasonable salary
          after getting his first job with Kotak. At Kotak, he explains the
          investment deals he cracked as a member of the Kotak IB Team and how
          that shaped his investment-raising abilities which later came to his
          aid during his BharatPe Stint. He then goes on to describe his career
          at Amex, Grofers, and PC Jewellers.
          <br />
          <br />
          Doglapan, which means double standards, is a controversial yet
          beautifully written book by Ashneer Grover, the former co-founder of
          BharatPe. The book is an example of storytelling at its finest.
          Ashneer Grover, in his book, describes the controversies, hardships,
          and problems he faced with complete honesty, also putting forward the
          mistakes he made in his journey. The book starts off with him getting
          into IIT Delhi and then to IIM Ahmedabad portraying his dedication and
          hard-working personality. He built a career as an investment banker at
          Kotak Investment Banking and AmEx. He also becomes the reason behind
          the success of two unicorns-Grofers, as CFO, and BharatPe, as
          co-founder. He also talks about many controversies, telling his side
          of the story.
          <br />
          <br />
          He not only talked about his highs but also his lows i.e, he not only
          covered his mistakes but also gave life advice from his experience to
          help the reader learn from them. Throughout the book, there are
          several life and business lessons ranging from “put yourself first,
          always” to “it is important to remember that the investor is just
          another vendor”. Attribute it to Ashneer's writing ability or his life
          journey, the book is very interesting and will compel you to complete
          it in one sitting.
        </div>
      </div>
    </div>
  );
};

export default Review1;
