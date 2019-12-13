import React, { Component } from 'react';
import { sum, square } from '../../utils/math'
class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Trang Chủ</h1>
                {this.showConsole()}
            </div>
        );
    }
    showConsole = () => {
        var _square =square(1,2);
        console.log(_square);
    }
}

export default HomePage;
