// webpack 入口文件

import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    
    fn = (a,b) => {
        console.error(a,b);
    }

    render() {
        const obj = {a:1,b:2,c:3,d:4};
        obj.a =0;
        console.error(obj);
        return (
            <div>
                  <h1>环境: {process.env.NODE_ENV}</h1>
                <h1>REACT_APP_API_SERVER: {process.env.REACT_APP_API_SERVER}</h1>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App />,document.getElementById('root'));
