// https://github.com/garth/state-forms/tree/master/src/helpers

function extractObject(object) {
  return Object.keys(object).reduce((newObject, key) => {
    if (object[key] && object[key] === Object(object[key])) {
      if (Array.isArray(object[key])) {
        newObject[key] = extractArray(object[key]);
      } else if ("value" in object[key]) {
        newObject[key] = object[key].value;
      } else if ("isValid" in object[key] && (object[key].isValid.isValid === false)) {
        newObject.invalid = {...object[key].isValid}
      } else {
        newObject[key] = extractObject(object[key]);
      }
    }

    return newObject;
  }, {});
}

function extractArray(array) {
  return array.map(object => {
    return extractObject(object);
  });
}

export function formToJSON(form) {
  return extractObject(form);
}

export function getFormFields(object, currentPath = [], allFields = {}) {
  return Object.keys(object).reduce((allFields, key) => {
    currentPath.push(key);
    if (Array.isArray(object[key])) {
      object[key].forEach((formItem, index) => {
        currentPath.push(index);
        getFormFields(object[key][index], currentPath, allFields);
        currentPath.pop();
      });
    } else if (object[key] === Object(object[key]) && "value" in object[key]) {
      allFields[currentPath.join(".")] = object[key];
    } else if (object[key] === Object(object[key])) {
      getFormFields(object[key], currentPath, allFields);
    }
    currentPath.pop();

    return allFields;
  }, allFields);
}

export function getInvalidFormFields(form) {
  const formFields = getFormFields(form);
  

  // console.log(`getInvalidFormFields(form) for ${form}`)
  return Object.keys(formFields)
    .filter(key => {
      return !(formFields[key].isValid === true);
    })
    .reduce((invalidFields, key) => {
      invalidFields[key] = formFields[key];
      // console.log(`invalidFields.${key} = ${JSON.stringify(formFields[key])}`)
      // console.log('\n')
      // console.dir(invalidFields)
      return invalidFields;
    }, {});
}

/*
function extractObject(object) {
  return Object.keys(object).reduce((newObject, key) => {
    if (object[key] && object[key] === Object(object[key])) {
      if (Array.isArray(object[key])) {
        newObject[key] = extractArray(object[key]);
      } else if ("value" in object[key]) {
        newObject[key] = object[key].value;
      } else {
        newObject[key] = extractObject(object[key]);
      }
    }

    return newObject;
  }, {});
}

function extractArray(array) {
  return array.map(object => {
    return extractObject(object);
  });
}

function formToJSON(form) {
  return extractObject(form);
}

function getFormFields(object, currentPath = [], allFields = {}) {
  return Object.keys(object).reduce((allFields, key) => {
    currentPath.push(key);
    if (Array.isArray(object[key])) {
      object[key].forEach((formItem, index) => {
        currentPath.push(index);
        getFormFields(object[key][index], currentPath, allFields);
        currentPath.pop();
      });
    } else if (object[key] === Object(object[key]) && "value" in object[key]) {
      allFields[currentPath.join(".")] = object[key];
    } else if (object[key] === Object(object[key])) {
      getFormFields(object[key], currentPath, allFields);
    }
    currentPath.pop();

    return allFields;
  }, allFields);
}

function getInvalidFormFields(form) {
  const formFields = getFormFields(form);

  return Object.keys(formFields)
    .filter(key => {
      return !(formFields[key].isValid === true);
    })
    .reduce((invalidFields, key) => {
      invalidFields[key] = formFields[key];

      return invalidFields;
    }, {});
}

let test1 = (fob) => [extractObject, formToJSON, getFormFields, getInvalidFormFields].map( fx => fx(fob) )
*/