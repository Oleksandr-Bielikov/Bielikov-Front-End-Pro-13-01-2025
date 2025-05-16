import React from 'react';

class Winner extends React.Component {
    render() {
        return (
            <div>
                <div className="winner-card" style={{ width: '18rem' }}>
                    <div className="winner-emoji" >
                        {this.props.winner.emoji}
                    </div>
                    <div className="card-body">
                        <p className="card-text">This emoji win with {this.props.winner.votes} votes! Congratulations!</p>
                    </div>
                    <button onClick={this.props.goBack}>Go Back</button>
                </div>
            </div>
        );
    }
}

export default Winner;