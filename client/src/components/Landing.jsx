import React,{Component} from "react";
import './Landing.css';
import {Link} from 'react-router-dom';
import '../socialbar/fonts.css'


class Landing extends Component {
  render() {
    return (
        <header class="header">
        <div class="textos">
          <h1>Welcome to my recipe page</h1>
          <br/>
          <br/>
          <br/>
          <p>
            Hello, you are about to enter my PI, a project created for Henry's
            bootcamp.
          </p>
              <Link to='/Home' class="button"> 
                <span>Enter</span>
               </Link>
        </div>

        <div class="redes">
          <ul>
              <li><a href="https://github.com/rondinajulian"class="icon-github"></a></li>
              <li><a href="https://www.linkedin.com/in/julian-rondina-2974a8170/"class="icon-linkedin"></a></li>
          </ul>
        </div>

      </header>

    );
  }
}

export default Landing