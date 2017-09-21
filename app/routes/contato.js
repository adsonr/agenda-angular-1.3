module.exports = function(app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.contatos);
    app.get('/contatos/:id', controller.obtemContatos);
    app.delete('/contatos/:id', controller.removeContato);

    // app.get('/contatos', controller.listaTodos);
    // app.post('/contatos', controller.salvaContato);
    // app.get('/contatos/:id', controller.obtemContato);
    // app.delete('/contatos/:id', controller.removeContato);
    
}


// module.exports = function (app) {
//     var controller = app.controllers.contato;
//     app.route('/contatos')
//         .get(controller.listaTodos)
//         .post(controller.salvaContato);
//     app.route('/contatos/:id')
//         .get(controller.obtemContato)
//         .delete(controller.removeContato);
// };
