import React from "react";
import "./book-page.css";
import ThinkAndGrowRich from "../../Images/books/ThinkAndGrowRich.jpg";

const Review1 = () => {
  return (
    <div className="Reviews">
      <div className="book-page-box">
        <div class="book-header ">
          <div className="book-img">
            <img src={ThinkAndGrowRich} alt="Think And Grow Rich" />
          </div>

          <div class="book-title">
            <h1>Think And Grow Rich</h1>
            <p class="author">
              by <i>Napoleon Hill</i>
            </p>
            <p>
              Book review by <i>Disha Sethi</i>{" "}
            </p>
          </div>
        </div>

        <div className="book-para">
          <i>Think and Grow Rich</i> by Napoleon Hill is a guide to achieving success in life, whether it’s financial wealth, personal goals, or other dreams. The book is based on lessons learned from studying the habits of successful people like Thomas Edison, Henry Ford, and Andrew Carnegie. Hill explains how powerful your thoughts and actions can be when focused on a clear goal. By believing in yourself, staying persistent, and working with the right people, anyone can turn their dreams into reality.

          <br />
          <br />
          Success begins with having a clear and strong goal. You need to know exactly what you want in life and stay focused on it every day. This helps you stay motivated and overcome challenges. <b>For example, Edwin C. Barnes wanted to work with Thomas Edison as a partner. Even though he had no money or connections, he focused on his dream and eventually achieved it by staying persistent.</b>
          <br />
          <br />
          Believing in yourself is crucial. When you have confidence and a positive attitude, your mind focuses on finding solutions instead of problems. <b>Henry Ford is a great example of this. He believed in his vision of creating a V8 engine, even when his team said it couldn’t be done. His belief in himself and his goal motivated his team to eventually find a solution.</b>
          <br />
          <br />
          While belief is important, it must be paired with effort and persistence. You need to learn the right skills or knowledge and take consistent action, even when things don’t go as planned. <b>Thomas Edison’s story of inventing the light bulb shows this perfectly. He didn’t see his 10,000 failed attempts as failures but as steps toward success. His determination led to the invention of one of the greatest technologies.</b>
          <br />
          <br />
          Working with the right people can make your journey smoother. Surround yourself with supportive and knowledgeable individuals who inspire you. Also, learn to make quick and firm decisions without overthinking. <b>Andrew Carnegie built a "Mastermind" group of experts who helped him achieve massive success, proving that collaboration amplifies results.</b>
          <br />
          <br />
          Lastly, controlling your thoughts is key. Fear and negative emotions can stop you from reaching your goals. Replace fear with confidence and focus on what you want. <b>Hill shares how fear of criticism often holds people back, but successful individuals like Edison and Ford ignored negativity and focused on their goals, which allowed them to succeed.</b>
            <br />
            <br />
            <ol>
                <li><b>Know Your Goal:</b> Have a clear and strong desire for what you want, and focus on it every day.</li>
                <li><b>Believe in Yourself:</b> Confidence and positive thinking are essential for overcoming doubts and staying on track.</li>
                <li><b>Learn and Take Action:</b> Acquire the necessary knowledge and skills, and persist through failures until you succeed.</li>
                <li><b>Team Up:</b> Surround yourself with supportive people who can guide, inspire, and collaborate with you.</li>
                <li><b>Stay Positive:</b> Replace fear and negativity with determination and hope to create a success-driven mindset.</li>
            </ol>
            <br/>
            For Hill, "Rich" is about having abundance in the things that matter most to you. This could be wealth, but it could also be emotional satisfaction, personal growth, or making a meaningful impact on others. His core message is that the same principles of clear goals, belief, persistence, and collaboration can help you achieve success in any area you define as valuable.

        </div>
      </div>
    </div>
  );
};

export default Review1;