
function Dot(){

  this.get = function dot_get (obj, path, default_value){
    var keys = path.split('.');
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!obj || !hasOwnProperty.call(obj, key)) {
        obj = default_value;
        break;
      }
      obj = obj[key];
    }
    return obj;
  };

  this.set = function dot_set (obj, path, value){
    var keys = path.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
      var key = keys[i];
      if (obj[key] === undefined || obj[key] === null) obj[key] = {};
      obj = obj[key];
    }
    obj[keys[i]] = value;
    return value;
  };

  this.dot = function array_dot (obj, path, value) {
    if (arguments.length === 3) return dot_set.apply(null, arguments);
    return dot_get.apply(null, arguments);
  };


}
