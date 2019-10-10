import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, H3 } from 'native-base';
import Isi from './Isi';
import Footernav from './Footernav';
import { Actions } from 'react-native-router-flux';
export default class Home extends Component {
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
            <Title>NEWS APPS</Title>
          </Body>
          <Right>
            <Button transparent onPress={()=>{Actions.notification()}}>
              <Icon type="Entypo" name='bell' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null,flex: 1, borderRadius:0}}/>
        
          {/* <Image source={{uri: 'https://cdn.pixabay.com/photo/2014/10/26/17/19/fishermen-504098__340.jpg'}} style={{height: 200, width: null,flex: 1}}/> */}
        
          <Text style={{fontSize:20, padding:10}}>
            Populer
          </Text>

          <Isi />
          
        </Content>

        <Footernav />
        
      </Container>
    );
  }
}