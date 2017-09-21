module.exports = function(app) {
    var controller = app.controllers.contato;
    app.get('/contatos', controller.contatos);
    app.get('/contatos/:id', controller.obtemContatos);
    app.delete('/contatos/:id', controller.removeContato);
}
