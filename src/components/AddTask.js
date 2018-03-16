/**
 * AddTask.js  to display modal for adding task
 
 */

import React, { Component } from 'react';
import { View,StyleSheet,Text,TextInput,TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import Modal from 'react-native-simple-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {toggleModal,addTodo,toggleTimeFrom,toggleTimeTo,onSetTask,incrementId,resetTodo} from '../redux/actions/calendarActions';
import {MODAL_CLOSE,TIMEFROMOPEN,TIMETOOPEN} from '../redux/actions/types';
import styles from './styles';

class AddTask extends Component{  
    
    
  render() {
    return (
    
        <Modal
            offset={0}
            overlayBackground={'rgba(0, 0, 0, 0.9)'}
            animationDuration={100}
            open={this.props.modalopen}
            modalDidClose={() => this.props.toggleModal(MODAL_CLOSE)}
            containerStyle={{flex:1,justifyContent: 'center',alignItems: 'stretch',padding:0}}
            modalStyle={{flex:1,alignItems: 'stretch',padding:0}}>
            
            <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity 
              onPress={()=>this.props.toggleModal(MODAL_CLOSE)}
              >
               <Icon name="close" color='#FFFFFF' size={30} /> 
              </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
              let todo={
                   id:this.props.id,
                   dateSelected:this.props.dateSelected,
                   timeFrom:this.props.timeFrom,
                   timeTo:this.props.timeTo,
                   task:this.props.task                   
                   }
               this.props.addTodo(this.props.todos,todo);
               this.props.toggleModal(MODAL_CLOSE);
               this.props.incrementId(this.props.id);
               this.props.resetTodo();
               }}>
           <Text style={styles.saveText}>SAVE</Text>
           </TouchableOpacity>
            
            </View>
            
            <View style={styles.modalBody}>
           <View style={styles.timeFromHolder}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{width:30,alignItems:'center'}}>
               <Icon name="schedule" color='#C0C0C0' size={25} /> 
              </View>
              <TouchableOpacity 
              onPress={()=>{this.props.toggleTimeFrom(TIMEFROMOPEN)}}>
              <TextInput 
               editable={false}
               style={styles.appointsInput}
               placeholder={this.props.timeFrom}>
              </TextInput>
             </TouchableOpacity >

           </View>
           
           <View style={styles.timeToholder}>
              <View style={{width:30,alignItems:'center'}}></View>
              <TouchableOpacity 
              onPress={()=>this.props.toggleTimeTo(TIMETOOPEN)}>
              <TextInput 
               editable={false}
               style={styles.appointsInput}
               placeholder={this.props.timeTo}>
              </TextInput>
              </TouchableOpacity >
           </View>   

           </View>
          <View style={styles.taskHolder}>
              <View style={{width:30,alignItems:'center'}}></View>
              
              <TextInput 
              editable={true}
              style={styles.appointsInput}
              placeholder={this.props.task}
              onChangeText={(text)=>this.props.onSetTask(text)}  ></TextInput>
             

           </View>
           </View>                    
          </View>
        </Modal>
        
        
     
    );
  }
}



AddTask.propTypes={
 todos:PropTypes.object,
 modalopen:PropTypes.bool,
 timeFrom:PropTypes.string,
 timeTo:PropTypes.string,
 openDateFrom:PropTypes.bool,
 openDateTo:PropTypes.bool,
 task:PropTypes.string,
 dateSelected:PropTypes.string,
 toggleModal:PropTypes.func,  
 onSetTask:PropTypes.func,
 addTodo:PropTypes.func,
 toggleModal:PropTypes.func,
 toggleTimeFrom:PropTypes.func,
 toggleTimeTo:PropTypes.func,
 incrementId:PropTypes.func,
 resetTodo:PropTypes.func
};

mapStateToProps=(state)=>{
 return{
 id:state.id,
 todos:state.todos,
 modalopen:state.modalopen, 
 timeFrom:state.timeFrom,
 timeTo:state.timeTo,
 openDateFrom:state.openDateFrom,
 openDateTo:state.openDateTo,
 task:state.task,
 dateSelected:state.dateSelected 
 } 
}
export default connect(mapStateToProps,{toggleModal,addTodo,toggleTimeFrom,toggleTimeTo,onSetTask,incrementId,resetTodo })(AddTask);
