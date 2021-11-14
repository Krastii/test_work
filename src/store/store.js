import { createStore } from 'redux';

const initialStore = {
    counters:[],
}

const reduser = (state = initialStore,action) => {
    switch (action.type){
        case 'ADD_COUNTER':{
            const value = state.counters.reduce((previousValue, item, index, array) => {
                return previousValue+item.value
              }, 0)
            const newCounter = {
                ...action.data,
                value
            }

            return{
                ...state,
                counters:[...state.counters,newCounter]
            }
        }
        case 'DELETE_COUNTER':{
            const newCounters = state.counters.filter( item => item.id !== action.id)
            return{
                ...state,
                counters:newCounters
            }
        }
        case 'CHANGE_COUNTER':{
            const newCounters = state.counters.map( item => {
                if(item.id === action.data.id){
                    return action.data;
                }
                return item;
            })
            return{
                ...state,
                counters:[...newCounters]
            }
        }
        case 'CHANGE_TIMER':{
            const newCounters = state.counters.map( item => {
                if(item.id === action.data.id){
                    
                    return {
                        ...item,
                        value:item.value+1
                    };
                }
                return item;
            })
            return{
                ...state,
                counters:[...newCounters]
            }
        }
        default:{
            return state;
        }
    }
}

export default createStore(reduser)