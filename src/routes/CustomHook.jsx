import useCustomHook from "../hooks/useCustomHooks";
import MetaTags from 'react-meta-tags';

const styles ={
 
  container: {
    margin : 'auto',
    alignItems : 'center',
    paddingtop : '50px',
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
    padding: '15px',
    fontSize: 10,
    borderRadius: '10px',
    color : '#fff',
    backgroundColor: "#2d8942",
    margin: '35px',
    border : "none",
    cursor : "pointer",
  },
  
  
}

export default function CustomHook() {

  
  const [increment, decrement, reset, setValue, data] = useCustomHook(); 

  return (
    <>
    <MetaTags>
          <title>Custom Hooks</title>
          <meta name="description" content="React custom hooks" />
        </MetaTags>
      <div style={styles.container}>
        <h1 style={styles.h1}>Custom hook page</h1>
        <p style={styles.data} >{ data }</p>
        <button  style={styles.button} onClick={() => increment()}>Increase</button>
        <button style={styles.button} onClick={() => decrement()}>Decrease</button>
        <button style={styles.button} onClick={() => reset()}>Reset</button>
        <button  style={styles.button} onClick={() => setValue(new Error()) }>Test error boundary</button>
      </div>
    </>
  );
}
