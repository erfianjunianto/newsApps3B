import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, H3 } from 'native-base';

export default class Notification extends Component {
  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>NOTIFICATION</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="Entypo" name='bell' />
            </Button>
          </Right>
        </Header>

        <Content>
          
          
        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
            <Button>
              <Icon type="FontAwesome" name="gear" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}