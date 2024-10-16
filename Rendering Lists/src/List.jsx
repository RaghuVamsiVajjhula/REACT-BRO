

function List(props)
{
    // const fruits=["apple","orange","banana","pineapple","coconut"];
    
    const itemList=props.item;
    const category=props.category

    // fruits.sort((a,b)=> a.name.localeCompare(b.name));  alphabetical
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));   reverse alphabetical

    // fruits.sort((a,b)=> a.calories - b.calories)  numeric
    // fruits.sort((a,b)=> b.calories - a.calories)  reverse numeric

    const listItems= itemList.map(item => <li key={item.id} >
                                     {item.name}: &nbsp;
                                 <b>{item.calories}</b></li>); 


    //LowCalFruits

    // const lowCalFruits= fruits.filter(fruit => fruit.calories < 100)

    // const listItems= lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id} >
    //                                 {lowCalFruits.name}: &nbsp;
    //                             <b>{lowCalFruits.calories}</b></li>); 



    // HighCalFruits

    // const highCalFruits= fruits.filter(fruit => fruit.calories >= 100)

    // const listItems= highCalFruits.map(highCalFruits => <li key={highCalFruits.id} >
    //                                   {highCalFruits.name}: &nbsp;
    //                               <b>{highCalFruits.calories}</b></li>); 

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

export default List