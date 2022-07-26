import { Card } from 'react-native-paper';
import React from 'react'
import { ImageBackground, Text, View } from 'react-native';
import img from '../assets/img/lp.jpg'
export const colors = {
  primary: 'rgb(25, 118, 210)',
  success: 'rgb(46, 125, 50)'
}

export const ContainerElement = ({children}) => {
  return (
    <View>
      <ImageBackground source={img}>
        <View style={{flexDirection: 'column', height: '100%', justifyContent: 'center'}}>
          <Card style={{padding: 20, margin: 10, justifyContent: 'center', backgroundColor: '#fff'}} >
            { children }
          </Card>
        </View>
      </ImageBackground>
    </View>
  )
}

export const H1 = ({children}) => (
  <Text style={{color: 'black', fontSize: 25}} >{ children }</Text>
)