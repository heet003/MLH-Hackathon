const { NFTStorage, File, Blob } = require("nft.storage");
const fs = require("fs").promises;

const NFT_STORAGE_TOKEN = "YOUR_NFT_STORAGE"
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

async function storeBlob() {
    try {
      const imagePath = "/home/dev/Code/Hackathon/Web3/Hackvengers/temp/Screenshot from 2024-02-18 00-21-42.png";
  
      // Read the binary image data from the file
      const imageBuffer = await fs.readFile(imagePath);
  
      const imageFile = new File(
        [imageBuffer],
        "test.png",
        { type: "image/png" }
      );
  
      const metadata = await client.store({
        name: "My NFT",
        description: "An example NFT stored using NFT.storage",
        image: imageFile,
      });
  
      console.log(metadata);
    } catch (error) {
      console.error("Error storing NFT:", error.message);
    }
  }

storeBlob();
