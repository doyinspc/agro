import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container, CardFooter
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div className="section section-basic" style={{padding:10}} id="basic-elements">
    <Container>
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={require("assets/img/A4.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>.</CardText>
          <CardFooter><Button>Button</Button></CardFooter>
          
        </CardBody>
        <CardImg top width="100%" src={require("assets/img/A4.jpg")} alt="Card image cap" />
      </Card>
      <Card>
        <CardImg top width="100%" src={require("assets/img/A5.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <CardFooter><Button>Button</Button></CardFooter>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require("assets/img/A7.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <CardFooter><Button>Button</Button></CardFooter>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={require("assets/img/ABLAW.jpg")} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText></CardText>
          <CardFooter><Button>Button</Button></CardFooter>
        </CardBody>
        <CardImg top width="100%" src={require("assets/img/A3.jpg")} alt="Card image cap" />
      </Card>
    </CardDeck>
    </Container>
    </div>
  );
};

export default Cards;