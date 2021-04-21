
const http = require('http')

const server = http.createServer((req, res) => {
    //res.end('FullStack Master! !!')
    res.end(
        `
        <html>

            <head>

            <title> PureCSS </title>
            <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.5/build/pure-min.css" </link>

            </head>
            <body>
                <h1> PureCSS </h1>
                <p>
                    <a class="pure-button" href="#"> A Pure Button </a>
                    <table class="pure-table">
                        <thead>
                            <tr>
                                <th> # </th>
                                <th> Make </th>
                                <th> Model </th>
                                <th> Year </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th> 1 </th>
                                <th> Honda </th>
                                <th> Accord </th>
                                <th> 2009 </th>
                            </tr>

                            <tr>
                                <th> 2 </th>
                                <th> Toyota </th>
                                <th> Camry </th>
                                <th> 2012 </th>
                            </tr>

                            <tr>
                                <th> 3 </th>
                                <th> Hyundai </th>
                                <th> Elantra </th>
                                <th> 2010 </th>
                            </tr>

                        </tbody>
                    </table>
                </p>

            </body>

        </html>

        `)
})

server.listen(3000)