const React = require('react')
const DefaultLayout = require("../layouts/DefaultLayout")
class New extends React.Component{
    render(){
    return(
        <DefaultLayout title="create a new fruit" >
            <h1>New Page</h1>
            <form action={/fruits/_id} method="POST">
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" name="name" />
                
                <label htmlFor="color"> Color: </label>
                <input type="text" id="color" name="color" />
                
                <label htmlFor="readyToEat"> Is Ready to Eat: </label>
                <input type="checkbox" id="readyToEat" name="readyToEat"/>
            
                <input type="submit" value="create fruit" />
            </form>
        </DefaultLayout>

)}}

module.exports = New