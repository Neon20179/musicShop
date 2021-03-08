import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Alert from '../components/Alert'

const AlertContainer = ({ alertInfo }) => {
    return <Alert alertType={alertInfo.type} alertTitle={alertInfo.title} alertMessage={alertInfo.message} />
}

Alert.propTypes = {
    alertInfo: PropTypes.object
}

const mapStateToProps = state => ({
    alertInfo: state.alertReducer.regularAlertInfo
})

export default connect(mapStateToProps)(AlertContainer)
