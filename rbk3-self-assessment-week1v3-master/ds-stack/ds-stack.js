var Stack = function() {
    this._storage = {}
    this.counter = 0;
    this.add = function(value){
      counter ++ 
      this._storage[counter]=value
      console.log(this._storage)
    };
    this.remove = function() {
      counter --
      delete this._storage[counter]
      console.log(this._storage)
    };
    return Stack
  };