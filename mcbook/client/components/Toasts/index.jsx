import React from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/note'
import * as selectors from '../../store/selectors'

import Snackbar from 'material-ui/Snackbar'

class Toast extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(
      () => this.props.clearToast(this.props.id),
      3000
    )
  }
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
  render() {
    const { id, message, level } = this.props    
    console.log(level)
    return (
      <div key={id} className={"toast " + level}>
        {message}
      </div>      
    )
  }
}

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  level: PropTypes.oneOf([ 'info', 'warn' ]).isRequired,
}

const Toasts = ({ toast, clearToast }) => (
  <div className="toast-wrapper">
    {toast &&
      <Toast
        {...toast}
        key={toast.id}
        clearToast={clearToast}
        />
    }
  </div>
)

Toasts.propTypes = {
  toast: PropTypes.shape(Toast.propTypes),
  clearToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  toast: selectors.getToast(state),
})

export default connect(mapStateToProps, actionCreators)(Toasts)
