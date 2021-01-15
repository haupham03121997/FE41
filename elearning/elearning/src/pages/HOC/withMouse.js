import React, { Component } from 'react';


const withMouse = (Component) =>{
    class WrapperCopmnent extends Component {
        constructor(props){
            super(props);
            this.state = {
                posX : 0,
                posY :0,
            }
        }
        componentDisMount() {
            window.addEventListener('mousemove', this.handleMouseMove);
        }
        componentWillUnmount(){
            window.removeEventListener("mousemove" , this.handleMouseMove)
        }
        handleMouseMove =(evt) =>{
            this.setState({
                posX : evt.clientX,
                posY : evt.clientY
            });
        };
        render () {
            
        }
    }
    return WrapperCopmnent;
}
export default withMouse;