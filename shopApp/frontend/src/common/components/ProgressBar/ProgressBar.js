import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { dragElement } from '../../../utils/musicPlayerUtils'

const ProgressBar = ({ currentTime, trackDuration }) => {
    let progressBackground = useRef(null)
    let progressBar = useRef(null)
    let progressHandler = useRef(null)

    useEffect(() => {
        dragElement(progressHandler)

        const progressWidth = currentTime / trackDuration * progressBackground.offsetWidth
        progressBar.style.width = `${progressWidth}px`
        progressHandler.style.left = `${progressWidth - 3}px`
    }, [currentTime])

    return (
        <div className="track-progress-bar">
            <div ref={el => { progressBackground = el }} className="progress-background"></div>
            <div ref={el => { progressBar = el }} className="progress-bar"></div>
            <div ref={el => { progressHandler = el }} className="progress-handler"></div>
        </div>
    )
}

ProgressBar.propTypes = {
    currentTime: PropTypes.number,
    trackDuration: PropTypes.number
}

export default ProgressBar
