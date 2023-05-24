/*
todo: {
id: 2244242455
description: "Aprender Php"
done: 
}
*/

export const todoReducer = (intialState, action) => {

    switch (action.type) {
    case "Add Todo":
        return [...intialState, action.payload]
    case "Delete Todo":
        return intialState.filter(todo => todo.id !== action.payload)
     case "Complete Todo":
         return intialState.map(todo => {
            if(todo.id === action.payload){
            return {
            ...todo,
            done:!todo.done
            }
            }
            return todo;

        
        
        });

         case "Update Todo":
            return intialState.map(todo => {
            if(todo.id === action.payload.id){
            return {
            ...todo,
            description: action.payload.description
            }
            }
            return todo;

        
        
        });
        
        
        
        default:
            return intialState
    
    
    
    }







}