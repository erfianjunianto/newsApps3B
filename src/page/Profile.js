import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, H3 } from 'native-base';
import Footernav from './Footernav';

export default class Profile extends Component {
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
            <Title>PROFILE</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="Entypo" name='bell' />
            </Button>
          </Right>
        </Header>

        <Content>
          
          
        </Content>

        <Footernav />
      </Container>
    );
  }
}