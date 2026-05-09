import { useState } from 'react';
import './styles.css';
import Homepage from './homepage';
import Projects from './projectssection';
import { Link } from 'react-router-dom';
import Contact from './contactsection';
import Skill from './skillsection';

export default function navigationbar(){
    const [home,sethome]=useState(true);
    const [skills,setskills]=useState(false);
    const [contact,setContact]=useState(false);
    const [projects,setprojects]=useState(false);
    const [menu,setmenu]=useState(true);

    return(<div>
        {menu && <div id="navigation">
       <div ><h2>Portfolio</h2></div>
      <div id='buttons'>
        <div><button className='button' onClick={()=>{sethome(true);setContact(false);setskills(false);setprojects(false);}}>Home</button></div>
        <div><button className='button' onClick={()=>{setContact(true);sethome(false);setskills(false);setprojects(false);}}>Contact</button></div>
        <div><button className='button' onClick={()=>{setskills(true);sethome(false);setContact(false);setprojects(false);}}>Skills</button></div>
        <div><button className='button' onClick={()=>{setskills(false);sethome(false);setContact(false);setprojects(true);}}>Projects</button></div>
      </div>
    </div>}
   {home && <Homepage></Homepage>}
   {contact && <Contact></Contact>}
   {skills && <Skill></Skill>}
   {projects && <Projects></Projects>}
   <div id='end'><button id='menubutton' onClick={()=>{
    setmenu(x=>!x);
   }}>menu</button></div>
    </div>);
}
