<template>
    <div class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>

        <!-- Main container -->
        <div class="container mx-auto px-6 relative z-10 h-full flex items-center">
            <div class="max-w-5xl mx-auto w-full">
                <div class="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    <!-- Diagonal split design -->
                    <div class="absolute inset-0 z-0">
                        <div class="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-br from-blue-600/20 to-indigo-700/20 transform -skew-x-12 origin-top-left"></div>
                    </div>

                    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                        <!-- Left Section - Welcome -->
                        <div class="p-8 lg:p-10 flex flex-col justify-center space-y-6">
                            <!-- Three logos -->
                            <div class="flex items-center gap-3">
                                <img src="../assets/BCPO1.png" alt="Police Station 1" class="w-12 h-12 object-contain opacity-90" />
                                <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-12 h-12 object-contain opacity-90" />
                                <img src="../assets/butuanlogo.png" alt="Butuan City" class="w-24 h-12 object-contain opacity-90" />
                            </div>
                            
                            <!-- Welcome Text -->
                            <div>
                                <h1 class="text-4xl lg:text-5xl font-bold mb-3 leading-tight text-white">
                                    WELCOME<br/>
                                    BACK!
                                </h1>
                                <div class="w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent mb-4"></div>
                                <p class="text-base text-blue-100 leading-relaxed max-w-md opacity-90">
                                    Secure access to Police Station 1 AAR monitoring dashboard. Track and manage officer reports efficiently.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Right Section - Login Card -->
                        <div class="bg-slate-900/80 backdrop-blur-sm p-8 lg:p-10 flex flex-col justify-center">
                            <!-- Login Header -->
                            <div class="mb-6">
                                <h2 class="text-2xl font-bold text-white mb-1">Login</h2>
                                <p class="text-sm text-slate-400">Enter your credentials to continue</p>
                            </div>
            
                            <!-- Dropdown for selecting login type -->
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1.5 text-slate-300">Login As</label>
                                <div class="relative">
                                    <select 
                                        v-model="loginType" 
                                        class="w-full px-4 py-3 text-sm bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer text-white"
                                    >
                                        <option value="administrator">Administrator</option>
                                        <option value="user">Officer / Personnel</option>
                                    </select>
                                    <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Administrator Login Form -->
                            <div v-if="loginType === 'administrator'" class="space-y-3">
                                <!-- Error Message -->
                                <div v-if="errorMessage" class="bg-red-500/10 border border-red-500/50 p-2.5 rounded-lg">
                                    <p class="text-sm text-red-400">{{ errorMessage }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium mb-1.5 text-slate-300">Email</label>
                                    <div class="relative">
                                        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                        <input 
                                            v-model="email" 
                                            type="email" 
                                            placeholder="cadbcps1@gmail.com"
                                            class="w-full pl-12 pr-4 py-3 text-sm bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-slate-500"
                                            @keyup.enter="handleAdminLogin"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1.5 text-slate-300">Password</label>
                                    <div class="relative">
                                        <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input 
                                            v-model="password" 
                                            :type="showPassword ? 'text' : 'password'"
                                            placeholder="••••••••••••••••"
                                            class="w-full pl-12 pr-12 py-3 text-sm bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-white placeholder-slate-500"
                                            @keyup.enter="handleAdminLogin"
                                        />
                                        <button
                                            type="button"
                                            @click="showPassword = !showPassword"
                                            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 focus:outline-none transition"
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
                                
                                <div class="flex items-center justify-between pt-1">
                                    <label class="flex items-center cursor-pointer group">
                                        <input type="checkbox" class="w-4 h-4 rounded bg-slate-800 border-slate-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900">
                                        <span class="ml-2 text-sm text-slate-400 group-hover:text-slate-300 transition">Remember me</span>
                                    </label>
                                    <a href="#" class="text-sm text-blue-400 hover:text-blue-300 transition">Forgot password?</a>
                                </div>
                                
                                <button 
                                    @click="handleAdminLogin"
                                    :disabled="isLoading"
                                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-700 disabled:to-slate-700 text-white font-semibold py-3 text-sm rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50 mt-4">
                                    <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                    </svg>
                                    <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span v-if="isLoading">Logging in...</span>
                                    <span v-else>Login</span>
                                </button>
                            </div>

                            <!-- User Login (Proceed only) -->
                            <div v-else class="space-y-3">
                                <!-- Error Message -->
                                <div v-if="errorMessage" class="bg-red-500/10 border border-red-500/50 p-2.5 rounded-lg">
                                    <p class="text-sm text-red-400">{{ errorMessage }}</p>
                                </div>

                                <div class="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                                    <div class="flex items-start gap-3">
                                        <div class="text-blue-400 mt-0.5">
                                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-base font-semibold mb-1 text-white">Officer/Personnel Access</p>
                                            <p class="text-sm text-slate-400">Click proceed to submit your AAR</p>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    @click="handleUserProceed"
                                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50"
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Proceed
                                </button>
                            </div>
                            
                            <!-- Footer -->
                            <div class="mt-4 pt-4 border-t border-slate-700/50 text-center">
                                <div class="flex items-center justify-center gap-2 mb-2">
                                    <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p class="text-xs font-medium text-slate-400">Secure Access</p>
                                </div>
                                <p class="text-xs text-slate-500">BCPO PS1 © 2026</p>
                            </div>
                        </div>
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
