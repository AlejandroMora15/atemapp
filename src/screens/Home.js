import { Button, TextArea, e } from 'native-base';
import React, { useState } from 'react'
import { View } from 'react-native';
import { colors, ContainerElement, H1 } from '../constants/style'
import { useCValue } from '../hooks/useCValue';

export const Home = ({navigation}) => {
  const { extractTerms, isLoading } = useCValue()
  const [text, setText] = useState('');

  const handleExtract = async () => {
    const resp = await extractTerms(text)
    console.log(resp)
    if(resp)  navigation.navigate('Results', { ...resp })
  }

  return (
    <ContainerElement>
      <H1>Extraction from text</H1>
      <View style={{padding: 10}}/>
      <TextArea 
        h={40} 
        value={text} 
        placeholder="Insert a Corpus (max length must be less than 500000 chars)" 
        onChangeText={setText}
        style={{fontSize: 17}} 
      />
      <View style={{padding: 10}}/>
      <Button 
        isLoading={isLoading}
        onPress={handleExtract}
        colorScheme={colors.success}
      >EXTRACT TERMS FROM TEXT</Button>
      <View style={{padding: 5}}/>
      <Button 
        isLoading={isLoading}
        onPress={() => setText('')}
        colorScheme='red'
      >CLEAR INPUT TEXT</Button>
    </ContainerElement>
  )
}
