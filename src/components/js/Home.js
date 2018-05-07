import React, { Component } from 'react';
import News from 'newsapi';

import Story from './Story';

import '../css/Home.css'

const newsapi = new News('165f7e7dd53544689dba061fd91ddccd');

class Home extends Component {

    componentWillMount() {
        this.setState({ stories: []})
        newsapi.v2.topHeadlines({
            sources: 'bbc-news,the-verge',
            language: 'en',
        }).then(response => {
            this.setState({ stories: response.articles});
        });
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