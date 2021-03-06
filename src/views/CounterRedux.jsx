import { connect } from "react-redux" ;
import Login from './Login'

const CounterRedux = (props) => {
    console.log(props);

    return (
        <div>
            <Login></Login>
            <h1> Counter : {props.counter}</h1>
            <h1>{props.name}</h1>
          
            <button onClick={() => props.onIncrementCounter()}>Increment</button>
            <button onClick={() => props.onDecrementCounter()}>Decrement</button> 
        
           
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        // counter: state.counter,
        // name: state.name,
        tes: state.tes,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
       
        onIncrementCounter: () => dispatch({type: "INCREMENT"}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);