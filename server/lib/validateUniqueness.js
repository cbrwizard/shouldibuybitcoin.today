import { isNilOrEmpty } from 'ramdasauce'

/**
* Is responsible for validating an uniqueness of a mongoose model field.
* Allows empty values.
* Also allows to check the uniqueness with an additional field.
* @note will need refactoring when the uniqueness should be checked for more
* than 2 fields in a combo.
*/
const validateUniqueness = (schema, path, modelName, additionalPath) => {
  let errorMessage
  if (additionalPath) {
    errorMessage = `Combination of ${path} and ${additionalPath} already exists`
  } else {
    errorMessage = `${path} already exists`
  }

  schema.path(path).validate(function(value, done) {
    const findObject = { [path]: value }
    if (additionalPath) {
      findObject[additionalPath] = this[additionalPath]
    }

    this.model(modelName).find(findObject, (err, docs) => {
      if (err) { return done(err) }
      if (isNilOrEmpty(value) || !docs.length) { return done(true) }

      const firstDuplicateIdIsSameId = docs[0]._id.equals(this._id)
      return done(firstDuplicateIdIsSameId)
    })
  }, errorMessage)
}

export default validateUniqueness
