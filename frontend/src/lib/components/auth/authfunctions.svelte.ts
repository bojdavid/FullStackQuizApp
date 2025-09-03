import { goto } from "$app/navigation";
import { error } from "@sveltejs/kit";
//Common style exports
export   const buttonStyle: string =
"w-full py-3 rounded-md  text-white text-xl font-semibold  transition duration-200";



export const values = $state({
    currentStep: 1,
    redirectSuccessLoader : false,
    errorMessage : "",
    isError : false
})

export const increaseSteps = (end:boolean = false) => {
    if (end){
        values.currentStep += 1
        values.redirectSuccessLoader = true
        return
    }
    if (values.currentStep < 3) {
      values.currentStep += 1;
    } else {
      values.currentStep = 1;
    }
  };

export  const decreaseSteps = () => {
    if (values.currentStep > 1) {
      values.currentStep -= 1;
    } else {
      values.currentStep = 1;
    }
  };

export  const loginSubmit = async (event: any) => {
    const form = event.currentTarget;
    
    // 1. Let the browser validate
    if (!form.checkValidity()) {
        return; // invalid → stop, browser shows tooltip
    }

    event.preventDefault();

    if (values.currentStep === 1) {
        // Email/username step - just move to next step
        values.currentStep = 2;
    } else if (values.currentStep === 2) {
        // Password is valid - proceed with login
        values.redirectSuccessLoader = true;
        values.currentStep = 3; // Move to loading/success step
        
        try {
            let testerror = false

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 3000));
            if(testerror){
                throw new Error("Login failed - test error");
            }else{
                // Redirect on success
                goto("./dashboard");
            }
        } catch (error) {
            // Handle error - reset state
            values.redirectSuccessLoader = false;
            values.isError = true;
            values.currentStep = 1; // Go back to first step
            values.errorMessage = `${error}`
            setTimeout(() => {values.isError= false}, 2000)
        }
    }
};