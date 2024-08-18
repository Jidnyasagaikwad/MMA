import "./PlayerCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const PlayerCard = () => {
  return (
    <div classname="player-container">
        <h1 className="player-heading">G.O.A.T.s</h1>
        <div className="player-container">
            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/FIGUEIREDO_DEIVESON_L_04-13.png?itok=F5dM8zkp" alt="player"/>
                <h2 className="player-name">Deiveson Figueiredo</h2>
                <p class = "cb">21-3-1, Featherweight (145 lbs)</p>
                <div className="player-details">
                    <p>
                    Figueiredo, from Brazil, is known for his powerful and aggressive fighting style, often finishing fights with his striking or submissions. He gained significant attention with his thrilling bouts and quick finishes, including a memorable fight with Brandon Moreno that earned both fighters Fight of the Year honors. His ability to end fights early and his fierce approach make him a standout in the flyweight division.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Deiveson_Figueiredo" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/kevin-de-bruyne/profil/spieler/88755" className="btn2">Market</NavLink>
                </div>
            </div> 
            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-07/MORENO_BRANDON_L_06-12.png?itok=-Gi9L7O0" alt="player"/>
                <h2 className="player-name">Brandon Moreno</h2>
                <p class = "cb">21-7-2, Flyweight (125 lbs)</p>
                <div className="player-details">
                    <p>
                    Moreno, from Mexico, is celebrated for his tenacity, technical skill, and adaptability. His journey from being cut from the UFC to winning the flyweight title is a remarkable story of perseverance. Known for his excellent grappling and striking, Moreno’s fights are characterized by his ability to come back from adversity and execute well-rounded game plans.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Brandon_Moreno" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/erling-haaland/leistungsdaten/spieler/418560" className="btn2">Market</NavLink>
                </div>
            </div> 

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/STERLING_ALJAMAIN_L_04-13.png?itok=T1vPSqkE" alt="player"/>
                <h2 className="player-name">Aljamain Sterling</h2>
                <p class = "cb">23-3, Bantamweight (135 lbs)</p>
                <div className="player-details">
                    <p>
                    Sterling is renowned for his high-level Brazilian Jiu-Jitsu and wrestling. He has a unique blend of grappling and striking that allows him to control fights on the ground and in the stand-up game. Sterling’s ability to implement complex submission techniques and maintain a high pace makes him a versatile and dangerous bantamweight contender.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Aljamain_Sterling" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/bernardo-silva/profil/spieler/241641" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-06/CEJUDO_HENRY_L_05-06.png?itok=xgRWorSO" alt="player"/>
                <h2 className="player-name">Henry Cejudo</h2>
                <p class = "cb">16-2, Bantamweight (135 lbs)</p>
                <div className="player-details">
                    <p>
                    Cejudo is a decorated athlete with an Olympic gold medal in wrestling and UFC championships in both the flyweight and bantamweight divisions. His wrestling base is complemented by rapid improvements in striking, making him a well-rounded and formidable fighter. Cejudo’s drive and ability to adapt have solidified his legacy as one of the best in MMA.

                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Henry_Cejudo" className="btn">Wikipedia</NavLink>
                    <NavLink to="]https://www.transfermarkt.co.in/ilkay-gundogan/profil/spieler/53622" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-02/VOLKANOVSKI_ALEXANDER_L_02-17.png?itok=Vu9a3K_h" alt="player"/>
                <h2 className="player-name">Alexander Volkanovski</h2>
                <p class = "cb">26-2, Featherweight (145 lbs)</p>
                <div className="player-details">
                    <p>
                    Volkanovski is known for his high-volume striking, exceptional cardio, and strategic approach. As the reigning featherweight champion, he combines his striking with strong wrestling to neutralize opponents. His ability to make adjustments mid-fight and his relentless pace make him one of the most effective fighters in the featherweight division.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Alexander_Volkanovski" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/riyad-mahrez/profil/spieler/171424" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=U9IB8OUQ" alt="player"/>
                <h2 className="player-name">Max Holloway</h2>
                <p class = "cb">30-8, Featherweight (145 lbs)</p>
                <div className="player-details">
                    <p>
                    Holloway, also known as "Blessed," is renowned for his relentless pace and striking volume. He holds the record for most significant strikes landed in a UFC fight and is known for his durability and heart. Holloway’s fighting style is characterized by his ability to overwhelm opponents with high-output striking and never-ending energy.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Max_Holloway" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/phil-foden/profil/spieler/406635" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/image/fighter_images/Khabib_Nurmagomedov/1NURMAGOMEDOV_KHABIB_L.png?itok=MDKzcpwv" alt="player"/>
                <h2 className="player-name">Khabib Nurmagomedov</h2>
                <p class = "cb">29-0, Lightweight (155 lbs)</p>
                <div className="player-details">
                    <p>
                    Khabib is renowned for his undefeated record and exceptional grappling skills. As the former UFC lightweight champion, he was known for his dominant wrestling and control, which allowed him to neutralize opponents effectively. Khabib's career was marked by his undefeated streak and his ability to implement a strategic ground game.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Khabib_Nurmagomedov" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/jack-grealish/profil/spieler/203460" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=xbg9Kwfj" alt="player"/>
                <h2 className="player-name">Conor McGregor</h2>
                <p class = "cb">22-6, Lightweight (155 lbs)</p>
                <div className="player-details">
                    <p>
                    McGregor is known for his charismatic personality and knockout power. He became the first fighter in UFC history to hold titles in two weight classes simultaneously (featherweight and lightweight). His striking ability, along with his marketability and memorable fights, has made him one of the most famous and influential figures in MMA history.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Conor_McGregor" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/julian-alvarez/profil/spieler/576024" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-10/USMAN_KAMARU_L_10-21.png?itok=DR9KNML9" alt="player"/>
                <h2 className="player-name">Kamaru Usman</h2>
                <p class = "cb">20-3, Welterweight (170 lbs)</p>
                <div className="player-details">
                    <p>
                    Usman, known as "The Nigerian Nightmare," is a former UFC welterweight champion with a dominant wrestling base and powerful striking. His ability to control fights with his wrestling and improve his striking has made him a formidable champion. Usman’s skill set and performance in the octagon have established him as one of the best welterweights in MMA history.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Kamaru_Usman" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/rodri/profil/spieler/357565" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-01/COVINGTON_COLBY_L_12-16.png?itok=ZZQXRVga" alt="player"/>
                <h2 className="player-name">Colby Covington</h2>
                <p class = "cb">17-3, Welterweight (170 lbs)</p>
                <div className="player-details">
                    <p>
                    Covington is known for his relentless wrestling and high-pressure fighting style. His ability to maintain a high pace and implement effective wrestling tactics make him a challenging opponent. Covington’s persona and fight style have earned him both fans and detractors, but his skill and persistence are undeniable.

                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Colby_Covington" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/kalvin-phillips/profil/spieler/351749" className="btn2">Market</NavLink>
                </div>
            </div>


            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-09/ADESANYA_ISRAEL_L_04-08.png?itok=FOMzxCwD" alt="player"/>
                <h2 className="player-name">Israel Adesanya</h2>
                <p class = "cb">24-2, Middleweight (185 lbs)</p>
                <div className="player-details">
                    <p>
                    Adesanya, known as "The Last Stylebender," is the UFC middleweight champion renowned for his striking technique, movement, and fight IQ. His striking is precise and technical, with a striking defense that allows him to avoid significant damage while landing clean, effective shots. Adesanya’s innovative approach and ability to read opponents make him a dominant force in the division.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Israel_Adesanya" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/manuel-akanji/profil/spieler/284730" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-07/WHITTAKER_ROBERT_L_06-22.png?itok=5F4FFhTb" alt="player"/>
                <h2 className="player-name">Robert Whittaker</h2>
                <p class = "cb">25-7, Middleweight (185 lbs)</p>
                <div className="player-details">
                    <p>
                    Whittaker is known for his well-rounded skill set, including striking, wrestling, and durability. As a former middleweight champion, he combines technical striking with effective grappling to control fights. Whittaker’s ability to adapt and his resilience in high-pressure situations have solidified his position as a top competitor in the middleweight division.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Robert_Whittaker" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/nathan-ake/profil/spieler/177476" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-06/HILL_JAMAHAL_L_04-13.png?itok=Y9NL1N3T" alt="player"/>
                <h2 className="player-name">Jamahal Hill</h2>
                <p class = "cb">13-1, Light Heavyweight (205 lbs)</p>
                <div className="player-details">
                    <p>
                    Hill, known for his knockout power and striking, has rapidly risen through the light heavyweight ranks. His aggressive style and striking ability have made him a prominent figure in the division. Hill’s performances in the UFC showcase his potential and growing skill set.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Jamahal_Hill" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/ruben-dias/profil/spieler/258004" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2022-05/812dc71b-2116-4b24-bd64-78e8b42447f7%252FBLACHOWICZ_JAN_L_05-14.png?itok=NA_McbC9" alt="player"/>
                <h2 className="player-name">Jan Błachowicz</h2>
                <p class = "cb">29-10, Light Heavyweight (205 lbs)</p>
                <div className="player-details">
                    <p>
                    Błachowicz, a former UFC light heavyweight champion, is known for his powerful striking and well-rounded game. His knockout power and experience in the division have earned him notable victories and a championship belt. Błachowicz’s strategic approach and ability to execute his game plan make him a formidable opponent.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Jan_Błachowicz" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/john-stones/profil/spieler/186590" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm" alt="player"/>
                <h2 className="player-name">Jon Jones</h2>
                <p class = "cb">27-1, Heavyweight (205 lbs)</p>
                <div className="player-details">
                    <p>
                    Jon Jones is widely regarded as one of the greatest MMA fighters of all time. Known for his versatile skill set, including striking, grappling, and fight IQ, Jones dominated the UFC light heavyweight division for many years before moving up to heavyweight. His ability to adapt and overcome various opponents has solidified his legendary status in the sport.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Jon_Jones" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/aymeric-laporte/profil/spieler/176553" className="btn2">Market</NavLink>
                </div>
            </div>

            <div className="player-card">
                <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2020-03/MIOCIC_STIPE_L.png?itok=tBa8SpCC" alt="player"/>
                <h2 className="player-name">Stipe Miocic</h2>
                <p class = "cb">27-1, Heavyweight (205 lbs)</p>
                <div className="player-details">
                    <p>
                    Miocic, a former UFC heavyweight champion, is known for his well-rounded abilities, including striking, wrestling, and durability. His strategic approach and ability to adapt during fights have earned him multiple title defenses and a respected place in the heavyweight division. Miocic’s combination of skills and experience makes him one of the top heavyweights in MMA history.
                    </p>
                </div>
                <div className="player-button">
                    <NavLink to="https://en.wikipedia.org/wiki/Stipe_Miocic" className="btn">Wikipedia</NavLink>
                    <NavLink to="https://www.transfermarkt.co.in/kyle-walker/profil/spieler/95424" className="btn2">Market</NavLink>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PlayerCard
