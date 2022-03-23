import React from 'react';
import '../nav/Nav.css'
class Nav extends React.Component {
    render() {
        return (
          <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="/example">Example</a>
            <a href="/todo">Todo</a>
            <a href="/now">About</a>
            </div>
        )
    }
}

 export default Nav