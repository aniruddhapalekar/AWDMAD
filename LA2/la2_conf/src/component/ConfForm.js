import React from 'react'

class ConfForm extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:null,
            city:null,
            branch:null,
            conference:null
        }
    
    }
    

    handlesubmit()
    {
       alert("your form is submitted")
    }

    render(){
    return (
        <div>
            <form onSubmit={this.handlesubmit()}>
                Full Name: <input type="text"  name="full_name"/> <br></br>     
                City: <input type="text" name="City"/>  <br></br>
                Branch: <input type="text" name="Branch"/>   <br></br>
                Conference: <input type="text" name="Conference"/>  <br></br>
			    <input type="submit" value="Submit"/>  
            </form>

        </div>
    )
    }
}

export default ConfForm
