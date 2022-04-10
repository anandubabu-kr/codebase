import * as api from '../api/courses'

// create action creator 

export const getCourseList=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchCourselist()
        dispatch({type:'FETCH_COURSES',payload:data})
    }catch(err){
        console.error(err)
    }
}