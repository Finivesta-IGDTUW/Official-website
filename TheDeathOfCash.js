import React from "react";
import "./blogpage.css";

import CashUpi from "./blog-images/cash-upi.png";
import UPIdata from './blog-images/upi-data.png';


const TheDeathOfCash = () => {
  return (
        <div>
            <div className="blog-page-box">
                <div className="blog-header deathOfCash">
                <h1>The Death of Cash?</h1>
                <p>How Digital Payments Are Shaping the Future of Money?</p>
                <p>Blog written by <i>Khushi</i></p>
                </div>
                <div className="blog-para">
                    <p>
                    <img src={CashUpi} className="image-in-blog" alt="Finivesta blog Death of Cash"/>
                    Imagine a world where your wallet holds no cash—just numbers on a screen. 
                    Digital payments are reshaping how we pay, from street vendors to multinational 
                    businesses. But does this mean cash is disappearing for good? Let’s break it down.
                        <br/><br/>
                        <b>Why Digital Payments Are Winning?</b><br/>
                        <ul>
                        <li>Fast & Convenient – No more digging for change. A tap or scan completes a payment in seconds. In February 2025 alone, India’s UPI processed 16 billion transactions worth ₹21.96 trillion. </li>
                        <li>	Financial Inclusion – Mobile wallets like Kenya’s M-Pesa allow people without bank accounts to send and receive money securely.</li>
                        <li>	Cost & Efficiency – Managing cash is expensive. Countries like Sweden, where cash transactions make up less than 1% of GDP, are leading the shift away from cash. </li>
                        <li>	Security & Transparency – Digital payments reduce fraud and improve tax compliance. China’s digital yuan has already seen transactions exceeding $987 billion.</li>
</ul>
                        <br/><br/>
                        <h3>
                        Why Cash Isn’t Dead Yet?
                        </h3>
                        <ul>
                            
                            <li>
                                <b>	Fraud & Cybersecurity Risks : </b><br/>
                                Digital payment fraud is rising. In 2024, businesses lost <b> $40 billion to fraud, with crypto-related scams alone causing losses of $5.6 billion. </b>
                            </li>
                            
                            <li>
                                <b>Privacy Concerns : </b><br/>
                                Unlike cash, every digital transaction is traceable, raising concerns over surveillance.
                                </li>
                            
                            <li>
                                <b>Technical Barriers :</b><br/>
                                Power outages and poor internet access mean digital payments aren’t always reliable, especially in rural areas.
                                </li>
                                <li>
                                <b>Cultural Preference  :</b><br/>
                                Germany still conducts 60% of transactions in cash, and Japan maintains a strong cash culture. 
                                </li>
                        </ul>
                        <br/>
                        <h3>
                        India’s UPI Boom
                        </h3>
                        <img src={UPIdata} className="image-in-blog" alt="Finivesta blog Death of Cash"/>
                        <ul>
                            <li>
                            Massive Growth – From <b>17.9 million transactions in 2017 </b> to <b>116 billion in 2025</b>, 
                            UPI has transformed how Indians pay. UPI has transformed how Indians pay.
                            </li>
                            <li>
                            <b>	State-Wise Trends – </b> Maharashtra, Karnataka, and Delhi lead in UPI adoption, while Bihar and Odisha are catching up.
                            </li>
                            <li>
                            <b>Small Business Impact – </b>Millions of street vendors now accept UPI, making transactions faster and reducing dependency on cash. 
                            </li>
                            
                        </ul>
                        <br/>
                        <b>Why Japan & Germany Still Rely on Cash?</b>
                        <ul>
<li>Security & Stability – Many people trust cash in uncertain times.</li>
<li>Tangible Control – Older generations prefer physical money over digital transactions.</li>
<li>	Government Stance – Japan ensures easy cash access for its aging population, while Germany’s strict data privacy laws slow digital adoption. </li>
</ul> <br/><br/>
<b>The Future: A Balanced Approach</b>
<ul>
<li>	Rise of CBDCs – 134 countries, covering 98% of the global economy, are exploring digital currencies like India’s e-Rupee. </li>
<li>	Crypto’s Evolving Role – While Bitcoin and Ethereum are shaping digital finance, security and regulation challenges remain.</li>
<li>Cash & Digital Coexistence – Even in tech-forward nations like Sweden, cash remains a backup option for security reasons. </li>
</ul>
<br/><br/>
<b>The Verdict: Cash or Digital?</b>
Cash isn’t disappearing overnight—it still offers privacy, security, and reliability in emergencies. But digital payments are the future, providing speed, convenience, and efficiency.
So, do you prefer the simplicity of a QR scan, or is cash still king in your world?


                    </p>
                </div>
            </div>
        </div>
  );
};

export default TheDeathOfCash;