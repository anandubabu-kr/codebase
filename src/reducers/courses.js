const courses=()=> (courses=[],action)=>{
    switch (action.type){
        case 'FETCH_COURSES' :console.log('reducer : passed ')
            return action.payload;
        default : return courses
    }
}

export default courses