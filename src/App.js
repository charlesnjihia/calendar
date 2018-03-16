/**
 * App.js
 
 */

import React, { Component } from 'react';
import { View,StyleSheet,TouchableOpacity,FlatList,Text,TextInput,Dimensions } from 'react-native';
import CalendarStrip from "react-native-calendar-strip";
import Icon from 'react-native-vector-icons/MaterialIcons';

import Todos from './components/Todos';
import AddTask from './components/AddTask';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Orientation from 'react-native-orientation';
import {connect} from 'react-redux';
import styles from './styles';
import PropTypes from 'prop-types';
import {changeDayNumbers,onDateSelected,toggleModal,handleTimeFromPicked,handleTimeToPicked,toggleTimeFrom,toggleTimeTo } from './redux/actions/calendarActions';
import {MODAL_OPEN,TIMEFROMCLOSED,TIMETOCLOSED} from './redux/actions/types';

class App extends Component {    
   
componentWillMount(){
  //check if orientation landscape to set no. of days to 7
  var initial = Orientation.getInitialOrientation();
    if (initial === 'LANDSCAPE') {
     this.props.changeDayNumbers(7);
    }
    }   
   
componentDidMount(){
this.props.onDateSelected();
//trigger change of days on chenge to landscape or portrait
Dimensions.addEventListener('change', this.onDimensionChanged);
}
//on phone rotation
onDimensionChanged=({ window: { width, height } })=>{
if(width>height){  
this.props.changeDayNumbers(7);
}else{
this.props.changeDayNumbers(5);
}    
 
}
  render() {
    let {dateSelected}=this.props;
    return (
      <View style={styles.container}>
         <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
                    style={{height:100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#7743CE'}
                    numDaysInWeek={this.props.numDaysInWeek}
                    onDateSelected={(m)=>{this.props.onDateSelected(m._d)}}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    iconLeft={require('./img/left-arrow.png')}
                    iconRight={require('./img/right-arrow.png')}
                    iconContainer={{flex: 0.1}}
                   
                />
          <View style={styles.listContainer}>
          { this.props.todos[dateSelected] && this.props.todos[dateSelected].length>0 ?(
            <Todos todos={this.props.todos[dateSelected]}/>
            ):(
            <Text style={styles.noTask} > No task added!</Text>
            )
          }
          </View>
          <TouchableOpacity
          style={styles.addAppButton}
          onPress={()=>{this.props.toggleModal(MODAL_OPEN)}}
          >
          
          <Icon name="add" color='#FFFFFF' size={30} />
        </TouchableOpacity>
       <AddTask  />
        <DateTimePicker
          mode='time'
          isVisible={this.props.timeFromVisible}
          onConfirm={this.props.handleTimeFromPicked}
          onCancel={()=>this.props.toggleTimeFrom(TIMEFROMCLOSED)}
        />
        <DateTimePicker
          mode='time'
          isVisible={this.props.timeToVisible}
          onConfirm={this.props.handleTimeToPicked}
          onCancel={()=>this.props.toggleTimeTo(TIMETOCLOSED)}
        />
        
        </View>
    );
  }
}
App.propTypes={
todos:PropTypes.object,
dateSelected:PropTypes.string,
modalopen:PropTypes.bool,
timeFrom:PropTypes.string,
timeTo:PropTypes.string,
task:PropTypes.string,
timeFromVisible:PropTypes.bool,
timeToVisible:PropTypes.bool,
id:PropTypes.number,
numDaysInWeek:PropTypes.number,    
changeDayNumbers:PropTypes.func,
onDateSelected:PropTypes.func,
toggleModal:PropTypes.func,
handleTimeFromPicked:PropTypes.func,
handleTimeToPicked:PropTypes.func,
toggleTimeFrom:PropTypes.func,
toggleTimeTo:PropTypes.func    
    
}



mapStateToProps=(state)=>{
 return{
    todos:state.todos,
    dateSelected:state.dateSelected,
    modalopen:state.modalopen,
    timeFrom:state.timeFrom,
    timeTo:state.timeTo,
    task:state.task,
    timeFromVisible:state.timeFromVisible,
    timeToVisible:state.timeToVisible,
    id:state.id,
    numDaysInWeek:state.numDaysInWeek,
 } 
}
export default connect(mapStateToProps,{changeDayNumbers,onDateSelected,toggleModal,handleTimeFromPicked,handleTimeToPicked,toggleTimeFrom,toggleTimeTo })(App);