// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colorful Node.js App</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #ff0066, #33ccff);
                font-family: Arial, sans-serif;
                color: #fff;
                text-align: center;
                animation: bgAnimation 5s infinite alternate;
            }
            h1 {
                font-size: 4em;
                margin: 0;
                animation: colorChange 2s infinite alternate;
            }
            p {
                font-size: 1.5em;
                animation: colorChange 3s infinite alternate;
            }
            @keyframes bgAnimation {
                0% { background: linear-gradient(135deg, #ff0066, #33ccff); }
                100% { background: linear-gradient(135deg, #ffcc33, #6633cc); }
            }
            @keyframes colorChange {
                0% { color: #fff; }
                100% { color: #ffcc33; }
            }
        </style>
    </head>
    <body>
        <div>
            <h1>Hello!</h1>
            <p>The only way to do great work is to love what you do...🌈</p>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

