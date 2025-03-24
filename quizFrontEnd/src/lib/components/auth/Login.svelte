<script lang="ts">
 import { ProgressRing } from '@skeletonlabs/skeleton-svelte';
    let getOtp : boolean = $state(true);
    let loading : boolean = $state(false);
    let email : HTMLInputElement = $state();
    let email_val : string = $state("email@email.com");
    let remainingTime : number = $state();
    
    // Send Request to get OTP to the server
    const sendOTP_request = () => {
        // CHECKS IF THE EMAIL IS AN EMAIL, IF IT IS, IT SENDS A REQUEST TO THE SERVER
        if(email.value == ""){
            alert("Email cannot be empty")
        }
        else{
            if(email.checkValidity()){
                //LOADER SHOULD BE ACTIVE WHEN GETTING THE OTP
                loading = true;
                //MOCK OTP REQUEST - THIS FUNCTION SHOULD BE ASYNCHRONOUS
                // A POST REQUEST WITH THE EMAIL TO THE SERVER
                setTimeout(() => { 
                    getOtp = true; //OTP HAS BEEN SENT SUCCESSFULLY.
                    console.log("OTP has been sent");
                    loading = false
                },1000)
            }
        }
    }

    
    const countDownTimer = (duration:number) : void => {
             remainingTime = duration;

            const intervalId = setInterval(() => {
                console.log(`Time remaining: ${remainingTime} seconds`);
                remainingTime--;

                if (remainingTime <= 0) {
                clearInterval(intervalId);
                console.log("Countdown finished");
            }
        }, 1000);
    }

    countDownTimer(10);
</script>


<div>
    <h1 class="text-2xl font-bold mb-6 text-primary-500">
        Login
    </h1>
    <!-- Your login form content here -->
     <form action="">
        {#if !getOtp}
                <div>
                    <label for="email">Email</label><br>
                    <input type="email" name="email" id="email" placeholder="Enter email"
                            bind:this={email}
                            bind:value={email_val}
                            class="w-full text-sm p-2 
                                    border-2 border-primary-500 rounded-md
                                    mb-5    
                                    ">
                </div>
                <div class="flex justify-end">
                    <button onclick={sendOTP_request} class='btn preset-outlined-primary-500 '>
                        {#if loading} 
                        <span>Get OTp</span>
                        <ProgressRing value={null} size="size-7" meterStroke="stroke-primary-600-400" trackStroke="stroke-primary-50-950" />
                        {:else} 
                                <span>Get OTp</span>
                                <span>&rarr;</span> 
                        {/if}
                    </button>
                </div>
        {:else}
                <div>
                    <label for="otp">Enter OTP</label><br>
                    <input type="number" placeholder="Enter OTp" name="otp"
                                class="w-full max-w-2xs
                                text-lg p-2 
                                border-2 border-primary-500 rounded-md
                                mb-5    
                                "       
                    />
                </div>
                <div class="flex justify-between">
                    <div>
                        <button class="text-xs disabled">
                           Resend OTP 
                        </button>

                        <span>{remainingTime}</span> sec
                    </div>
                    <input type="submit" value="Login" class="btn preset-outlined-primary-500">
                </div>
        {/if}

     </form>
</div>

<style>

</style>