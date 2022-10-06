const React = require('react')


class Index extends React.Component{
    render(){
        return(
            <div style={styles}>
                <h1>See All The Pokemon</h1>
            </div>
        )
    }
}

const styles = {
    color: `#ffffff`,
    backgroundColor: `#000000`,
}

module.exports = Index