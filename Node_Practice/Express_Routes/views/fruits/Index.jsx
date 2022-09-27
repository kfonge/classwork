const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { fruits } = this.props

        return (
           
            <DefaultLayout title="All Fruit" foodGroup="fruits">
 {/* //title and foodgroup are passed as props since they are attributes of DefaultLayout */}
                <div>
                    <h1>Fruits Index Page</h1>
                    <ul>
                        {fruits.map((fruit, i) => {
                            return (
                                <li key={i}>
                                    The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/fruits/new">Create a new a fruit</a>
                    </nav>
                </div>
           </DefaultLayout>
        )
    }
}

module.exports = Index;