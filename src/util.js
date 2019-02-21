// https://stackoverflow.com/a/22300561
function JSONfn(obj) {
  // Holds functions we encounter.
  var functions = [];
  var placeholder = ">>>F<<<";

  // This handler just records a function object in `functions` and returns the
  // placeholder as the value to insert into the JSON structure.
  function handler(key, value) {
    if (value instanceof Function) {
      functions.push(value);
      return placeholder;
    }
    return value;
  }

  // We stringify, using our custom handler.
  var pre = JSON.stringify(obj, handler, 4);

  // Then we replace the placeholders in order they were encountered, with
  // the functions we've recorded.
  var post = pre.replace(
    new RegExp('"' + placeholder + '"', "g"),
    functions.shift.bind(functions)
  );

  return post;
}

export default JSONfn;
