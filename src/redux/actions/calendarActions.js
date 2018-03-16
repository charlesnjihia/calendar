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
INCREMENTID,
ADDTODO,
ONORIENTCHANGE 
}  from './types';
//set selected date on calendar date selected 
 export const onDateSelected=(datePassed=new Date())=>{   
   let month=(datePassed.getMonth()+1).toString();
    if (month.length==1){
     month="0"+month;   
    }     
    let date=(datePassed.getDate()).toString();
    if (date.length==1){
     date="0"+date;   
    }    
    var fullDate = datePassed.getFullYear()+'-'+month+'-'+date;
    
    console
    return {
     type:SETDATE,
     payload:fullDate
        
    }
   
      
  }
//open and close modal 
export const toggleModal=(userAction)=>{
 if(userAction===MODAL_OPEN){ 
 return{
    type:MODAL_OPEN
    } ;
 }else{
 return{
    type:MODAL_CLOSE
    } ;

 } 
} 
//open and close time from modal 
export const toggleTimeFrom=(userAction)=>{
 if(userAction===TIMEFROMOPEN){ 
 return{
    type:TIMEFROMOPEN
    } ;
 }else{
 return{
    type:TIMEFROMCLOSED
    } ;

 } 
} 
//open and close time to modal 
export const toggleTimeTo=(userAction)=>{
 if(userAction===TIMETOOPEN){ 
 return{
    type:TIMETOOPEN
    } ;
 }else{
 return{
    type:TIMETOCLOSED
    } ;

 } 
} 
//on time from picked
export const  handleTimeFromPicked = (timePassed) => {
    let hours=timePassed.getHours().toString();
    if(hours.length==1){
      hours="0"+hours;     
    }
    let minutes=timePassed.getMinutes().toString();
    if(minutes.length==1){
      minutes="0"+minutes;     
    }
    let time = hours + "." + minutes;   
    
    return{
     type:SETTIMEFROM,
     payload:time     
        
    }  
  };
  
// set task from input field
export const onSetTask=(text)=>{
    return{
     type:SETTASK,
     payload:text     
        
    }     
      
  }
// on time to picked
export const handleTimeToPicked = (timePassed) => {
    let hours=timePassed.getHours().toString();
    if(hours.length==1){
      hours="0"+hours;     
    }
    let minutes=timePassed.getMinutes().toString();
    if(minutes.length==1){
      minutes="0"+minutes;     
    }
    let time = hours + "." + minutes;

    return{
     type:SETTIMETO,
     payload:time     
    }
    
    
  };
//increment todos ids  
export const incrementId=(id)=>{
    id++;
return {
   type:INCREMENTID,
   payload:id
}
}
//reset todo to default    
export const resetTodo=()=>{
return {
    type:RESETTODO   
}
}
    
  
// on add todo
export const addTodo=(todos,todo)=>{
      let tod={
        id:todo.id,
        timeFrom:todo.timeFrom,
        timeTo:todo.timeTo,
        task:todo.task   
     };   
         
      let {dateSelected}=todo;     
      if(todos.hasOwnProperty(dateSelected)){     
      todos[dateSelected]=[...todos[dateSelected],tod]; 
      }else{       
       todos[dateSelected]=[tod];  
          
      }
     
    return {
     type:ADDTODO,
     payload:todos
    }
}    


// on change orientation of phone
 export const changeDayNumbers=(numDays)=>{
  return {
    type:ONORIENTCHANGE,
    payload:numDays
  }  
     
 }









