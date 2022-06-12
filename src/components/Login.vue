<script setup>
import { useAuth } from "../composables/useAuth"

const { loading, signup, isAuthenticated, } = useAuth() 

const handleSubmit = async ({ target }) => {
    const { email, password } = target
    await signup(email.value, password.value)
    console.log("Login success uwu")
}

</script>

<template>
    <div>
        {{ loading }}
        {{ isAuthenticated }}
        <form @submit.prevent="handleSubmit">
            <input type="text" name="email" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Sign up</button>
        </form>        
    </div>
</template>

<style >
    
</style>