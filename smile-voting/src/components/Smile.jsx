import React from 'react';

class Smile extends React.Component {
  render() {
    return (
      <div className='smile-card'>
        <span className='smile-emoji'>{this.props.emoji }</span>
        <p className='smile-votes'>{this.props.votes}</p>
        <button className='vote-btn' onClick={this.props.voteOnSmile}>Vote</button>
      </div>
    );
  }
}

export default Smile;
