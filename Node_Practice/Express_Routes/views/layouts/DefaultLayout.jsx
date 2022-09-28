const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <title> {this.props.title}</title>
                </head>
                <body>
                <nav>
                        <a href={`/${this.props.foodGroup}`}>{this.props.foodGroup}</a>
                    </nav>
                    {this.props.children}
                    {/* available to any class property */}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;