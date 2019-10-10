import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content, Text, Card, CardItem, View, H3 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

export default class Isi extends Component {
  render() {
    return (
      
          <View style={{padding:10}}>
            
            <Card style={{marginBottom:10}}>
              <CardItem cardBody button onPress={()=>{Actions.detail()}}>
                <Grid style={{height:100}}>
                  <Col style={{width: "35%"}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null,flex: 1, borderRadius:0}}/>
                  </Col>
                  <Col>
                    <Body style={{padding:10}}>
                      <Text>Politik</Text>
                      <H3>Mahasiswa Indonesia Turun ke Jalan</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{marginBottom:10}}>
              <CardItem cardBody>
                <Grid style={{height:100}}>
                  <Col style={{width: "35%"}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null,flex: 1, borderRadius:0}}/>
                  </Col>
                  <Col>
                    <Body style={{padding:10}}>
                      <Text>Politik</Text>
                      <H3>Mahasiswa Indonesia Turun ke Jalan</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{marginBottom:10}}>
              <CardItem cardBody>
                <Grid style={{height:100}}>
                  <Col style={{width: "35%"}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null,flex: 1, borderRadius:0}}/>
                  </Col>
                  <Col>
                    <Body style={{padding:10}}>
                      <Text>Politik</Text>
                      <H3>Mahasiswa Indonesia Turun ke Jalan</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>

            <Card style={{marginBottom:10}}>
              <CardItem cardBody>
                <Grid style={{height:100}}>
                  <Col style={{width: "35%"}}>
                    <Image source={require('../images/beach.jpeg')} style={{height: 200, width: null,flex: 1, borderRadius:0}}/>
                  </Col>
                  <Col>
                    <Body style={{padding:10}}>
                      <Text>Politik</Text>
                      <H3>Mahasiswa Indonesia Turun ke Jalan</H3>
                    </Body>
                  </Col>
                </Grid>
              </CardItem>
            </Card>
            
          </View>
          
        
    );
  }
}