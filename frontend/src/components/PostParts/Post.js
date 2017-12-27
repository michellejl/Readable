import React, { Component } from 'react'
import Button from '../Button'
import PostHeader from './PostHeader'

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi consectetur consequuntur culpa dignissimos doloremque facilis illo inventore minima mollitia natus placeat praesentium quae quam ratione, rem soluta veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi consectetur consequuntur culpa dignissimos doloremque facilis illo inventore minima mollitia natus placeat praesentium quae quam ratione, rem soluta veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam commodi consectetur consequuntur culpa dignissimos doloremque facilis illo inventore minima mollitia natus placeat praesentium quae quam ratione, rem soluta veniam.'

class Post extends Component {
    render() {
        return (
            <div>
                <PostHeader />
                <div>
                    {this.props.summary
                        ? <p>{text.slice(0, 200)}...</p>
                        : <p>{text}</p>
                    }
                </div>
                {this.props.summary
                    ? <Button>Read More</Button>
                    : <span />}
                <Button edit>Edit</Button>
                <Button delete>Delete</Button>
            </div>
        );
    }
}

export default Post;