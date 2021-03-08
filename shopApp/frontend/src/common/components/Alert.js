import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alertType, alertTitle, alertMessage }) => {
    let alert = useRef(null)
    let errorType = useRef(null)

    useEffect(() => {
        if (alertType) {
            alert.style.display = "block"
            alert.style.opacity = 1
            errorType.style.color = alertType === "OK" ? "green" : "red"

            setTimeout(() => {
                alert.style.opacity = 0
                setTimeout(() => {
                    alert.style.display = "none"
                }, 1000)
            }, 3000)
        }
    })

    return (
        <div className="alert" ref={el => { alert = el }}>
            <h3><span ref={el => { errorType = el }}>{alertType}</span><span>{alertTitle}</span></h3>
            <p>{alertMessage}</p>
        </div>
    )
}

Alert.propTypes = {
    alertType: PropTypes.string.isRequired,
    alertTitle: PropTypes.string.isRequired,
    alertMessage: PropTypes.string.isRequired
}

export default Alert
