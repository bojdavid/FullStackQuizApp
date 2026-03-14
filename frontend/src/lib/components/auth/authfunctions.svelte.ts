import { goto } from "$app/navigation";
import { authState } from "$lib/store/user.svelte";

// Common style exports
export const buttonStyle: string = "w-full py-3 rounded-md text-white text-xl font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-center items-center gap-2";

export const inputStyle: string = "w-full bg-light-bg dark:bg-dark-bg border border-light-secondary-accent/20 dark:border-dark-secondary-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
export const labelStyle: string = "block text-sm font-medium text-light-tetiary-accent dark:text-dark-tetiary-accent/80 mb-1.5";

export const loginSubmit = async (event: Event, email: string, password: string) => {
    event.preventDefault();
    
    const form = event.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    authState.isLoading = true;
    authState.error = null;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock success
        $effect.root(() => {
             authState.isAuthenticated = true;
             authState.isLoading = false;
        });

        authState.isAuthenticated = true;
        authState.isLoading = false;

        // Redirect on success
        goto("/dashboard");
    } catch (error: any) {
        authState.error = error.message || "Failed to sign in. Please try again.";
        authState.isLoading = false;
        setTimeout(() => {
            if(authState.error) authState.error = null;
        }, 3000);
    }
};

export const signupSubmit = async (event: Event, name: string, email: string, password: string) => {
    event.preventDefault();
    
    const form = event.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    authState.isLoading = true;
    authState.error = null;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock success directly logs them in for smooth flow
        authState.isAuthenticated = true;
        authState.isLoading = false;

        // Redirect on success
        goto("/dashboard");
    } catch (error: any) {
        authState.error = error.message || "Failed to create account. Please try again.";
        authState.isLoading = false;
        setTimeout(() => {
            if(authState.error) authState.error = null;
        }, 3000);
    }
};