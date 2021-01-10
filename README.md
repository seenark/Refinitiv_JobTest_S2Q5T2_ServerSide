### This Project build from Express.js

how to run this project

```
npm install
```

```
npm run start
```

### API Info

server will run on PORT 3000
if run on local machine {host} is localhost:3000

save data use POST Http method to
`{host}/calculator/save`
the data should be sent in http body in json format
example:

```
  {
    "name": "PYCH",
    "data": {
      "a": "12",
      "b": "3",
      "btnState": "0"
    }
  }
```

load saved data use GET Http method to

`{host}/calculator/load/:name`

you will get data like this
example:

```
  {
    "name": "PYCH",
    "data": {
      "a": "12",
      "b": "3",
      "btnState": "0"
    }
  }


```
