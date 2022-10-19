 
router.get('/edit/:id', formEditController.edit); 
router.put('/edit/:id', upload.any(), formEditController.update); 