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
    if (!values.role) {
      errors.role = 'Required'
    } 
    // else if (values.role === 'admin') {
    //   errors.role = 'Not green! Gross!'
    // }
    if (!values.notes) {
      errors.notes = 'Required'
    }
    return errors
  }
  export default validate
  