import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, H3 } from 'native-base';
import Isi from './Isi';
import Footernav from './Footernav';
import { Actions } from 'react-native-router-flux';
export default class Detail extends Component {
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
            <Title>NEWS DETAIL</Title>
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
            <View style={{fontSize:20, padding:10}}>
                <Text>
                    Populer
                </Text>
                <H3>
                    Mahasiswa Indonesia Turun ke Jalan
                </H3>

                <Text>
                {'\n'}Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                </Text>
            </View>
          
         
        </Content>

        <Footernav />
      </Container>
    );
  }
}