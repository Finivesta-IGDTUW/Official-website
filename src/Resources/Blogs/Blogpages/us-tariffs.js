import React from "react";
import "./blogpage.css";

import tariff from "./blog-images/tariff.jpg";

const UStariffs = () => {
    return (
        <div className="blog-page-box">
            <div className="blog-header ustariff">
                <h1>The U.S. vs. The World (Again)</h1>
                <p>What’s Behind America’s New Tariff War?</p>
            </div>
            <div className="blog-para">
                <p>When Trump promised an economic shift in the 2024 American elections the people voted because the promise of cheaper groceries and everyday items was- well, promising. Fast forward almost a year since the elections were held, the prices of everyday items have not decreased and the everyday citizen living pay check to pay check thinks twice before buying items of leisure and need. One of the biggest things that came out of the 2024 election after math was the brush off of what are tariffs and how they work. 
                    <br/><br/>
                    Trump returned to the limelight promising that America would be “great again,” but this time with a firmer hand and a global economy on edge. 
                    At the heart of his strategy: tariffs.
                    <br/><br/>
                    Not just the odd levy here or there, but sweeping import taxes across the board, deployed as tools of both economics and geopolitics. The people were told “you’ll pay less, you’ll get more jobs, we’ll bring back manufacturing”. But in truth, what has played out is far more complicated and for the everyday American, less comforting.
                    <br/><br/>
                    A tariff levied on a country basically means a tax or duty imposed on goods imported from that country. In simple terms, it makes foreign products more expensive when they enter the local market. Tariffs are usually meant to protect local manufacturers by giving them a price advantage over imported goods. If imported goods cost more, consumers are more likely to buy locally made products. This helps domestic industries grow, supports local jobs, and can reduce dependence on foreign markets. However, tariffs can also hurt international relations. When one country imposes tariffs, the other often retaliates with its own tariffs. This can strain diplomatic ties, increase global market instability, and hurt both economies involved. Additionally, tariffs may lead to higher prices for everyday consumers, since importers often pass the added costs down the supply chain.
                    <br/><br/>
                    <img src={tariff} className="image-in-blog" alt="Finivesta blog US Tariffs" style={{float: 'right', margin:'0px 0px 10px 40px'}} />
                    <b>Here’s an overview of major tariffs and threatened trade actions by Donald Trump since his return to the White House:</b>
                    <ul>
                        <li>25 % tariff on heavy trucks</li>
                        <li>50 % tariffs on kitchen cabinets/ bathroom vanities</li>
                        <li>30 % tariff on upholstered furniture</li>
                        <li>Up to 100 % tariff on certain pharmaceuticals unless building U.S. facilities.</li>
                    </ul>
                    <br/>
                    <b>The impacts of the tariffs weren’t only on the countries it was levied on but also on the average US citizen as:</b>
                    <ul>
                        <li><b>Higher costs for consumers</b>: Tariffs raise import costs, which often get passed to U.S. consumers. For example, cars, furniture, everyday goods risk higher prices due to tariffs on inputs and finished goods.</li>
                        <li><b>Supply chain disruption</b>: U.S. manufacturers relying on imported components face higher input costs, which can reduce competitiveness or lead to production back-shifts.</li>
                        <li><b>Uncertainty for businesses</b>: The broad threats and frequent changes add volatility for companies engaged in trade or global supply chains.</li>
                        <li><b>Stock & business impacts</b>: Markets reacted and shares of U.S. steel companies rose ahead of tariff announcements. Broader market indices dipped when tariffs on Canada/Mexico were announced.</li>
                        <li><b>Trade agreement strains</b>: The tariffs challenge existing trade frameworks (e.g., United States–Mexico–Canada Agreement – USMCA) may force renegotiations and strained diplomatic ties </li>
                    </ul>
                    <br/>
                    <b>Impacts on Other Countries:</b>
                    <ul>
                        <li><b>Retaliation / countermeasures</b>: Countries hit by U.S. tariffs (or threatened by them) are responding. For example, China decried the U.S. 's “tariff pressure and blackmail” over fentanyl import issues.</li>
                        <li><b>Export losses</b>: Countries like India may face major export declines. Indian exports worth ~$85 billion are at risk under U.S. tariffs.</li>
                        <li><b>Trade diversion / supply chain shifts</b>: Affected countries may seek alternative markets or re-route the flow of goods to avoid tariffs, increasing complexity globally.</li>
                        <li><b>Economic risks in partner countries</b>: For example, Canadian, Mexican economies were warned about job losses and higher consumer prices due to U.S. tariffs against them.</li>
                        <li><b>Allied friction</b>: Some traditional U.S. allies and major partners (EU, Japan, South Korea) are being threatened with tariffs or are already impacted, raising diplomatic tensions.</li>
                        <li>The tariff policy is broad & aggressive, it covers not just traditional “problem sectors” but nearly all imports (via baseline tariff + country-specific sweep).</li>
                        <li>The rhetoric emphasises “reciprocity” and “fair trade,” but the practical effect so far is higher costs, not lower, for many consumers and businesses.</li>
                        <li>The timeline of effects is uneven as some sectors may benefit but many others will see cost increases or export risks.</li>
                        <li>Because the policies affect many countries, the global trade environment is becoming more fragmented, and supply chain risks are rising.</li>
                    </ul>
                    <br/>
                    The reason Trump introduced tariffs might have been to protect US manufacturing and goods but in the process he has managed to sour diplomatic ties and consumer- friendly prices that he promised are nowhere to be found.
                </p>
            </div>
        </div>
    );
};

export default UStariffs;