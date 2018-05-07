import React, { Component } from 'react';
import Request from 'request';

import Story from './Story';

import '../css/Home.css'

const API_KEY = '165f7e7dd53544689dba061fd91ddccd';
const language='en';
const sources = 'bbc-news,the-verge,wired';
const pageSize= '20';
const options = {
    url: `https://newsapi.org/v2/top-headlines?language=${language}&sources=${sources}&pageSize=${pageSize}`,
    method: 'GET',
    headers: {
        'Authorization': `Basic ${API_KEY}`
    }
}

class Home extends Component {

    componentWillMount() {
        let self = this;
        self.setState({ stories: []})
        Request(options, (res, body) => {
            let articles = JSON.parse(body.body).articles;
            self.setState({ stories: articles});
        })
    }

    render() {
        const stories = this.state.stories.map((story) => 
            <Story imgUrl={story.urlToImage}
                   title={story.title}
                   url={story.url}
                   author={story.author}
                   source={story.source.name}
                   description={story.description}
                   key={story.url} />
        )
        return (
            <div className="Wrapper">
                <div className="Stories">
                    {stories}
                </div>
            </div>
        );
    }
}

export default Home;