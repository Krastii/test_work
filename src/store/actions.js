
function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

const changeCounter = (dispatch) => {
    return{
        addCounter:(length)=>{
            const timerFlag = ((length+1)%4)?false:true;
            const id = randomNumber(0,10000)
            dispatch({
                type:'ADD_COUNTER',
                data:{
                    id,
                    timerFlag
                }
            })
            if(timerFlag){
                startTimer(id,dispatch)
            }
        },
        deleteCounter:(id)=>{
            dispatch({
                type:'DELETE_COUNTER',
                id
            })
        },
        changeValueCounter:(id,counterValue)=>{
            console.log(id,counterValue,'counterValue');
            dispatch({
                type:'CHANGE_COUNTER',
                data:{
                    id,
                    value:counterValue,
                    timerFlag:false
                }
            })
        }
        
    }
}



function startTimer(id,dispatch) {
    let newTimer = new AdjustingInterval((counterValue)=>{
        dispatch({
            type:'CHANGE_TIMER',
            data:{
                id
            }
        })
    },1000)
    newTimer.start()
}

function AdjustingInterval(workFunc, interval) {
    const that = this;
    let expected, timeout;
    this.interval = interval;
    let counter = 0

    this.start = function() {
        expected = Date.now() + this.interval;
        timeout = setTimeout(step, this.interval);
    }

    this.stop = function() {
        clearTimeout(timeout);
    }

    function step() {
        counter++;
        console.log(counter);
        let drift = Date.now() - expected;
        workFunc(counter);
        expected += that.interval;
        timeout = setTimeout(step, Math.max(0, that.interval-drift));
    }
}

export default changeCounter