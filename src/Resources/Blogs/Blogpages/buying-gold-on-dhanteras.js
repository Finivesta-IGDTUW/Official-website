import React from "react";
import "./blogpage.css";

import Dhanvantari from "./blog-images/10_dhanvantari.jpg";
import Lakshmi from './blog-images/10_lakshmi.jpg';
import Yama from './blog-images/10_yama.jpg';

const GoldOnDhanteras = () => {
  return (
        <div>
            <div className="blog-page-box">
                <div className="blog-header gold-on-dhanteras">
                <h1>The Auspiciousness of Buying gold on Dhanteras</h1>
                <p>Unveiling the story behind the festival</p>
                <p>Blog written by <i>Jahnavi</i>, <i>Prathivya</i> and <i>Sachita</i></p>
                </div>
                <div className="blog-para">
                    <p>
                        Have you ever wondered why buying gold on Dhanteras is considered so
                        auspicious? This vibrant festival not only marks the beginning of Diwali
                        but also carries deep-rooted traditions and stories that enrich its significance.
                        <br/><br/>
                        <b>Dhanteras: A Celebration of Wealth and Health</b><br/>
                        The word ‘Dhanteras’ is a combination of <b>‘Dhan,’</b> meaning wealth, and
                        <b>‘Teras,’</b> which refers to the thirteenth day of the Hindu lunar calendar.
                        On this auspicious day, people across India indulge in <b>buying precious metals
                        like gold and silver</b>. But Dhanteras is not just about material wealth but
                        also spiritual and emotional richness. By welcoming <b>Goddess Lakshmi</b>, the
                        deity of wealth and prosperity, into their homes, families hope to bring
                        prosperity and positive energy for the year ahead. It’s a day of new beginnings,
                        where the glow of Diya’s signifies the dispelling of darkness and the
                        arrival of light and happiness.
                        <br/><br/>
                        <h3>
                            It has born from the divine emergence of Lord Dhanvantari and the blessings
                            of Goddess Lakshmi.
                        </h3>
                        <ol>
                            <img src={Dhanvantari} className="image-in-blog"/>
                            <li>
                                <b>Lord Dhanvantari's Appearance: </b><br/>
                                The day marks the appearance of Lord Dhanvantari, who is considered the
                                god of Ayurveda and health. According to legend, during the churning of
                                the ocean (Samudra Manthan) by the gods and demons to obtain the nectar
                                of immortality (amrit), Lord Dhanvantari emerged holding a pot of this
                                nectar along with various treasures, including gold.
                            </li>
                            <img src={Lakshmi} className="image-in-blog"/>
                            <li>
                                <b>Goddess Lakshmi: </b><br/>
                                The day is also associated with Goddess Lakshmi, who is worshipped for
                                wealth and prosperity. It is believed that on this day, she visits homes
                                to bless them with wealth. It is also believed that Goddess Lakshmi,
                                surfaced from the ocean of milk on the day of Dhanteras. 
                            </li>
                            <img src={Yama} className="image-in-blog"/>
                            <li>
                                <b>King Hima's Son:</b><br/>
                                Another popular story involves a king named Hima, whose son was predicted to 
                                die on his fourth day of marriage due to a snake bite. To protect him, his wife 
                                covered him with gold ornaments and lit a heap of lamps. When Yama, the god 
                                of death, came disguised as a serpent, he was dazzled by the light and the gold, 
                                which allowed the prince to escape death.
                            </li>
                        </ol>
                        <br/>
                        <h3>
                            Curious why buying gold on Dhanteras is more than just a tradition? Let’s 
                            uncover the sparkling reasons behind this age-old practice that promises
                            prosperity and good fortune
                        </h3>
                        <ul>
                            <li>
                                Buying gold on Dhanteras is a blend of <b>cultural tradition and financial investment</b>,
                                linked to the festival's auspiciousness. Increased rural demand and favourable
                                economic conditions are expected to drive purchases, as <b>gold symbolizes wealth</b> and
                                prosperity during the Diwali celebrations.
                            </li>
                            <li>
                                People buy gold on Dhanteras primarily due to its <b>auspiciousness</b>, as this
                                festival marks the beginning of Diwali and is believed to bring prosperity
                                and good fortune
                            </li>
                            <li>
                                Many people believe that buying precious metals like gold on Dhanteras ensures
                                the <b>blessings of the deities</b> and <b>wards off negative energies</b>.
                            </li>
                            <li>
                                Gold is also a secure financial saving, it is considered as a reliable and
                                enduring investment. Its value tends to appreciate over time, making it a <b>prized 
                                asset for wealth</b> generation. By purchasing gold on Dhanteras, individuals aim to
                                make prudent <b>financial decisions that can yield long-term benefits</b> through the
                                potential appreciation of gold’s value.
                            </li>
                            <li>
                                Moreover, many people believe that buying gold on <b>Dhanteras invokes the blessings
                                of Goddess Lakshmi</b>, the deity of wealth. By acquiring gold, devotees express their
                                reverence and <b>invite her grace into their homes</b>. It is also customary for families
                                to gift gold to one another, further <b>reinforcing bonds and sharing prosperity</b>.
                            </li>
                        </ul>
                        <br/>
                        <h3>Conclusion: More Than a Shopping Day</h3>
                        Dhanteras is more than a shopping occasion; it’s a celebration of hope, prosperity,
                        and cultural heritage. As we illuminate our homes this Dhanteras, we embrace
                        traditions that connect us to our past while guiding us toward a prosperous
                        future. This blend of mythology and modern practice makes Dhanteras a vibrant
                        reflection of our cultural identity.

                    </p>
                </div>
            </div>
        </div>
  );
};

export default GoldOnDhanteras;