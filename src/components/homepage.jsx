import image from './../assets/image.png';

export default function Homepage(){
    return(<div id='home'>
        <div id='imagediv'><img id='image' src={image}></img></div>
        <div id='info'><h2>I am <b>Lakhwinder Singh</b>,
             a B.Tech student at <b>IIT Bombay</b> specializing in <b>Civil Engineering</b>. I am a driven developer with a focus on building scalable web applications and exploring the intersection of hardware and software. With a strong foundation in Web Development, I am dedicated to creating efficient, automated solutions and contributing to impactful open-source projects.</h2>   </div>
    </div>)
}