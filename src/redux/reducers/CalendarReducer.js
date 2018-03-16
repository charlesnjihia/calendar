import{ 
SETDATE,
MODAL_OPEN,
MODAL_CLOSE,
TIMEFROMOPEN,
TIMEFROMCLOSED,
TIMETOOPEN,
TIMETOCLOSED,
SETTIMEFROM,
SETTIMETO,
SETTASK,
RESETTODO,
INCREMENTID ,
ADDTODO,
ONORIENTCHANGE              
}  from '../actions/types'

const initialState={
    todos:{},
    dateSelected:'',
    modalopen:false,
    timeFrom:'0.00',
    timeTo:'0.00',
    task:'add task...',
    timeFromVisible:false,
    timeToVisible:false,
    id:0,
    numDaysInWeek:5,  
}

export default(state=initialState,action)=> {
  switch(action.type){
   case SETDATE:
     return {...state,dateSelected:action.payload};   
   case MODAL_OPEN:
     return {...state,modalopen:true};
   case MODAL_CLOSE:
     return {...state,modalopen:false};
   case TIMEFROMOPEN:  
      return {...state,timeFromVisible:true,modalopen:false};
   case TIMEFROMCLOSED:  
      return {...state,modalopen:true,timeFromVisible:false};
   case TIMETOOPEN:  
      return {...state,timeToVisible:true,modalopen:false};
   case TIMETOCLOSED:  
      return {...state,modalopen:true,timeToVisible:false};
   case SETTIMEFROM:  
      return {...state,timeFrom:action.payload,modalopen:true,timeFromVisible:false};
   case SETTIMETO:  
      return {...state,timeTo:action.payload,modalopen:true,timeToVisible:false};
   case SETTASK:
      return {...state,task:action.payload};       
   case INCREMENTID:
    return {...state,id:action.payload};
   case RESETTODO:
      return {...state,timeFrom:'0.00',timeTo:'0.00',task:'add task...'}
   case ADDTODO: 
      return {...state,todos:action.payload}
   case ONORIENTCHANGE: 
      return {...state,numDaysInWeek:action.payload}   
   default:
      return state;
  }  
    
}

   
