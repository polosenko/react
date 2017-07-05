import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
  }
  componentWillMount() {
    this.props.getTableDate();
  }
  render() {
    console.log(this.props.data);
    // const { data } = this.props;
    return (
      <div>
        <input type="text" ref={(input) => {this.trackInput = input }}/>
        <button onClick={this.addTrack.bind(this)}> Add track</button>
          <ul>
              {
                  this.props.data.map(item => (
                      <li>{item}></li>
                  ))
              }
          </ul>
      </div>
    );
  }
}


export default connect(
  state => ({
    data: state,
    tableData: state.table,
  }),
  dispatch => ({
    onAddTrack: trackName => dispatch({
        type: 'ADD_TRACK',
        payload: trackName,
    }),
    onRemoveTrack: trackID => dispatch({
    type: 'REMOVE_TRACK',
    payload: trackID,
}),
  })
)(App);



