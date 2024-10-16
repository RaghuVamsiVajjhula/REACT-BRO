import List from "./List"


function App(){

  const fruits=[{id:1,name:"apple",calories:95},
    {id:2,name:"orange",calories:80},
    {id:3,name:"banana",calories:104},
    {id:4,name:"pineapple",calories:99},
    {id:5,name:"coconut",calories:40}
  ];

  const vegetables=[{id:6,name:"carrot",calories:15},
    {id:7,name:"tomato",calories:45},
    {id:8,name:"potato",calories:74},
    {id:9,name:"brinjal",calories:19},
    {id:10,name:"onion",calories:40}
  ];

  return(

    <>
          {fruits.length > 0 ? <List item={fruits} category="Fruits"/> : null}
          {/* Okay so from this  java script adding we can see that if you remov ethe input sent like the only  
          const fruits=[] then you cannot see the fruits and its contents on the webpage.
          
          
          We can also follow the below syntax for the same conditon*/}
          {vegetables.length > 0 && <List item={vegetables} category="Vegetables"/> }
        
          
    </>
  );
}

export default App