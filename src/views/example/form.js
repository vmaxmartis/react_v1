import React from 'react';
import ChildComponent from './list';
import Divide_cpn from './child';
import List from './demo_list';

import './example.css'


class Form extends React.Component {
    //key:value
    state = {
        work: [
            { id: 'abcJob1', namePlayer: 'Đinh Thiên THoại', Point : '500 ' },
            { id: 'abcJob2', namePlayer: 'Boa', Point: '400 ' },
            { id: 'abcJob2', namePlayer: 'Boa', Point: '450 ' },
            { id: 'abcJob3', namePlayer: 'Luna', Point: '1000' }
        ]
    }
    //ADD new Player
    addNewPlayer = (player) => {
        this.setState({
        work : [...this.state.work,  player]
        })
        console.log("Right now check parent" , player);
    }  
    deletePlayer= (player) => {
        let nowPlayer = this.state.work; 
        nowPlayer = nowPlayer.filter(item => item.id !== player.id)
        this.setState({
            work: nowPlayer
        })
    } 

    /* 
    JSX => return block
    fragment
    */

    // handleChangeFirstName = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // handleChangeLastName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log('>>> check data input: ', this.state)
    // }
    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                {/* <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}

                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> */}
                <Divide_cpn
                //truyền funtion
                   addNewPlayer = {this.addNewPlayer}
                />

                <ChildComponent
                    // fname={this.state.firstName}
                    // lname={this.state.lastName}
                    // age={'25'}
                    // address={'Ha noi'}
                    work={this.state.work}
                    deletePlayer={this.deletePlayer}
                />
                <List/>
                {/* <Calculator/> */}
                <swapUsd/>
            </>
        )

    }
}

export default Form;