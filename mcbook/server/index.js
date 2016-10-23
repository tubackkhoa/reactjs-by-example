const path = require('path')
const express = require('express')
const app = express()
const uuid = require('uuid')
const bodyParser = require('body-parser')

const notes = {
  'a236c29f-2685-4ab4-b181-e58c10c45550': {
    id: 'a236c29f-2685-4ab4-b181-e58c10c45550',
    content: "Hello world!",
    timestamp: 1467901970847,
  },
  'a12b75ad-e06b-41f3-abbb-f6dcfae5c969': {
    id: 'a12b75ad-e06b-41f3-abbb-f6dcfae5c969',
    content: "Hi globe...",
    timestamp: 1467901976596,
  },
  '5c500147-9525-4269-bd9d-d04ad44b21b3': {
    id: '5c500147-9525-4269-bd9d-d04ad44b21b3',
    content: "",
    timestamp: 1467901977847,
  },
}

app.set('port', (process.env.PORT || 3000))

app.use(express.static('../public'))
app.use(bodyParser.json())

// Additional middleware which will set headers that we need on each request.
app.use((req, res, next) => {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  // Disable caching so we'll always get the latest data.
  res.setHeader('Cache-Control', 'no-cache')

  // delay request
  setTimeout(next, process.env.DELAY || 250)  
})

app.get('/api/notes', (req, res) => {
  res.send(
    Object.keys(notes)
      .map((key) => notes[key])
      .sort((a, b) => b.timestamp - a.timestamp)
  )
})

app.post('/api/notes', (req, res) => {
  const note = {
    id: uuid.v4(),
    content: "",
    timestamp: Date.now(),
  }
  notes[note.id] = note

  res.send(note)
})

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
  const note = notes[id]

  if (!note) {
    return res.sendStatus(404)
  }

  delete notes[id]
  res.send(note)
})

app.put('/api/notes/:id', (req, res) => {
  const note = notes[req.params.id]

  if (!note) {
    return res.sendStatus(404)
  }

  note.content = req.body.content
  res.send(note)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

app.listen(app.get('port'), () => {
  //eslint-disable-next-line no-console
  console.log('`Developing a Redux Edge` notes app listening on port ' + app.get('port') + '!')
})
