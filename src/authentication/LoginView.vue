<template>
    <div class="min-h-screen flex items-center justify-center bg-slate-50">
        <!-- Main container -->
        <div class="container mx-auto px-6 py-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                
                <!-- Left Section - Welcome -->
                <div class="space-y-8">
                    <!-- Three logos -->
                    <div class="flex items-center gap-6 mb-8">
                        <img src="../assets/BCPO1.png" alt="Police Station 1" class="w-20 h-20 object-contain" />
                        <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
                        <img src="../assets/butuanlogo.png" alt="Butuan City" class="w-38 h-20 object-contain" />
                    </div>
                    
                    <!-- Welcome Text -->
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-wider mb-3 text-slate-600">Welcome to</p>
                        <h1 class="text-5xl font-bold mb-6 leading-tight text-slate-800">
                            AAR<br/>
                            Monitoring System
                        </h1>
                        <div class="w-16 h-1 bg-blue-600 mb-6"></div>
                        <p class="text-lg text-slate-600 leading-relaxed max-w-lg">
                            Secure access to the <span class="font-bold text-slate-800">Police Station 1</span> AAR monitoring dashboard. Track, manage, and monitor officer reports efficiently.
                        </p>
                    </div>
                </div>
                
                <!-- Right Section - Login Card -->
                <div class="bg-white rounded-lg border border-slate-200 shadow-sm p-8 w-full max-w-md mx-auto">
                    <!-- Login Header -->
                    <div class="flex items-center gap-3 mb-6">
                        <div class="rounded-lg p-2.5 bg-blue-600">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-slate-800">Officer Login</h2>
                            <p class="text-sm text-slate-600">Enter your credentials to access the dashboard</p>
                        </div>
                    </div>
            
            <!-- Dropdown for selecting login type -->
            <div class="mb-6">
                <label class="block text-sm font-semibold mb-2 text-slate-600">Login As</label>
                <div class="relative">
                    <select 
                        v-model="loginType" 
                        class="w-full px-4 py-3 text-sm border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition appearance-none cursor-pointer text-slate-800"
                    >
                        <option value="administrator">Administrator</option>
                        <option value="user">Officer / Personnel</option>
                    </select>
                    <div class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Administrator Login Form -->
            <div v-if="loginType === 'administrator'" class="space-y-5">
                <!-- Error Message -->
                <div v-if="errorMessage" class="border-l-4 border-red-600 bg-red-50 p-3 rounded-lg">
                    <p class="text-sm text-red-700">{{ errorMessage }}</p>
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2 text-slate-600">
                        <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        Email Address
                    </label>
                    <input 
                        v-model="email" 
                        type="email" 
                        placeholder="cadbcps1@gmail.com"
                        class="w-full px-4 py-3 text-sm border-2 border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition text-slate-800"
                        @keyup.enter="handleAdminLogin"
                    />
                </div>
                <div>
                    <label class="block text-sm font-semibold mb-2 text-slate-600">
                        <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                        </svg>
                        Password
                    </label>
                    <div class="relative">
                        <input 
                            v-model="password" 
                            :type="showPassword ? 'text' : 'password'"
                            placeholder="••••••••••••••••"
                            class="w-full px-4 py-3 pr-12 text-sm border-2 border-slate-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition text-slate-800"
                            @keyup.enter="handleAdminLogin"
                        />
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition"
                        >
                            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="flex items-center justify-between">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" class="w-4 h-4 rounded accent-blue-600">
                        <span class="ml-2 text-sm text-slate-600">Remember me</span>
                    </label>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
                
                <button 
                    @click="handleAdminLogin"
                    :disabled="isLoading"
                    class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 text-sm rounded-lg transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm">
                    <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-if="isLoading">Accessing...</span>
                    <span v-else>Access Dashboard →</span>
                </button>
            </div>

            <!-- User Login (Proceed only) -->
            <div v-else class="space-y-5">
                <!-- Error Message -->
                <div v-if="errorMessage" class="border-l-4 border-red-600 bg-red-50 p-3 rounded-lg">
                    <p class="text-sm text-red-700">{{ errorMessage }}</p>
                </div>

                <div class="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg">
                    <p class="text-base font-semibold mb-2 text-slate-800">Officer/Personnel Access</p>
                    <p class="text-sm text-slate-600">Click proceed to submit your AAR</p>
                </div>
                <button 
                    @click="handleUserProceed"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 text-sm rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Proceed
                </button>
            </div>
            
            <!-- Footer -->
            <div class="mt-6 pt-5 border-t border-slate-200 text-center">
                <div class="flex items-center justify-center gap-2 mb-2">
                    <svg class="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="text-xs font-semibold text-slate-600">Secure Police Officer Access</p>
                </div>
                <p class="text-xs text-slate-400">BCPO AAR Monitoring System © 2026</p>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'

const router = useRouter()
const loginType = ref('administrator')

// Login fields
const email = ref('')
const password = ref('')
const showPassword = ref(false)

// Messages
const errorMessage = ref('')
const isLoading = ref(false)

// Clear error message when switching login types
watch(loginType, () => {
    errorMessage.value = ''
})

const handleAdminLogin = async () => {
    errorMessage.value = ''
    isLoading.value = true

    // Validation
    if (!email.value || !password.value) {
        errorMessage.value = 'Please enter email and password'
        isLoading.value = false
        return
    }

    try {
        // Sign in with Supabase Auth
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        console.log('Login response:', { data, error })

        if (error) {
            errorMessage.value = error.message || 'Invalid email or password'
            isLoading.value = false
            return
        }

        if (data.user) {
            // Login successful
            console.log('Admin login successful:', { email: data.user.email })
            
            // Store user info locally for reference
            localStorage.setItem('currentAdmin', JSON.stringify({ 
                email: data.user.email,
                id: data.user.id 
            }))
            
            router.push('/admin-dashboard')
        }
    } catch (err) {
        console.error('Login error:', err)
        errorMessage.value = 'An error occurred during login'
    } finally {
        isLoading.value = false
    }
}

const handleUserProceed = () => {
    console.log('User proceeding to personnel dashboard...')
    // Just navigate to user dashboard without affecting admin session
    router.push('/user-dashboard')
}

onMounted(() => {
    // Don't clear sessions - allow independent access to both dashboards
})
</script>
