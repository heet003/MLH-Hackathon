const express = require('express')
const process = require('process')
const minimist = require('minimist')
const bodyParser = require('body-parser');
const { Web3Storage, getFilesFromPath } = require('web3.storage')
require('dotenv').config()



const app = express();

app.use(bodyParser.json());


// Endpoint to upload files
app.post('/upload', async (req, res) => {
  const args = minimist(process.argv.slice(2))

  // take the token from the environment variable
  const token =  process.env.WEB3_STORAGE_TOKEN
  if (!token) {
    return res.status(400).send('A token is needed. You can create one on https://web3.storage')
  }

  const { filePath } = req.body

  if (!filePath) {
    return res.status(400).send('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })
  const files = []


    const pathFiles = await getFilesFromPath(filePath)
    files.push(...pathFiles)

    console.log(`Uploading ${files.length} files`)
    const cid = await storage.put(files)
    console.log('Content added with CID:', cid)

    res.send(cid)
  
})

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
