
import "./bb.css";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdBzF2uxvI1VNnNr-IBf-2Q0b63KfUT0dyJg4L0fD_wyUfnKg/viewform?usp=publish-editor";

const FAQS = [
  {
    question: "What is Bidding Blitz?",
    answer:
      "Bidding Blitz is an interactive bidding competition in which participants place bids on fictional artefacts with the objective of maximising their profits. The participant or team achieving the highest profit by the end of the competition will be declared the winner.",
  },
  {
    question: "How many team members are allowed?",
    answer: "Each team can consist of 4 members.",
  },
  {
    question: "Is the event open to students from other colleges?",
    answer:
      "No. Bidding Blitz is exclusively open to students of Indira Gandhi Delhi Technical University for Women (IGDTUW).",
  },
  {
    question: "When is Bidding Blitz scheduled?",
    answer: "The event is scheduled for Friday, 20th November 2026.",
  },
  {
    question: "How is Bidding Blitz different from a traditional auction?",
    answer:
      "In a traditional auction, participants compete to purchase items by placing bids, with the highest bidder winning the item. Bidding Blitz, however, focuses on strategic bidding and profit maximisation. Participants bid on fictional artefacts, and the winner is determined by the highest profit generated through their bidding decisions.",
  },
  {
    question: "Is any prior experience required to participate?",
    answer:
      "No prior experience or knowledge of finance, trading, or bidding is required. The event is designed to be beginner-friendly, and all participants are welcome to take part.",
  },
];

function BiddingBlitz() {
  return (
    <main className="bidding-blitz-page">
      <section className="banner"></section>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            BIDDING
            <br />
            <span>BLITZ.</span>
          </h1>

          <p className="hero-subtitle">
            THINK FAST. BID SMART. WIN BIG.
          </p>

          <p className="hero-description">
            The game is on. Are you ready to make your move?
          </p>

          <a
            className="button button-primary"
            //href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            COMING SOON!
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2>
            WHAT IS
            <br />
            <span>BIDDING BLITZ?</span>
          </h2>

          <div className="about-description">
            <p>
              Bidding Blitz is where strategy meets excitement.
              Put your decision-making skills to the test, compete
              with fellow participants, and make every bid count.
            </p>

            <p>
              From smart strategies to thrilling moments, get ready
              for an experience where every move matters.
              The details are coming soon.
            </p>

            {/*
            <a
              className="button button-outline"
              //href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              I'm Interested <span>↗</span>
            </a>
            */}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <h2>
          FREQUENTLY ASKED
          <br />
          <span>QUESTIONS</span>
        </h2>

        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <details key={faq.question} className="faq-item">
              <summary>
                <span className="faq-number">Q{index + 1}.</span>
                {faq.question}
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="faq-note">
          Participants also stand a chance to win exciting prizes!
        </p>
      </section>

      <section className="register" id="register">
        <span className="eyebrow">YOUR MOVE STARTS HERE</span>

        <h2>READY TO PLAY?</h2>

        <p>Secure your spot. Let the bidding begin.</p>

        <a
          className="button button-primary"
          //href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          COMING SOON!
        </a>
      </section>
    </main>
  );
}

export default BiddingBlitz;
