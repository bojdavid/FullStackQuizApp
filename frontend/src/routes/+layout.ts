import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, locals }) => {
    //console.log(locals)
    return {
      user: "locals.user",
    };
  }