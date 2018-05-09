import { connect } from 'react-redux'
import * as actions from '../../actions'
import { bindActionCreators } from 'redux'
import App from '../../App'

// let state = this.context.store.getState()

const mapStateToProps = state => {
    return {
        currentUser: state.user[state.user.length-1].currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)