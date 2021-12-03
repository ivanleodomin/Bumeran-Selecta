export default function validate(value){
    let errors
     = {}
    if (!value.country){
        errors.country = 'Country field is required'
    }
    if (!value.location){
        errors.location = 'Country field is required'
    }
    if (!value.vacants){
        errors.vacants = 'Country field is required'
    }
    if (!value.area){
        errors.area = 'Country field is required'
    }
    if (!value.seniority){
        errors.seniority = 'Country field is required'
    }
    if (!value.description){
        errors.description = 'Country field is required'
    }

    return errors
}


//email 
// the string to be more than 0 chars 

//password 
