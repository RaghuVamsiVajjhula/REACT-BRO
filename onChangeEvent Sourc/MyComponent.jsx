import React,{useState} from 'react';

function MyComponent(){
    const[name,setName]=useState("Guest");
    const[quantity,setQuantity]=useState("0");
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleSetComment(event){
        setComment(event.target.value);
    }

    function handleSetPayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name:{name}</p>

            <input value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleSetComment} placeholder='Enter comment here' ></textarea>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handleSetPayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>

            </select>
            <p>Choosed payment method:{payment}</p>

            <label>
                <input type="radio" value="Pickup" checked={shipping==='Pickup'}  onChange={handleShipping}></input>
                Pickup
            </label>
            <br></br>
            <label>
                <input type="radio" value="Delivery" checked={shipping==='Delivery'}  onChange={handleShipping}></input>
                Delivery
            </label>
            <p>Shipping:{shipping}</p>
        </div>


    );

}

export default MyComponent