import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class QuoteMachine extends Component {

  constructor(props){
    super(props)
    this.state = {
      numQuotes: 1,
      quote: '',
    };
    this.author = '-- Rick Sanchez';
    this.pullQuote = this.pullQuote.bind(this);
    this.shareQuote = this.shareQuote.bind(this);
    this.endPoint = `http://loremricksum.com/api/?paragraphs=${this.state.numQuotes}&quotes=${2}`
    
  }

  pullQuote () {
    fetch(this.endPoint)
      .then(rickData => rickData.json())
      .then(rickData => {
        if (rickData.data){
          this.setState({
            quote: rickData.data
          })
        } else {
          console.error('Hurry Morty, get the debugger Morty!')
        }
      })
  }

  shareQuote () {
    window.open(`https://twitter.com/intent/tweet?text=${this.state.quote} -- Rick Sanchez`)
  }

  render(){
    return (
      <div>
        <img id='rick' src={require("./happyRick.png")} alt="Happy Rick"></img>
        <h1 id="header">Quote Machineeeeeeee!</h1>
        <Card className="card" >
          <CardActions className="button">
            <Button id='new-quote' variant="outlined" color="primary" onClick={this.pullQuote}>Click Here to Wubalubadubdub!</Button>
          </CardActions>
        </Card>
        <br/>
        {this.state.quote && <Card id='Quote-Box' className="card">
          <CardContent id="content">
            <Typography id='text' component='p'>
              {this.state.quote}
            </Typography>
            <Typography id='author' component='p'>
              {this.author}
            </Typography>
          </CardContent>
          <CardActions className="button">
            <Button id='tweet-quote' variant="outlined" color="primary" onClick={this.shareQuote}>Tell Yo Friends!</Button>
          </CardActions >
        </Card>}
        <br/>
        <img id='rick2' src={require("./madRick.png")} alt="Mad Rick"/>
      </div>
    )
  }
}

export default QuoteMachine;