import React from "react";
import "./blogpage.css";

import CustomTable from "../../../Components/CustomTable";

import Image1 from '../Blogpages/blog-images/us-election1.jpeg';
import Image2 from '../Blogpages/blog-images/US-election2.jpg';
import Image3 from '../Blogpages/blog-images/US-election3.jpg';
import Image4 from '../Blogpages/blog-images/US-election4.jpg';
import Image5 from '../Blogpages/blog-images/US-election5.jpg';
import Image6 from '../Blogpages/blog-images/US-election6.jpg';

const USelection = () => {
    const tableData1 = {
        header: ["", "Trump (in office)", "Harris (if elected)"],
        rows: [
            ["Corporate Tax Rates","Maintained at 21%","Proposed increase to 28%"],
            ["Trade Policy","America First” tariffs on China, EU","Multilateral cooperation"],
            ["Manufacturing","Tariffs to promote U.S. manufacturing","Investment in clean energy and tech"],
            ["Energy Sector","Fossil fuel support","Renewable energy focus"],
            ["Deficit Management","Increased due to tax cuts, military spending","Aimed to reduce through tax reforms"],
            ["Alliances","Strained with EU, NATO","Strengthened alliances with EU, NATO"],
            ["Innovation Focus","Emphasis on traditional industries","Investment in R&D, green tech"],
        ]
      };

      const tableData2 = {
        header: ["", "Trump’s Impact on economy development", "Harris’s Impact on economy development"],
        rows: [
            ["Trade and Tariffs", "Higher tariffs on imports affect developing economies relying on U.S. markets.","Support for free trade policies that allow developing countries continued access to U.S. markets."],
            ["Foreign Aid and Investment", "Potential cuts to U.S. aid and investment, impacting infrastructure and economic growth in developing nations.","Increased support for climate and development aid, strengthening poorer economies."],
            ["Supply Chain Impact","Push to relocate U.S. manufacturing, potentially hurting export-dependent economies.","Advocates for a diversified supply chain, supporting global manufacturing networks."],
            ["Climate and Green Investments" ,"Focus on fossil fuels, less support for international green initiatives.", "Investment in green energy partnerships with emerging economies."],
        ]
      };

  return (
        <div>
            <div className="blog-page-box">

                <div className="blog-header uselection">
                    <h1>The 2024 U.S. Election</h1>
                    <p>What a Trump Return V/S Harris Victory Means for the Global Economy </p>
                </div>

                <div className="blog-para">
                    <p> 
                        <h3>The Stakes of the 2024 Election for the Global Economy</h3>
                        As we approach the 2024 U.S. presidential election, the world is watching closely.
                        With the U.S. being the largest economy and a central player in global trade,
                        defence, and politics, the outcome of this election will have farreaching 
                        consequences—not just for Americans, but for people around the world.
                        <br/>
                        <b>Potential Economic Impacts Of Two Very Different Paths:</b> A return of <b>Donald Trump </b>
                        to the <b>White House</b> versus a <b>second term</b> for <b>Kamala Harris</b>, who would likely
                        continue the policies of the Biden administration.
                        <br/><br/>
                        <h3>The Global Impact of U.S. Leadership: Why the Election Matters</h3>
                        The U.S. economy is a cornerstone of global growth, and its domestic and international policies influence
                        everything from inflation rates and international trade to investment flows and geopolitical stability. Any
                        significant shift in U.S. economic policy is likely to reverberate around the world, affecting everything from
                        currency exchange rates to supply chain dynamics.<br/>
                        
                        Understanding the potential impact of a Trump vs. Harris victory is crucial for businesses, governments, and
                        investors worldwide. Their economic policies will shape global markets, influence emerging economies, and even
                        determine the future of international relations
 
                        <br/><br/>
                        <h3>Trump’s Economic Policies: A Focus on Growth Through Protectionism and Deregulation</h3>
                        Donald Trump's economic policies during his presidency were mainly characterised by tax cuts, trade wars and
                        tariffs, deregulation, and restrictions on immigration.

                        <br/><br/>
                        <h3>Tax Cuts and Deregulation</h3>
                        During his previous term, Donald Trump emphasized probusiness policies, such as slashing corporate tax rates and
                        rolling back regulations. His signature legislative
                        achievement, the <b>Tax Cuts and Jobs Act</b>, reduced the
                        corporate tax rate from 35% to 21%, incentivizing U.S.
                        companies to invest domestically and bring back jobs
                        from overseas. Trump’s economic agenda also prioritized
                        deregulation, particularly in energy and manufacturing,
                        with the goal of making U.S. industries more competitive.
                        <br/>
                        <img src={Image1} className="image-in-blog2" alt="Blog content"/>
                        <br/>

                        <h3>Soaring Stock Market</h3>
                        The stock market broke record after record between when Obama started his term and the pandemic in 2020.
                        While market indices like the S&P 500 took a nosedive during the early months of the pandemic, they recovered
                        and entered a bull market that lasted until 2022. The Dow Jones Industrial Average (DJIA) traded at 30,000 in
                        2020 and jumped 57% overall during Trump's term. 
                        <br/><br/>
                        <h3>Job Creation </h3>
                        By the end of Obama's presidency, the U.S. economy had seen 76 consecutive months of job growth,
                        and that streak continued into Trump's presidency. In 2019, the unemployment rate fell to its lowest
                        level in 50 years, 3.5%. The low unemployment rate persisted until February 2020, when the pandemic
                        hit. Wage growth also increased in 2018 and 2019.
                        <br/><br/>
                        <h3>Trade Wars and Tariffs</h3>
                        Trump's trade policies included implementing tariffs on trading partners like Canada, China, Mexico,
                        and the European Union. The administration said tariffs would benefit American workers, give the U.S.
                        leverage for future trade agreements, and protect national security.

                        <br/><br/>
                        <h3>Potential 2024 Policies</h3>
                        <ul>
                            <li><b>Tax Policy:</b> Trump is expected to <b>extend the tax cuts</b> and
                                potentially introduce new incentives for U.S.-based
                                manufacturing. While this could boost short-term growth, it
                                would likely also <b>increase the federal deficit</b>.
                            </li>
                            <li><b>Tariffs and Trade:</b> Trump’s “<b>America First</b>” policies were
                                marked by tariffs on imports, particularly from China. He
                                may impose a <b>60% tariff on Chinese goods</b>, potentially
                                raising prices for U.S. consumers but promoting domestic
                                manufacturing.
                            </li>
                            <li><b>Energy and Fossil Fuels:</b> Trump's administration favored <b>fossil fuels</b> over renewable energy sources,
                                leading to an energy boom in the U.S., but creating tensions with countries that are pushing for greener
                                alternatives.
                            </li>
                        </ul>

                        <img src={Image3} className="image-in-blog2" alt="Blog content"/>
                        <br/>

                        <h3>The Global Impact of Trump’s Policies</h3>
                        <ul>
                            <li>
                                <b>Higher tarrifs </b>on Chinese goods and other foreign imports could disrupt global supply chains and
                                force countries like China to seek alternative markets for their goods, particularly affecting countries
                                that rely heavily on U.S. imports (like Brazil or Mexico).
                            </li>
                            <li>
                                <b>Geopolitical tensions </b> could escalate due to Trump’s isolationist stance, with trade wars intensifying
                                and global alliances being tested.
                            </li>
                            <li>
                                <b>Emerging economies </b>—particularly those in Asia and Latin America—could feel the strain as the U.S.
                                becomes more protectionist, potentially making it harder for developing nations to access U.S. markets.
                            </li>
                        </ul><br/>
                        
                        <h3>Harris’s Economic Agenda: A Focus on Equity, Sustainability, and Global Cooperation</h3>
                        Kamala Harris’s economic policies focus on reducing
                        income inequality, promoting green energy, and expanding
                        social safety nets. In 2024, she would likely raise the
                        corporate tax rate to 28%, implement wealth taxes on the
                        ultra-wealthy, and increase government spending on
                        healthcare, housing, and education.

                        <img src={Image2} className="image-in-blog2" alt="Blog content"/>

                        <br/>
                        <h3>Economic Policies and Middle-Class Focus</h3>
                        <b>Housing:</b> Harris planned to boost homeownership with $25,000 in down payment assistance and a
                        $10,000 tax credit for first-time buyers, though these measures could have added $100 billion to the
                        federal deficit over a decade.
                        <br/>
                        <b>Minimum Wage:</b> Harris proposed raising the federal minimum wage, which would have increased
                        workers' buying power but raised labor costs for businesses.
                        <br/>
                        <b>Price Controls:</b> She supported banning price gouging for essential goods to curb inflation, contrasting
                        with the market-driven approach of the current administration.
 
                        <br/><br/>

                        <h3>Healthcare Reforms</h3>
                        <b>Lowering Costs:</b> Harris aimed to negotiate drug prices, cap out-of-pocket expenses, and expand
                        Medicare services, though these policies would have increased government spending.
                        <br/>
                        <b>Family and Senior Benefits: </b>Her plan included expanded tax credits for families and enhanced
                        healthcare for seniors, funded by higher taxes on corporations and high-income earners.

 
                        <br/><br/>

                        <h3>Tax Reforms</h3>
                        <b>Higher Taxes on Corporations and the Wealthy:</b> Harris proposed raising corporate tax
                        rates to 28%, increasing capital gains taxes, and introducing a wealth tax on the ultra-rich to
                        fund social programs.
                        <br/>
                        <b>Selective Tariffs:</b> She favoured moderate protectionism, keeping strategic tariffs on China
                        but avoiding blanket tariffs like those under Trump.
 
                        <br/><br/>

                        <h2>Comparative Analysis - Trump’s Policies in Action vs. Harris’s Projected Policies</h2>
                        <CustomTable tableData={tableData1} />

                        <br/>

                        <h2>Global Development Impacts – Trump vs. Harris</h2>
                        <CustomTable tableData={tableData2} />

                        <br/>
                        <h3>Fascinating Insights</h3>
                        Trump and Harris took almost opposite approaches to achieve the common goal of increasing the economy:
                        <br/>
                        <b>Trump: </b> reduced the corporate tax rate
                        from 35% to 21% to incentivize
                        corporations to invest in the U.S. and
                        create jobs. This tax cut initially spurred
                        stock buybacks and some capital
                        investments, giving a short-term boost to
                        the economy.
                        <br/>
                        <b>Harris (via Biden):</b> advocated for raising
                        the corporate tax rate back up to 28%,
                        arguing that this will fund critical
                        infrastructure projects and social
                        programs, thereby creating long-term
                        economic benefits and reducing income inequality.
                        <br/>
                        <img src={Image6} className="image-in-blog2" alt="Blog content"/>
                        This contrast highlights two fundamentally different approaches: <b>Trump’s focus on immediate private sector
                        incentives</b> versus <b>Harris’s emphasis on long-term public investment</b> through corporate contributions, both
                        intended to fuel economic growth but through different ways.

                        <br/><br/>

                        <h3>Conclusion: The Future of Global Economic Growth.</h3>
                        The 2024 U.S. election presents two distinct visions for the future of the global economy. Trump’s policies could
                        lead to <b>short-term growth</b> driven by deregulation, tax cuts, and protectionist trade practices. However, these
                        policies may increase <b>global economic volatility</b> and strain international relations. On the other hand, Harris’s
                        approach could foster <b>long-term stability</b> through global cooperation, green investments, and more
                        progressive social reforms.

                        <br/>
                        Ultimately, the path the U.S. takes will depend on whether global markets prioritize immediate gains or
                        longterm sustainable growth. For businesses and economies worldwide, the outcome of this election will shape
                        strategies, investments, and relationships for years to come.
                        
                    </p>
                </div>
            </div>
        </div>
  );
};

export default USelection;
