const React = require('react')

class Index extends React.Component{
    render() {

        //Object Destructuring takes properties and stores them in varaibles of same name
        const { meat } = this.props
        
        // const meat = this.props.meat
        
        //map method
        //loops over array, manipulates data at each index, returns new array w/ new data
        return (
            <div>
                <h1>Meat Index Page</h1>
                <ul>
                    {meat.map((meats, i) => {
                        return (
                            <li key={i}>
                                The type of <a href={`/meats/${i}`}>{meats.name}</a>
                                is {meats.type}
                            </li>
                        )
                    })} 
                </ul>
            </div>
        )
    }
}

module.exports = Index;