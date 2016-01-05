import React, {
  Component, PropTypes
}
from 'react'
import DeleteButtonWidget from '../components/DeleteButtonWidget'
import store from '../store/store'

export default class DeleteButtonContainer extends Component {
  static propTypes = {
    id: PropTypes.number,
    deleteUICallback: PropTypes.func
  }
  deleteCallback(event) {
    console.log('prevent default delete')
    event.preventDefault()
    store.dispatch({
      type: 'DELETE_LIKE',
      id: this.props.id
    })
  }
  render() {
    return (
      <DeleteButtonWidget
        deleteCallback ={this.deleteCallback.bind(this) }/>
    )
  }
}
