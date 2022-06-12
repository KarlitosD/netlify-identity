import { reactive, watchEffect, computed, ref, readonly, toRefs } from "vue"
import { auth } from "../goTrue"

const state = reactive({
    user: null,
    loading: false,
    error: null,
})

export const useAuth = () => {
    const isAuthenticated = computed(() => state.user !== null)

    /** 
       * @param {string} email 
       * @param {string} password 
    */ 
    const signup = async (email, password) => {
        state.loading = true
        try {
            const user = await auth.login(email, password)
            state.user = user
        } catch (error) {
            state.error = error
        } finally {
            state.loading = false
        }
    }

    console.log(import.meta.env.VITE_IDENTITY_URL)

    watchEffect(() => {
        console.log(state.error)
    })

    watchEffect(() => {
        console.log(state.user)
    })


    return { ...toRefs(state), isAuthenticated, signup }
}