/**
 * Todos.js to show a list of todos for selected day
 
 */

import React, { Component } from 'react';
import { View,StyleSheet,FlatList,Text } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';


export default class Todos extends Component{

_keyExtractor = item => ''+item.id;    
    
_renderItem = ({ item }) => {
    return (
    <View style={styles.containerTodo}>
    <Text style={styles.timeHolderTodo}>{item.timeFrom}-{item.timeTo} : </Text><Text>{item.task}</Text>
    </View>
    
    );

};    
    
    
    
  render() {
    return (
       <FlatList
        style={{ flex: 1 }}
        data={this.props.todos}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}


Todos.propTypes={
 todos:PropTypes.array   
    
};

