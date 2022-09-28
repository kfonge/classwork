const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { meats } = this.props

        return (
            <DefaultLayout title="All Meat" foodGroup="meats">
                    <h1>Meats Index Page</h1>
                    <ul id="meats-index">
                        {meats.map((meat) => {
                            return (
                                <li key={meat._id}>
                                    This cut of <a href={`/meats/${meat._id}`}>{meat.name}</a> is a {meat.type}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/meats/new">Create a new a meat</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;