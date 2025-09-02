import type { Actions } from './$types';

export const actions = {
	login: async (event) => {
		const formData = await event.request.formData();
        // Convert to an object for easier inspection
    const data = Object.fromEntries(formData.entries());

    console.log('Login form data:', data);
	},
	register: async (event) => {
		// TODO register the user
	}
} satisfies Actions;