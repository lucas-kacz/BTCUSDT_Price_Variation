# BTCUSDT_Price_Variation
 
The purpose of this project is to retrieve the BTCUSDT pair price every 10 minutes and send it to an online hosted MySQL table. Those values are then sorted and when an anomaly is detected a message is sent to the user's phone through Telegram. The SQL table is displayed on a NodeJS app with all the values and the according anomalies.

## Installation

To run this project on your own machine you first need to clone the repo and type `npm start`.
Once this step is done, then open a new tab in your browser and type http://localhost:3000/sample_data. 
You should see a page like this : [Welcome Page](![Uploading Capture.PNG…])

## How to use ?

Once on the main page, you can access the BTCUSDT pair price every 10 mins 
