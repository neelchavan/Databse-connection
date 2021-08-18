import express from 'express'
import './db/mongoose.js'

const app = express()
const port=4000

app.get('/', (req, res) => {
    res.send('Simple Databse Connection Tutorial')
})

app.listen(port, () => {
    console.log(`Server is up on port, ${port}`);
})
