import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const greetingArray = "Hi,".split("")
    const imaArray = "I'm a".split("")
    const nameArray = "ussy".split("")
    const jobArray = "comp sci student.".split("")
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    //use the idx values to adjust appearance delay in milliseconds
    return (
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                <AnimatedLetters letterClass = {letterClass}
                strArray = {greetingArray}
                idx = {12}/> 
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {imaArray}
                idx = {15}/>
                <img src = {LogoTitle} alt = "developer" />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {nameArray}
                idx = {22}/>
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray = {jobArray}
                idx = {26}/>
                </h1>
                <h2>
                Looking for software internships!
                </h2>
                <Link to = "/contact" className = "flat-button">CONTACT ME</Link>
            </div>
        </div>
    );

}

export default Home