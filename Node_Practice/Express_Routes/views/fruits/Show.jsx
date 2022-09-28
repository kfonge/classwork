//STEP 1: require the React library
const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

//STEP 2: class component syntax vs. functional component syntax
//allows child class to INHERIT properites and methods fr the parent class 
class Show extends React.Component {

    //Creates a method in class
    render() {

        const fruit = this.props.fruit
        // const { name, color, readyToEat, _id } = this.props.fruit
        //note: we are using parenthese with return in react
        //this.props allow us to access data passed in as object to res.render
        console.log(this.props.fruit)
    
        return (
            <DefaultLayout>
                <h1> Show Page</h1>
                <p>
                    The {fruit.name} is {fruit.color}
                </p>
                <p>
                    {/* ternary statement syntax is common for React */}
                    {fruit.readyToEat ? "It is ready to eat!" : "It is NOT ready to eat"}
                </p>

                <button>
                    <a href={`/fruits/${_id}`}>Edit</a>
                </button>

                <form action={`/fruits/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form> 
            
                <nav>
                    {/* the /fruits string below takes you back to index */}
                    <a href='/fruits'>back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show