import React from 'react'

const selectedAlbumStyles = {
    boxShadow: "var(--blue) 0px 2px 1px, #9999 0px 4px 4px, var(--blue) 0px 8px 4px, #9999 0px 12px 12px, var(--blue) 0px 16px 12px"
}

const Album = ({ album, selectAlbumOnClick, activeAlbumId }) => {
    return (
        <div className="single-album" key={album.id}
            onClick={selectAlbumOnClick}>
            <div className="album-image">
                <img src={album.image} style={activeAlbumId === album.id ? selectedAlbumStyles : null} />
            </div>
            <h4>{album.name}</h4>
        </div>
    )
}

export default Album
