module.exports = class TodoController {
  static addTodo(req,res){
    console.log(req.body);
    res.redirect('/');
  }
}
