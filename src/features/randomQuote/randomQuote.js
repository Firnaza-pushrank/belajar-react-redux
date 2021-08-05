import React, { Component } from "react";
import './randomQuoteStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaTwitterSquare, FaInstagramSquare, FaQuoteLeft } from "react-icons/fa";

export class RandomQuote extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id='wrapper'>
                <div id='quote-box'>
                        <div id='quote-text' >
                            <i className='quoteIcons'><FaQuoteLeft/><span id="text"> You can make it what you want it,by keep the good things on your mind</span></i>
                        </div>
                        <div id="quote-author">- Examples<span id="auth"></span></div>
                        <div class="button-group">
                            <a href="https://twitter.com/intent/tweet" class="button-icon">
                                <i  className='icons-style'><FaTwitterSquare/></i>
                            </a>
                            <a href="https://instagram.com/" class="button-icon">
                                <i className='icons-style'><FaInstagramSquare/></i>
                            </a>
                            <button id='button-quote'  type="button" class="btn btn-primary">New Quote</button>
                        </div>
                </div>
            </div>
        )  
    }
}

export default RandomQuote;