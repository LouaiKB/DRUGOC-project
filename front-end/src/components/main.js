import React , { Component} from 'react'
import { FaGithub } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Main extends Component {
    /*componentDidMount(){
        const head = document.getElementsByTagName('header')[0]
        const body = document.getElementsByTagName('body')[0]
        head.classList.add('hide')
        body.style.backgroundImage = "none"
    }*/
    render(){
        return(
        <React.Fragment>
           <section className="section-main">
                <section className="welcome-section">
                   <h2 style={{color:'#764abc'}}>DRUGOC</h2>
                   <p>Drug oversight and control first informatic tool for pharmacovigilance in Algeria to help doctors </p>
                   <Link to="/log-in">
                        <button class="main-log-in">LOG IN</button>
                    </Link>
                    <Link to="/sign-up">
                        <button class="main-sign-up">SIGN UP</button>
                    </Link>
               </section>
               <section className="img-section">
                   <img src='../../undraw_medical_care_movn.svg' alt="Medical Care" height="400" width="400" title="undraw_medical_care_movn"/>
               </section>
           </section>
               <footer>
                   For more details have a look on documentation at
                   <a href="https://khaledslimani1998.github.io/khaledslimani1998.git.io/" rel="opener">
                   <FaGithub 
                   style={{marginLeft:"5px" ,color:"black"}}
                   />
                   </a>
               </footer>
        </React.Fragment>
        )
    }
}