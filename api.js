var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


var post = function(){
    var randomSlug = faker.random.uuid();
    var randomName = faker.name.findName();
    var randomSentences = faker.lorem.sentences();
    var randomDate = faker.date.past();
    var randomImage = faker.image.avatar();
    
    return {
        id : randomSlug,
        nombre : randomName,
        contenido : randomSentences,
        fecha : randomDate,
        image : randomImage
    }
}

var product = function(){
    var randomSlug = faker.address.zipCode();
    var randomName = faker.random.word();
    var randomDate = faker.date.future();
    var randomCompany = faker.company.companyName();
    
    return {
        "id" : randomSlug,
        "nombre" : randomName,
        "fecha de vencimiento" : randomDate,
        "compañia" : randomCompany        
    }
}
app.get('/', function(req, res){
    res.send('MI PRIMER SERVIDOR! ');
})

app.get('/posts',function(req, res){
    var cantidad = _.random(5,10);
    var posts = _.times(cantidad, post );
    res.json(posts);
})

app.get('/products',function(req,res){
    var cantidad = _.random(5,10);
    var products = _.times(cantidad, product);
    res.json(products);
})

app.listen(3000)
