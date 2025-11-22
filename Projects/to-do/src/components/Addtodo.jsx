function Addtodo() {

  return (

    <div class="row">
      <div class="col-4">
        <input type="text" placeholder="enter todo here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" className="btn btn-success">Success</button>
      </div>
    </div>

  );
}

export default Addtodo;