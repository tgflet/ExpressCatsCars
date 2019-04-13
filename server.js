const express = require("express"),
    fs = require("fs"),
    bp=require("body-parser"),
    port = 2107,
    app= express();

app.use(express.static(__dirname + "/static"));
app.use(bp.json());

app.get("/", (req, res)=>{
    fs.readFile('./templates/index.html', 'utf8', (err, data)=>{
        if(err){
            console.log("Something went wrong", err);
        }
        res.send(data);
    });
});
app.get("/cats", (req, res)=>{
    fs.readFile('./templates/cats.html', 'utf8', (err, data)=>{
        if(err){
            console.log("Something went wrong", err);
        }
        res.send(data);
    });
});
app.get("/cars", (req, res)=>{
    fs.readFile('./templates/cars.html', 'utf8', (err, data)=>{
        if(err){
            console.log("Something went wrong", err);
        }
        res.send(data);
    })
})
app.get("/addCar", (req, res)=>{
    fs.readFile('./templates/form.html', 'utf8', (err, data)=>{
        if(err){
            console.log("Something went wrong", err);
        }
        res.send(data);
    })
})
app.listen(port, () =>{
    console.log(`listening on port: ${port}`);
});

