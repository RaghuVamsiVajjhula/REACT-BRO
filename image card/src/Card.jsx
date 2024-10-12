import sp_pic from './assets/SP_Google.jpeg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={sp_pic}alt="profile picture"></img>
            <h2 className="card-title">SP 125</h2>
            <p className="card-text">One of the best beginner's bike</p> 
        </div>
    ) 
}

export default Card