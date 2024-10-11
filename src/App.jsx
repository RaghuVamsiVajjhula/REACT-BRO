import Header from "./Header"
import Footer from "./footer";
import Food from "./food";

function App() {

  return(
    // So header and footer at a time cannot be returned as only one can be done
    // So we will now add this into one single fragment
    <>
       <Header/>
       <Footer/>
       <Food/>
       <Food/>

    </>
  //  We can have more than one same components like we can reuse the same componenents in our page

  );
  
}

export default App
