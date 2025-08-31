import type { Handle } from '@sveltejs/kit';


export const handle: Handle = async ({ event, resolve }) => {
    const user_cookie = event.cookies.get("user");
    if (user_cookie) {
      // update the locals object
      //event.locals.user = await fetch_user(user_cookie); ----- fetch user data and store it in there
      console.log(event.locals)
      event.locals.user = {firstname:"BOJ", lastname:"David"}
    }
    return resolve(event);
  }