// webpack 入口文件

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    render() {
        console.error(process.env);
        return (
            <div>
                <h1>环境: {process.env.NODE_ENV}</h1>
                <h1>REACT_APP_API_SERVER: {process.env.REACT_APP_API_SERVER}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
