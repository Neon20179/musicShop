import React, { useState } from 'react'
import PropTypes from 'prop-types'

const searchTabSelectedStyles = {
    transform: 'none',
    boxShadow: '#a4c7ee 0px 1px 10px'
}

const searchToggleSelectedStyles = {
    boxShadow: '#a4c7ee 0px 1px 10px'
}

const Search = ({ children, findTrackByName }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="search-tab" style={isOpen ? searchTabSelectedStyles : { transform: 'translateY(-300px)' }}>
            <div className="wrapper">
                <div className="container">
                    <input type="text" placeholder="Find track" onChange={e => findTrackByName(e.target.value)} />
                </div>
                <div className="result-container">
                    {children}
                </div>
            </div>
            <button className="search-toggle" onClick={() => setIsOpen(!isOpen)}
                style={isOpen ? searchToggleSelectedStyles : null}>
                <img src="/static/media/search-icon.png" alt="" />
            </button>
        </div>
    )
}

Search.propTypes = {
    findTrackByName: PropTypes.func.isRequired
}

export default Search

