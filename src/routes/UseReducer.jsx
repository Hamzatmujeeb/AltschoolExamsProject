import { useReducer } from "react";
import MetaTags from 'react-meta-tags';

const styles ={
 
  container: {
    margin : 'auto',
    alignItems : 'center',
    paddingtop : '50px',
    height : '200px',
    width : '300px',
    height : '400px',
    width : "600px",
    
  },

  data:{
         textAlign : "center",
         fontSize : "1.7rem",
         fontweight : "bold",
         color: "#2d8942",
         
  },

  h1: {
    fontSize: 40,
    color: "#2d8942",
    textAlign: "center",
    paddingTop: "70px",
  },
  
  button: {
    display : 'inline-block',
    justifyContent: 'center',
    padding: '12px 15px',
    fontSize: 10,
    borderRadius: '5px',
    color : '#fff',
    fontweight : 'bolder',
    backgroundColor: "#2d8942",
    margin: '35px',
    border : "none",
    cursor : "pointer",
  },
  
  
};


function reducer(state, action) {
  if (action.type === 'increment') {
    return {
      data: state.data + 1
    };
  } else if (action.type === 'decrement') {
    return {
      data: state.data - 1
    };
  } else if (action.type === 'reset') {
    return {
      data: 0
    };
  }

  throw Error('Unknown action.');
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { data: 0  })

  return (
    <>
    <MetaTags>
            <title>UseReducer</title>
            <meta name="description" content="React use reducer" />
          </MetaTags>
    <div style={styles.container}>
      <h1 style={styles.h1}>Use reducer page</h1>
      <p style={styles.data}>{ state.data  }</p>
      <button style={styles.button} onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button style={styles.button} onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
      <button style={styles.button} onClick={() => dispatch({ type: 'reset' })}>Reset</button> 
      <button style={styles.button} onClick={() => dispatch({ type: 'error' })}>Test Error boundary</button>  
      </div>  
    </>
  );
}
