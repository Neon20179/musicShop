import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sendTrackIndex } from '../../state/trackList/trackListActions'
import ProgressBar from '../components/ProgressBar/ProgressBar'

class MusicPlayerContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlay: true,
            trackDuration: 0,
            currentTime: 0,
            trackId: 0
        }
        this.trackDuration = 0
        this.interval = null

        this.audio = React.createRef()
        this.pausePlayController = React.createRef()
        this.musicPlayer = React.createRef()
    }

    playTrack() {
        this.audio.play()
        this.pausePlayController.src = "/static/media/pause_icon.png"
        clearTimeout(this.interval)
        if (this.state.isPlay) {
            this.interval = setInterval(() => {
                this.setState({
                    currentTime: this.audio.currentTime
                })
            }, 1000)
        }
    }

    pauseTrack() {
        clearTimeout(this.interval)

        this.audio.pause()
        this.pausePlayController.src = "/static/media/play_icon.png"
    }

    playPrevTrack = () => {
        const prevTrackIndex = (this.props.trackIndex - 1 + this.props.trackQueue.length)
            % this.props.trackQueue.length
        this.props.sendTrackIndex(prevTrackIndex)
    }

    playNextTrack = () => {
        let nextTrackIndex = (this.props.trackIndex + 1) % this.props.trackQueue.length
        this.props.sendTrackIndex(nextTrackIndex)
    }

    componentDidUpdate() {
        this.state.isPlay ? this.playTrack() : this.pauseTrack()
        this.audio.addEventListener('loadedmetadata', (e) => {
            this.trackDuration = e.target.duration
        })
    }
    render() {
        const activeTrack = this.props.trackQueue[this.props.trackIndex] || {}
        return (
            <div className="music-player"
                style={this.props.trackQueue.length > 0 ? { bottom: 0 } : null}
                ref={el => { this.musicPlayer = el }}>
                <audio ref={el => { this.audio = el }} src={activeTrack.track} />
                <ProgressBar currentTime={this.state.currentTime} trackDuration={this.trackDuration} />
                <div className="wrapper">
                    <img className="track-image" src={activeTrack.image} />
                    <h3><Link to={`/track/${activeTrack.id}`}>{activeTrack.name}</Link></h3>
                    <div className="controllers">
                        <div className="prev-track" onClick={this.playPrevTrack}>
                            <img src="/static/media/next_prev_track.png"></img>
                        </div>

                        <div className="pause-play" onClick={() => this.setState({ isPlay: !this.state.isPlay })}>
                            <img ref={el => { this.pausePlayController = el }} src="/static/media/play_icon.png"></img>
                        </div>

                        <div className="next-track" onClick={this.playNextTrack}>
                            <img src="/static/media/next_prev_track.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MusicPlayerContainer.propTypes = {
    trackIndex: PropTypes.number,
    trackQueue: PropTypes.array,
    sendTrackIndex: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    trackIndex: state.trackListReducer.trackIndex,
    trackQueue: state.trackListReducer.trackQueue,
})

export default connect(mapStateToProps, { sendTrackIndex })(MusicPlayerContainer)
