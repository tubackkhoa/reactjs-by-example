import React from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import NotesList from './NotesList'
import NoteDetail from './NoteDetail'
import Toasts from './Toasts'
import Nav from './Nav'
import * as selectors from '../store/selectors'
import * as actionCreators from '../store/actions/note'

class NoteApp extends Component {
  componentWillMount() {
    this.props.requestReadNotes()
  }

  render() {
    const { readNotesRequest } = this.props

    switch (readNotesRequest.status) {
      case 'success':
        return (
          <div className="note-wrapper">
            <Nav />
            <Toasts />
            <div className="row">
              <NotesList />
              <NoteDetail />
            </div>
          </div>
        )
      case 'failure':
        return (
          <div className="notice">
            {(readNotesRequest.error.message === 'Failed to fetch')
              ? 'No connection, try again later!'
              : 'Hmm... Something didn\'t go as planned.'
            }
          </div>
        )
      default:
        return (
          <div className="notice">
            Loading...
          </div>
        )
    }
  }
}

NoteApp.propTypes = {
  requestReadNotes: PropTypes.func.isRequired,
  readNotesRequest: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  readNotesRequest: selectors.getRequest(state, 'readNotes'),
})

export default connect(mapStateToProps, actionCreators)(NoteApp)
