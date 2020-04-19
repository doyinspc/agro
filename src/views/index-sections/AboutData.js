import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Logo from "assets/img/logo.png";
// core components

function AboutData(props) {
  return (
    <>
      <div className="section" style={{padding:10,}}>
        <Container className="text-left">
          <Row >
            <p> <img left src={Logo} width={160} height={140} align='left' style={{padding:5}} />The company, Awa Agro-Allied Nigeria Limited is an emerging agro-allied and agribusiness venture in Nigeria with official address at No 36 Fountain Street Gonin-gora Federal Housing Estate, Kaduna, Kaduna State, Nigeria. The idea of its establishment was conceived on 7th June, 2017 by NyiitamenMsugh Moses and was co-nurtured and founded by Kaduna Stephen Aondosoo, a friend and classmate at postgraduate school, Nigerian Defence Academy, Kaduna, Kaduna State, Nigeria and NyiitamenTerkula James, a brother and friend.</p>
            <p>The company was duly registered and incorporated by the Nigeria Corporate Affairs Commission (CAC) on 26th day of March, 2019 with registration number RC 1571756. To ensure compliance with laws guiding the Nigeria's business environment, the company had on 25th day of January, 2020 signed oath of allegiance with the Federal Government through Economic and Financial Crimes Commission (EFCC) against money laundering under the provision of Section 5(1)(a) and (4) of the Money Laundering (Prohibition) Act, 2011 and was certified by the Special Control Unit Against Money Laundering (SCUML) with the certificate number RN: SC 192100328.  
                Before its formal incorporation till date, the company has been in agribusiness operations with tremendous growth and development. </p>
           <p> The company currently deals in agro-allied products and services of sourcing, procurement and supply chain solutions in the Nigeria agriculture sector through local purchase, purifying, packaging, branding and supply of agricultural farm produce (crops and livestock) as well as trade in agro-based equipment and related services. </p>
            <p>Studies have shown that African continent is most agrarian and also, poorest people in the world are in Africa with farm in gas their pre-dominant means of livelihood. Living largely in the remote villages,farmers carryout farm operations on small and rarely medium scale by individual families. Awa Agro-allied Nigeria limited as a company is zealous of helping 
                local farmers in the region earn better returns from their farm operations with improved living standard by linking them with 
                urban as well as European markets through local purchase of farm produce and the supply of same as well as modern farm equipment. 
            In addition to the founders/Board of Directors,the company has engaged vast work force on both full and parttime base.</p>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutData;
