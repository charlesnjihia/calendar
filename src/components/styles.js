import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderColor:'#7743CE',
    borderWidth:1,
    marginTop:5,
    height:50,
    borderRadius:3,
    
  },
  
  
  
  timeHolder:{
   color:'#7743CE',
   fontSize:14,
   width:80,
   justifyContent:'space-between',
      
      
  },
  appointsInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 3,
    marginLeft:20,
    width: 150,    
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  saveText:{ 
  width:60,
  padding:5,
  color:'#FFFFFF',
  fontWeight:'bold'
  },
  modalContainer:{
      flex:1,
      justifyContent: 'flex-start',
      backgroundColor:'#FFFFFF',
      alignItems: 'stretch',
      },
  modalHeader:{
      flexDirection:'row',
      backgroundColor:'#7743CE',
      height:50,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft:5
      },
  modalBody:{
      flex:1,
      marginHorizontal:0,
      borderRadius:3,
      justifyContent: 'flex-start',
      backgroundColor:'#ffffff',
      alignItems: 'stretch',
      borderWidth:1,
      paddingTop:10
      },
 timeFromHolder:{
     borderColor:'#E8E8FF',
     borderBottomWidth:1,
     paddingHorizontal:10 
     },
  timeToholder:{
      flexDirection:'row',
      alignItems:'center'
      },
  taskHolder:{
      flexDirection:'row',
      alignItems:'center',
      borderColor:'#E8E8FF',
      borderBottomWidth:1,
      paddingHorizontal:10,
      paddingVertical:5,
      },
  containerTodo: {
    flex: 1,
    padding:5,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderColor:'#7743CE',
    borderWidth:1,
    marginTop:5,
    height:50,
    borderRadius:3,
    
  },
  timeHolderTodo:{
   color:'#7743CE',
   fontSize:14,
   width:80,
   justifyContent:'space-between',
      
      
  }
  
});

export default styles;
