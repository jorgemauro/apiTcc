module.exports = function(app){
    app.get('/tarefas', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('tarefas.');
    });
    app.post("/pagamentos/pagamento",function(req, res) {
        var pagamento = req.body;
      console.log(pagamento);
      res.send('ok');
    }); 
  }