import MetaTags from 'react-meta-tags';
export default function PageNotFound() {

  const styles = {
    h1: {
      fontSize: 35,
      color : "#a20e00",
      textAlign: "center",
      margin : 100,
    },

    p: {
      fontSize: 25,
      color : "red",
      margin : '90px',
      textAlign: "center",
    },


  }

  return (
    <>
      <div>
      <MetaTags>
            <title>Page not found</title>
            <meta name="description" content="The page you are looking for does not exist" />
          </MetaTags>
        <h1 style={styles.h1} >Hey, are you lost?</h1>
        <p style={styles.p}><a href="/" style={{ textDecoration: 'none' }}>Please click here to go back to the home page.</a></p>
      </div>
    </>
  );
}
