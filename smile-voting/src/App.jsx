import React from 'react';
import Smile from './components/Smile';
import Winner from './components/Winner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smiles: [
        { emoji: '😊', votes: 0 },
        { emoji: '😂', votes: 0 },
        { emoji: '😍', votes: 0 },
        { emoji: '😎', votes: 0 }
      ],
      winner: null
    };
    this.voteOnSmile = this.voteOnSmile.bind(this);
    this.results = this.results.bind(this);
  };

  voteOnSmile(index) {
    const smiles = [...this.state.smiles];
    smiles[index].votes++;
    this.setState({ smiles });
  };

  results() {
    const zeroValue = this.state.smiles.every(smile => smile.votes === 0)
    if (zeroValue) {
      alert('please, choose your smile')
    } else {
      const maxResult = Math.max(...this.state.smiles.map(smile => smile.votes));
      const winner = this.state.smiles.find(smile => smile.votes === maxResult)
      this.setState({ winner });
    }
    
  }
  goBack() {
    const resetVotes = this.state.smiles.map(smile => ({...smile, votes: 0}))
    this.setState({smiles: resetVotes, winner: null})
  }

  render() {
    if (this.state.winner === null) {
      return (
      <div className='app-container'>
        <div className='smile-list'>
          {this.state.smiles.map((smile, index) => (
          <Smile
            key={index}
            emoji={smile.emoji}
            votes={smile.votes}
            voteOnSmile={() => this.voteOnSmile(index)}
          />
        ))}
         <button className="show-results-btn" onClick={this.results}>Show results</button>
          </div>
        </div>
    );
    } else {
      return (
        <Winner
          winner={this.state.winner}
          goBack={() => this.goBack()}
        />
      )     
    }
  }
}

export default App;