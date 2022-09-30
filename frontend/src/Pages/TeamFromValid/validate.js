const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    }
    if (!values.agree) {
      errors.agree = "Agree to join all new projects"
    }
    if (!values.favoriteColor) {
      errors.favoriteColor = 'Required'
    } 
    // else if (values.favoriteColor === 'admin') {
    //   errors.favoriteColor = 'Not green! Gross!'
    // }
    if (!values.notes) {
      errors.notes = 'Required'
    }
    return errors
  }
  export default validate
  