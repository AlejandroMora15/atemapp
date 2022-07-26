import { ScrollView, Text } from 'native-base'
import React from 'react'
import { ContainerElement, H1 } from '../constants/style'
import { DataTable } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export const Results = ({ route }) => {
  const  {length, terms, time} =  route.params
  console.log(length, terms, time)
  return (
    <ScrollView>
      <ContainerElement>
        <H1>Extraction from text</H1>
        <Text fontSize="lg">
          <Text bold>Corpus Length:</Text> {length} charset
        </Text>
        <Text fontSize="lg">
          <Text bold>Number of terms:</Text> {terms?.length} terms
        </Text>
        <Text fontSize="lg">
          <Text bold>Execution time: </Text> {parseFloat(time).toPrecision(4)} seg
        </Text>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Term</DataTable.Title>
              <DataTable.Title numeric>Score</DataTable.Title>
            </DataTable.Header>

            { terms?.map( e => 
              <DataTable.Row>
                <DataTable.Cell>{ e?.text }</DataTable.Cell>
                <DataTable.Cell numeric>{ parseFloat(e?.value).toPrecision(2) }</DataTable.Cell>
              </DataTable.Row>
            )}

          </DataTable>
        </View>
      </ContainerElement>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    fontSize: 45,
    marginTop: 20
  },
});