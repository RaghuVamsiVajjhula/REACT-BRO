import UserGreeting from "./UserGreeting";

// Conditional rendering involves you to control what rendered in your application based on certain conditons
// show,change or hide components.


function App(){
  return(
    <>
      <UserGreeting isLoggedIn={true}  username="CodeBro"  />
      {/* Now from the above line if you eleminate username we can see the screen telling Hello Guest */}

    </>
  );
}

export default App