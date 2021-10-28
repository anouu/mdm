import express from 'express'
import cart from '../data/cart.json'

const app = express()
app.use(express.json())

app.get('/sampleCart', (req, res) => {
  res.json({ cart })
})

export default {
  path: '/api',
  handler: app,
}
