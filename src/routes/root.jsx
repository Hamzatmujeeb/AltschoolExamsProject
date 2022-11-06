import MetaTags from 'react-meta-tags';
export default function Root() {

  const styles = {
    Heading: {
      fontSize: "48px",
      color: "#292b2c",
      backgroundColor: "#fff",
      padding: "0 20px",
      textAlign: "center",
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
        <MetaTags>
            <title>Home Page</title>
            <meta name="description" content="Alt school exam project" />
          </MetaTags>
      <h1 style={styles.Heading}>Home <span style={{color: "green"}}>page</span></h1>
      <p style={styles.p}><a href="/custom-hook" style={{ textDecoration: 'none' }}>CustomHook  page.</a></p>
      <p style={styles.p}><a href="/use-reducer" style={{ textDecoration: 'none' }}>UseReducer  page.</a></p>
      <p style={styles.p}><a href="*" style={{ textDecoration: 'none' }}>PageNotFound  page.</a></p>
    </>
  );
}
