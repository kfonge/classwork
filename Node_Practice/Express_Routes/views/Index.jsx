const React = require('react')

class Index extends React.Component{
    render() {

        //Object Destructuring takes properties and stores them in varaibles of same name
        const { fruits } = this.props
        
        // const fruits = this.props.fruits
        
        //map method
        //loops over array, manipulates data at each index, returns new array w/ new data
        return (
            <div>
                <h1>Fruits Index Page</h1>
                <ul>
                    {fruits.map((fruit, i) => {
                        return (
                            <li key={i}>
                                The <a href={`/fruits/${i}`}>{fruit.name}</a>
                                is {fruit.color}
                            </li>
                        )
                    })} 
                </ul>
            </div>
        )
    }
}

module.exports = Index;