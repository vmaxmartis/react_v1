import React from "react";
import './example.css'
//chia chawawrt CPN
class Divide_cpn extends React.Component{
 //sự kiện

 state = {
    namePlayer: '',
    Point: '',
 } 
 //input name
 handleChangeName = (event) => {
    this.setState({
        namePlayer: event.target.value
    })
}
//input point
handleChangePoint = (event) => {
    this.setState({
        Point: event.target.value
        })
}
//submit
handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.namePlayer) {
        alert('Name Player ???')
        return
    }if (!this.state.Point) {
        alert('Point ????')
            return
    } else {
       
    }
    
    // check
    event.preventDefault()
    console.log('>>> check data input: ', this.state)
    this.props.addNewPlayer({
        id: Math.floor(Math.random() * 999),
        namePlayer: this.state.namePlayer,
        Point:this.state.Point

    })//thêm  
    this.setState({
        namePlayer: '',
        Point: ''
    }) //set lại input rỗng
}


render(){
    return(
        <>
            <form>
                <div className="div">
                    <label> Name Player : </label> <span value=''/>
                        <input
                            className="input"
                            type="text"
                            value={this.state.namePlayer}
                            onChange={(event) => this.handleChangeName(event)}
                        />
                    </div> 
                 <div className="div">
                    <label htmlFor="lname">Point : </label><span value=''/>
                        <input
                            className="input"
                            type="text"
                            value={this.state.Point}
                            onChange={(event) => this.handleChangePoint(event)}

                        /><br /><br />
                </div> 
                <button
                    className="submit"
                     type="submit"
                     onClick={(event) => this.handleSubmit(event)}
                    >Submit</button>  
            </form>
        </>
    )
}

}; export default Divide_cpn;
