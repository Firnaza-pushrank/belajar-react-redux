import React, { Component } from "react";
import './randomQuoteStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaTwitterSquare, FaInstagramSquare, FaQuoteLeft } from "react-icons/fa";


export class RandomQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomIndex: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            randomIndex: Math.floor(Math.random() * 4)
        })
    }
    render() {
        const TheQuotes = [
            'habis gelap terbitlah terang',
            'semua anak itu jenius',
            'coffee is a legal drug',
            'never giveen up'
        ]

        const TheAuthor = [
            'R.A Kartini',
            'Albert Einstein',
            'Unknown',
            'My Self'
        ]

        const Quotes = TheQuotes[this.state.randomIndex];
        const Author = TheAuthor[this.state.randomIndex];

        return (
            <div id='wrapper'>
                <div id='quote-box'>
                    <div id='quote-text' >
                        <i className='quoteIcons'><FaQuoteLeft /><span id="text">{Quotes}</span></i>
                    </div>
                    <div id="quote-author">- <span id="author">{Author}</span></div>
                    <div class="button-group">
                        <a href="https://twitter.com/intent/tweet" id='tweet-quote' class="button-icon">
                            <i className='icons-style'><FaTwitterSquare /></i>
                        </a>
                        <a href="https://instagram.com/" class="button-icon">
                            <i className='icons-style'><FaInstagramSquare /></i>
                        </a>
                        <button id='new-quote' onClick={this.handleClick} type="button" class="btn btn-primary">New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuote;