import type { Profile } from "$lib/types/profile"

export const userProfile : Profile = $state({
    firstname : "BOJ",
    lastname : "David",
    email : "email@email.com",
    gender : "male",
    profilePicture : ""

})


export const quizGlobal = $state({
    id: ""
})


export const setUserProfile = (firstname: string, lastname:string, email:string, gender:string) =>{
    userProfile.firstname = firstname
    userProfile.lastname = lastname
    userProfile.email = email
    userProfile.gender = gender
}