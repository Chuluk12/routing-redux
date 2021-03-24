import { connect } from "react-redux";

const Input = (props) => {
    console.log(props);

    return (
        <div>
            <label htmlFor="name">Name : </label> 
            <input type="name"
            onSubmit={() => props.onChange()}
            value={props.input}   
           />
           <button onClick={() => props.change()}>Click</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        tes: state.input,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: () => dispatch({type: "INPUT"}),
        change: () => dispatch({type: "Click"}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);