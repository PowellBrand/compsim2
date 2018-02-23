import React, { Component } from 'react';
import { connect } from 'react-redux';

class Browsing extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: ''
        }
    }
    render() {
        return (
            <div>
                {/* 54E, 54J */}
                <ul className="bookList">
                    <li>book1</li>
                    <li>book2</li>
                </ul>
            </div>
        )
    }

}
//43H
function mapStateToProps(state) {
    return {
        title: state.title
    }
}
//43C
export default connect(mapStateToProps, { getAllBooks })(Browsing)