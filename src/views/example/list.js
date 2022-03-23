import React from 'react';
import './example.css'
// class ChildComponent extends React.Component {
//         state = {
//             showPlayer: false
//         }
//         show_hide = () => {
//                 this.setState({
//                     showPlayer: !this.state.showPlayer
//                 })
//             }
//             //re-render
//         render() {
//             console.log('>>> check props: ', this.props)
//                 // let name = this.props.name;
//                 // let age = this.props.age;
//                 //key:value   
//             let { namePlayer, Point, age, address, work } = this.props;
//             let { showPlayer } = this.state
//             return ( 
//             <>
//                 {
//                     showPlayer === false && 
//                     <a href = '#'onClick = {() => { this.show_hide() } } > Show all </a>}  
//                      {showPlayer &&
//                             <>
//                             <label> Child is: { namePlayer } { Point } { age } { address } 
//                             </label> <div className = "job-lists" > 
//                             {work.map((item, index) => {
//                                     return ( 
//                                     <div key = { item.id } > { item.title } - { item.point } 
//                                     </div>
//                                     )
//                                 })

//                             } </div> 
//                             <a href = '#'onClick = {
//                             () => { this.show_hide() }
//                         } > Hide all </a> 
//                         </>
//                     } 
//             </>
//                 )
//             }
//         }



        // const ChildComponent = (props) => {

        //     let { namePlayer,Point, age, address, work } = props;

        //             return (
        //                 <>
        //                 <a href='#'>Show </a>
        //                 <label>
        //                     Chil is: {namePlayer} {Point} {address} {age}
        //                 </label>
        //                     <div className="job-lists">
        //                         {
        //                             work.map((item, index) => {
        //                                 if(item.point > 450){
        //                                     return (
        //                                         <>
        //                                         <label>Player Pro: </label>
        //                                         <div key={item.id}>
        //                                             {item.title} - {item.point}
        //                                         </div>
        //                                         </>
        //                                     )
        //                                 }

        //                             })

        //                         }

        //                     </div>
        //                     <a href='#'> Hide</a>
        //                 </>)

        // }


        //code tối ưu
        class ChildComponent extends React.Component {
            state = {
                showPlayer: false
            }
            show_hide = () => {
                    this.setState({
                        showPlayer: !this.state.showPlayer
                    })
                }
                //re-render
            handleOnClickDEL = (player) => {
                this.props.deletePlayer(player)
            } 
            render() {
                console.log('>>> check props: ', this.props)
                    // let name = this.props.name;
                    // let age = this.props.age;
                    //key:value   
                let { namePlayer, Point, age, address, work } = this.props;
                let { showPlayer } = this.state
                let check = showPlayer === true ? 'showPlayer = true' : 'showPlayer = false';
                console.log('>>>', check);
                return ( 
                <>
                        {
                        showPlayer === false ?
                        <button className='button' href = '#'onClick = {() => { this.show_hide() } } > Show all </button>
                        
                        :
                                <>
                                <label> Child is: { namePlayer } { Point } { age } { address } 
                                </label> <div className = "job-lists" > 
                                {work.map((item, index) => {
                                        return ( 
                                        <div key = { item.id } > { item.namePlayer } - { item.Point }  <button className='del' onClick={() => this.handleOnClickDEL(item) }> Delete</button>
                                        </div>  
                                        

                                        )
                                    })
    
                                } </div> 
                                <button className='button' href = '#'onClick = {
                                () => { this.show_hide() }
                            } > Hide all </button> 
                            </>
                        } 
                </>
                    )
                }
            }
        export default ChildComponent;