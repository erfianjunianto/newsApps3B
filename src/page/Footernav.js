import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, View, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Footernav extends Component {
  render() {
    return (
      
        <Footer>
            <FooterTab>
            <Button onPress={()=>{Actions.home()}}>
                <Icon name="home" />
            </Button>
            <Button onPress={()=>{Actions.profile()}}>
                <Icon name="person" />
            </Button>
            <Button>
                <Icon type="FontAwesome" name="gear" />
            </Button>
            </FooterTab>
        </Footer>
          
        
    );
  }
}