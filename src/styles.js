import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  listContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCEE',
    paddingHorizontal:5,    
      
  },
  noTask:{
   color:'#7743CE',
   marginTop:10,
   marginLeft:10   
      
      
  },
  addAppButton: {
    width: 50,
    height: 50,
    position:'absolute',
    right:10,
    bottom:5,
    backgroundColor:'#7743CE',
    justifyContent: 'center',
     borderRadius: 25,
    alignItems: 'center',
  },
});
export default styles;
