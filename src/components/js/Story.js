import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/Story.css';

class Story extends Component {
    render() {
        const bgStyle = {
            background: `url(${this.props.imgUrl}) center / cover no-repeat`,
        }
        return (
            <div className="card">
                <div className="storyWrapper" style={bgStyle}>
                    <div className="data">
                        <div className="storyData">
                            <div className="content">
                                <div className="meta">
                                    <a href={this.props.url} target="_blank">
                                        <h1>{this.props.title}</h1>
                                    </a>
                                    <h2>{this.props.author}</h2>
                                    <h3>Source: {this.props.source}</h3>
                                </div>
                                <div className="description">
                                    <p>{this.props.description}</p>
                                    <a href={this.props.url} target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Story.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Story;