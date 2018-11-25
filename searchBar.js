import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet,
  View,
  TextInput,
} from 'react-native'

  export class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          text: 'some stuff',
          array: [
            {
              key: 'a',
              value: 'buy milk',
            },
            {
              key: 'b',
              value: 'buy coke',
            },
            {
              key: 'c',
              value: 'buy strawberry',
            },
          ],
          result: [],
        }
        this.onChangeText = this.onChangeText.bind(this)
      }
    
      sortedResult(array, text) {
        let result = array.filter((item) => {
            const key = item.key.toUpperCase()
            const value = item.value.toUpperCase()
            const content = text.toUpperCase()
            return key.includes(content) || value.includes(content)
        })
        return JSON.stringify(result)
      }
    
    
      onChangeText(text) {
        const { array } = this.state
        const result = this.sortedResult(array,text)
        this.setState({
          text,
          result,
        })
      }
    
      render(){
        
        return(
          <View style={styles.container}>
            <TextInput 
            onChangeText={this.onChangeText}
            style={styles.searchBar}
            value={this.state.text} 
            />
            <Text>{this.state.result}</Text>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    searchBar: {
      height: 40,
      borderWidth: 2,
      borderColor: 'grey',
      margin: 50,
      alignSelf: 'stretch',
    }
})