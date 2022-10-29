import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faJava, faJenkins, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className = "container about-page">
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray = {"About me".split("")}
                        idx = {15} 
                    />
                </h1>
                <p>
                    I
                </p>
                <p>
                    like
                </p>
                <p>
                    brownies
                </p>
            </div>
            <div className = 'stage-cube-cont'>
                <div className = 'cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon = {faPython} color = "#FFFFFF" />
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon = {faJava} color = "#FFFFFF" />
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon = {faJenkins} color = "#FFFFFF" />
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon = {faGitAlt} color = "#FFFFFF" />
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon = {faReact} color = "#FFFFFF" />
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon = {faTerminal} color = "#FFFFFF" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About