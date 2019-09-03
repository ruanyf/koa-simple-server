A simple koa server demo of logging HTTP request Headers and body. It could also be used as a basis for modifications to suit your needs.

```bash
$ npm install
$ npm start
```

Open another terminal window to send a HTTP request.

```bash
$ curl -d 'hello=world' -X POST http://127.0.0.1:3000
```

Server output.

```bash
> node server.js

listening Port 3000...

  <-- POST /


## Header

{
  "method": "POST",
  "url": "/",
  "header": {
    "host": "127.0.0.1:3000",
    "user-agent": "curl/7.65.3",
    "accept": "*/*",
    "content-length": "11",
    "content-type": "application/x-www-form-urlencoded"
  }
}

## Body

{"hello":"world"}
  --> POST / 200 18ms 0b
```

