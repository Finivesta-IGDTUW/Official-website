import React from "react";
import "./book-page.css";
import thePersonalMBA from "../../Images/books/thePersonalMBA.jpg";

const Review21 = () => {
  return (
    <div>
      <div className="book-page-box">
        <div className="book-header">
          <div className="book-img">
            <img src={thePersonalMBA} alt="The Personal MBA Cover" />
          </div>

          <div className="book-title">
            <h1>The Personal MBA</h1>
            <p className="author">
              by <i>Josh Kaufman</i>
            </p>
            <p>
              Book review by <i>Manya Sachdeva & Shatakshi </i>
            </p>
          </div>
        </div>

        <div className="book-para">
          <p>
            The Personal MBA by Josh Kaufman is a book that explains the basics
            of business in a simple and practical way. It’s written for people
            who want to learn about business but don’t want to spend time or
            money on a formal MBA program
            <br />
            <br />
            <i>
              The million things you thought you had to memorize are simply
              various combinations of the core principles.
            </i>
            <br />
            <br />
            <b>What the Book Covers:</b>
            <br />
            <br />
            The book discusses key business concepts such as:
            <br />
            <br />
            <ol>
              <li>
                Value Creation – Focuses on identifying and offering solutions
                that meet people's needs, ensuring they find enough value to pay
                for it.
              </li>
              <li>
                Marketing and Sales – Explains strategies to effectively
                communicate with potential customers and persuade them to
                purchase your product or service.
              </li>
              <li>
                Finance – Highlights the significance of managing finances,
                tracking profitability, and making informed money-related
                decisions.
              </li>
              <li>
                Productivity – Discusses methods to enhance efficiency,
                streamline processes, and maximize output in both personal and
                business contexts.
              </li>
            </ol>
            Josh Kaufman also focuses a lot on understanding people, like
            customers and employees, which helps in running a business better.
            <br />
            <br />
            <b>What We Liked:</b>
            <br />
            <br />
            The best part of the book is that it’s very practical. It explains
            things in simple terms without using complicated business jargon. It
            gives ideas that can be applied directly, like “The Five Parts of
            Every Business,” which makes it easy to understand how a business
            works. Another aspect I appreciated is how the author emphasizes the
            human side of business. By focusing on understanding people both
            customers and employees, the book highlights the importance of
            building relationships and creating a positive impact.
            <br />
            <br />
            <b>What Could Have Been Better:</b>
            <br />
            <br />
            Sometimes the book feels too basic. It gives a broad overview, but
            it doesn’t go deep into any specific topic. Also, there are no
            real-life case studies, which some people might miss.
            <br />
            <br />
            <b>Our Opinion:</b>
            <br />
            <br />
            I think this is a great book for beginners who want to understand
            how businesses operate. It’s especially good for students,
            entrepreneurs, or anyone curious about business. The language is
            simple, and the lessons are practical. Overall, it’s a useful book
            to start your journey in understanding business.
            <br />
            <br />
            One of the book's strengths lies in its practicality. Instead of
            focusing on abstract theories, it provides actionable insights that
            can be applied immediately. For instance, frameworks like "The Five
            Parts of Every Business" offer a clear and straightforward way to
            understand the core elements that make any business function
            successfully.
            <br />
            <br />
            That said, while the book excels in simplicity, it may feel a bit
            too basic for readers looking for in-depth analysis or advanced
            strategies. The absence of real-life case studies might also
            disappoint those who prefer concrete examples to connect theory with
            practice.
            <br />
            <br />
            Overall, this book is a valuable resource for building a solid
            foundation in business. It’s not just informative but also
            inspiring, encouraging readers to think practically and take the
            first steps toward their entrepreneurial or professional goals. For
            those at the start of their journey, it’s an engaging and highly
            useful guide.
            <br />
            <br />
            <b>My Favourite Quotation:</b>
            <br />
            <br />
            <b>
              “Business is about the Profitable creation and delivery of
              valuable offers to paying customers…. ”
            </b>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review21;
