import Card from "./Card"

function App(){
    return(
        <> 
            <Card/>
            <Card/>
            <Card/>
            <Card/> 

            {/* Here we can see that 4 card components are used which says once you 
            create a component you can re use it through out the code */}

            {/* But here in this example we created a component of SP125 and when ever we use the 
            component we see the SP125 appearing if we want to inset Access 125 we cannot do it here
            
            so this can be done using the props concept which is seen next!*/}
        
        </>
    );
}

export default App