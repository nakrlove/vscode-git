import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top height="200px" src="https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fcdn.searchenginejournal.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fimage-search-1600-x-840-px-62c6dc4ff1eee-sej.png&imgrefurl=https%3A%2F%2Fwww.searchenginejournal.com%2Fbest-image-search-engines%2F299963%2F&tbnid=Pso-9ayGpy0KlM&vet=12ahUKEwjE-ZXijMz9AhX2yDQHHQSnBuQQMygDegUIARC7AQ..i&docid=faQEvyb6ULMOUM&w=1600&h=840&itg=1&q=image&ved=2ahUKEwjE-ZXijMz9AhX2yDQHHQSnBuQQMygDegUIARC7AQ" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
            <Button>버튼</Button>
          </CardBody>
        </Card>
      </div>
      )
  }
}

export default R040_ReactstrapCard;
