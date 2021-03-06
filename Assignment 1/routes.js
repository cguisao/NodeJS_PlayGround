
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Usernames</title></head>');
        res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>'
        );
        return res.end();
    }

    if(url === '/create-user' &&  method === 'POST'){
        const body = [];
        req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
        return req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                console.log(message);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
                
            });
        });
    }
}

module.exports = requestHandler;