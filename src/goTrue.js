import GoTrue from 'gotrue-js';

export const auth = new GoTrue({
    APIUrl: import.meta.env.VITE_IDENTITY_URL,
    audience: "",
    setCookie: true
})