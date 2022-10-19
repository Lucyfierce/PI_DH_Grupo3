const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//Edit
edit: (req, res) => {
    let id = req.params.id
    let productToEdit = products.find(product => product.id == id)
    res.render('pageProductEdit', {productToEdit})
}
//Update POST
update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find(product => product.id == id)
    let image;
    if (req.files[0] != undefined){
        image = req.files [0].filename
    }else{
        image = productToEdit.image
    }
    productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image,
    }}