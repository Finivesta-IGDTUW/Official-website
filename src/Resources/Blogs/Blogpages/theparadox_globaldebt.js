import React from "react";
import "./blogpage.css";

import Image1 from '../Blogpages/blog-images/globaldebt1.jpg';
import Image2 from '../Blogpages/blog-images/globaldebt2.jpg';

const GlobalDebt = () => {
  return (
    <div>
      <div className="blog-page-box">
        <div className="blog-header globaldebt">
          <h1>The Paradox of Global Debt</h1>
           <p>
            Blog written by <i>Shreya Singh</i>
          </p>
        </div>

        <div className="blog-para">
          <p>
            <h3>
              “In a world built on credit, every promise is a chain binding us
              all in invisible threads of debt.”
            </h3>
            <br />
            When we talk about debt and its impact on our economy, we almost always mean “government debt.” 
            However, this is only a small part of the picture: individuals, private firms, and 
            households owe trillions, and these private debts are vital to understanding the economy.

            <br />
            <br />

            <h3><b>1. The Web of Borrowing</b></h3>
            Look around nations, corporations, and individuals all live on borrowed time and borrowed money. Governments take loans to build roads, companies borrow to innovate, and people swipe credit cards to live a little better.
            Yet, when we add up all this borrowing, a haunting question arises:
            If everyone owes someone, then who is truly owed. That's the paradox of global debt.

            <br />
            <br />

            <h3>2. A World Buried Under $310 Trillion</h3>
            According to the International Monetary Fund (IMF), the world’s total debt has crossed $310 trillion 
            that’s nearly three times the size of the global economy (GDP).

            <br />
            <br />
            <img src={Image1} className="image-in-blog2" alt="Blog content"/>
            <i>Graph: Global Debt vs Global GDP (2000–2025)</i>
            <br />
            (Sharp rise after 2008, spike during 2020 pandemic, steady growth
            after.)
            <br />
            <br />
            This means the world owes far more than it produces. The system
            keeps functioning because everyone believes borrowing will continue
            tomorrow.
            <br />
            <br />

            <h3>3. Everyone Owes, Everyone Owns</h3>
            Debt is a paradox because it’s both a burden and an asset.When a country borrows, investors gain a bond as an asset. When you take a loan, 
            your bank records it as income. When companies issue debt, shareholders expect growth.
            <br />
            So, while the global debt mountain seems terrifying, it is also what keeps the world turning. The borrower’s debt is the lender’s wealth.

            <br />
            <br />
            <img src={Image2} className="image-in-blog2" alt="Blog content"/>
            <i>Pie Chart: Who Holds the World’s Debt?</i>
            <br />
            <br />

            <h3>4. The Illusion of Wealth</h3>
            Here lies the beautiful illusion  that progress is free. That we can buy now and
            pay later forever.But if all debts were repaid today, there would be no money left
            to circulate. Our modern economy requires debt to survive. It’s like a river. if it stops flowing, everything dries up.
            So the paradox isn’t about who owes whom, but how much trust we have in tomorrow.

            <br />
            <br />

            <h3>5. Debt as a Mirror of Humanity</h3>
            Debt reflects more than finance; it mirrors our nature. Our desire to grow, to reach beyond our means, to believe in the unseen future.
            Every loan is a confession of hope that tomorrow will be better than today.And every interest payment is a reminder that hope has a cost.
            <br />
            <br />

            <h3>6. A Future Built on Borrowed Time</h3>
            As the global debt clock ticks faster, economists warn of instability. But maybe, debt isn’t just a danger it’s a 
            shared faith.Faith that nations will rise again after a crisis.Faith that companies will innovate again after loss.
            Faith that individuals will repay what they owe and start anew.Because in truth, no one is debt-free not even the earth we walk upon. 

            <br />
            <br />

            <h3>Conclusion</h3>
            In the end, the paradox of global debt is not about money, it's about connection. Every dollar borrowed, every bond issued, every promise
            ties us together in a vast circle of dependence. Everyone owes someone who’s owed and maybe that's what keeps the world spinning. 

          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalDebt;
