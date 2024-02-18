import { Web3Storage, getFilesFromPath } from 'web3.storage'

async function uploadFiles(filenames, token) {
  if (!token) {
    throw new Error('A token is needed. You can create one on https://web3.storage')
  }

  const storage = new Web3Storage({ token })
  const files = []

  for (const path of filenames) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
}

export default uploadFiles;
