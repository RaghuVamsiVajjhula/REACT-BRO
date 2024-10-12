import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">  
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No  "}</p>
        </div>
    )
}

Student.prototypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}



export default Student


// Proptypes are a mechanism that ensures that the passes value is of the correct datatype  
//    age: propTypes.number

// So basically proptypes are mentioning the type of a prop so that we get a warning message reguarding the 
//  type of it.

// If you set name: of proptype to a string then it should be a string if not a warning is occured.

// It wont stop the application from running but it warns...


// Default props : These are the default values for props in case they are not passed from the parent
// component name:"Guest"


