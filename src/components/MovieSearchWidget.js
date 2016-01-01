import React, { Component } from 'react'

export default class MovieSearchWidget extends Component {

  setRef(ref) {
    this.searchTextRef = ref
  }
  handleSubmit() {
    const searchText = this.searchTextRef.value
    this.searchTextRef.value = ''
    this.props.history.pushState(null, 'search/' + searchText)
  }
  render() {
    return (
      <div className="movie-search">
        <form className={'form-inline ' + this.props.className} role="search">
        <div className="form-group">
        <input type="text" className="form-control" size="36" maxLength="100" placeholder="The Day After..." ref={this.setRef.bind(this)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} > Go </button>
        </form>
      </div>
    )
  }
}

MovieSearchWidget.PropTypes = {
  history: React.PropTypes.object.isRequired
}
