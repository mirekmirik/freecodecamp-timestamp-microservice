
const express = require('express')
const app = express()
const PORT = 3000


express.urlencoded({ extended: true })


let responseObject = {}
app.get('/api/timestamp/:input', (req, res) => {
    let input = req.params.input

    if (input.includes('-')) {
        responseObject['unix'] = new Date(input).getTime()
        responseObject['utc'] = new Date(input).toUTCString()
    } else {
        input = parseInt(input)
        responseObject['unix'] = new Date(input).getTime()
        responseObject['utc'] = new Date(input).toUTCString()
    }

    if (!responseObject['unix'] || !responseObject['utc']) {
        res.json({
            error: "invalid date"
        })
    }




    res.json(responseObject)

})


app.listen(PORT, () => console.log(`Server has been started on PORT ${3000}`))