# from thirdweb import ThirdwebSDK

# sdk = ThirdwebSDK.from_private_key("0b0673e24c0d7a0e9fef05bfc82fb6a13fa0dd3c36e3de3eac54131e665a278d", "mumbai")

# contract = sdk.get_contract("0xbCbf3E16c51a4220B87F19c58594F57a4403cBb1")

# dol=1
# name="Rahul"
# district="Mumbai"
# police_station="Mumbai"
# police_station_code=123
# birth_date="12/12/1999"
# date_of_crime="12/12/2019"
# place_of_crime="Mumbai"
# description="Crime"



# data = contract.call("raiseFIR", dol, name, district, police_station, police_station_code, birth_date, date_of_crime, place_of_crime, description)











import requests
from io import BytesIO
url = 'http://localhost:3000/upload' # replace with your API endpoint URL




files = r'D:\Hackathon\Hackvengers\Test\temp\white paper.pdf'


# Define the request body as a dictionary
data = {'filePath': files}

# Send the POST request to the API
response = requests.post(url, json=data)

# Check if the request was successful
if response.ok:
    print('File uploaded successfully. Content ID:', response.text)
else:
    print('Error uploading file:', response.text)
