<template>
  <div>
    <!-- Sidebar - Desktop Only -->
    <div
      class="hidden lg:flex fixed left-0 top-0 h-screen w-64 text-white flex-col shadow-2xl z-40"
      style="background: linear-gradient(180deg, #001a3a 0%, #002147 50%, #00295a 100%)"
    >
      <!-- Sidebar Header -->
      <div class="p-6 border-b border-white/10">
        <div class="flex flex-col items-center text-center gap-4 ">
          <div class="rounded-full overflow-hidden ">
            <img src="../assets/pnpdashboard.png" alt="PNP Logo" class="w-50 h-45 object-cover" />
          </div>
          <div>
            <p class="text-xs mt-2 font-semibold" style="color: #f3f1ee">
              AFTER ACTVITY REPORT (AAR) PORTAL
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="flex-1 p-5 space-y-3">
        <router-link
          to="/admin-dashboard"
          class="block rounded-lg p-4 border-l-4 shadow-lg transition-all duration-200 cursor-pointer"
          :style="{
            background: activeTab === 'dashboard' ? '#004595' : 'rgba(255, 255, 255, 0.05)',
            borderLeftColor: activeTab === 'dashboard' ? '#ffffff' : 'transparent',
          }"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 transition-all"
              :style="{
                background:
                  activeTab === 'dashboard'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
              }"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <span
              class="font-bold text-sm uppercase tracking-wider transition-all"
              :style="{ color: activeTab === 'dashboard' ? '#ffffff' : '#f3f1ee' }"
              >Dashboard</span
            >
          </div>
        </router-link>

        <router-link
          to="/officers"
          class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
          :style="{
            background: activeTab === 'officers' ? '#004595' : 'transparent',
            borderLeft: activeTab === 'officers' ? '4px solid #ffffff' : 'none',
          }"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 group-hover:bg-white/10 transition"
              :style="{
                background:
                  activeTab === 'officers'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
              }"
            >
              <svg
                class="w-5 h-5"
                :style="{ color: activeTab === 'officers' ? '#ffffff' : '#f3f1ee' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span
              class="text-xs font-semibold uppercase tracking-wider transition-all"
              :style="{ color: activeTab === 'officers' ? '#ffffff' : '#f3f1ee' }"
              >Officers/Personnel</span
            >
          </div>
        </router-link>

        <router-link
          to="/records-view"
          class="block p-4 hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
          :style="{
            background: activeTab === 'records' ? '#004595' : 'transparent',
            borderLeft: activeTab === 'records' ? '4px solid #ffffff' : 'none',
          }"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 group-hover:bg-white/10 transition"
              :style="{
                background:
                  activeTab === 'records'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
              }"
            >
              <svg
                class="w-5 h-5"
                :style="{ color: activeTab === 'records' ? '#ffffff' : '#f3f1ee' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <span
              class="text-sm font-semibold uppercase tracking-wider transition-all"
              :style="{ color: activeTab === 'records' ? '#ffffff' : '#f3f1ee' }"
              >Records</span
            >
          </div>
        </router-link>
      </div>

      <!-- Logout Button -->
      <div class="p-5 border-t border-white/10 mt-auto">
        <button
          @click="showLogoutConfirm = true"
          class="w-full text-white py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
          style="background: #dc2626"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Logout
        </button>
      </div>
    </div>

    <!-- Logout Confirmation Modal -->
    <div
      v-if="showLogoutConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    >
      <!-- Backdrop overlay -->
      <div @click="showLogoutConfirm = false" class="absolute inset-0 bg-opacity-40"></div>

      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with gradient -->
        <div
          class="relative px-8 pt-8 pb-6"
          style="background: linear-gradient(135deg, #002147 0%, #004595 100%)"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="rounded-lg p-2.5" style="background: rgba(255, 255, 255, 0.15)">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white uppercase tracking-wide">
                Logout Confirmation
              </h3>
            </div>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="px-8 py-6">
          <div class="flex items-start gap-4 mb-6">
            <div class="shrink-0">
              <div class="rounded-full p-3" style="background: #fef2f2">
                <svg
                  class="h-7 w-7"
                  style="color: #dc2626"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <h4 class="text-base font-bold mb-2" style="color: #002147">
                Are you sure you want to logout?
              </h4>
              <p class="text-sm leading-relaxed" style="color: #6b7280">
                You will be signed out and redirected to the login page.
              </p>
            </div>
          </div>

          <!-- Important Info Box -->
          <div
            class="rounded-lg p-4 mb-6 border-l-4"
            style="background: #f0f9ff; border-left-color: #002147"
          >
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" style="color: #002147" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-xs font-semibold" style="color: #002147">
                You can login again anytime using your credentials
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <button
              @click="showLogoutConfirm = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              <div class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </div>
            </button>
            <button
              @click="handleLogout"
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #dc2626"
            >
              <div class="flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Bottom Navigation -->
    <nav
      class="lg:hidden fixed bottom-0 left-0 right-0 w-full z-50"
      style="box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08)"
    >
      <!-- Top Border Gradient -->
      <div
        class="h-1"
        style="background: linear-gradient(90deg, #002147 0%, #004595 50%, #002147 100%)"
      ></div>

      <div class="grid grid-cols-4 h-20" style="background: #ffffff">
        <!-- Dashboard -->
        <router-link
          to="/admin-dashboard"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 transition-all duration-300 cursor-pointer"
          :style="{
            borderColor: activeTab === 'dashboard' ? '#004595' : 'transparent',
            background:
              activeTab === 'dashboard'
                ? 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
                : 'transparent',
          }"
        >
          <div
            class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            :style="{ background: activeTab === 'dashboard' ? '' : '#f8f8f8' }"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform transition-transform duration-300"
            :style="{ color: activeTab === 'dashboard' ? '#004595' : '#6b7280' }"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span
            class="text-xs font-bold relative z-10 tracking-wide"
            :style="{ color: activeTab === 'dashboard' ? '#003d82' : '#6b7280' }"
            >Dashboard</span
          >
        </router-link>

        <!-- Officers -->
        <router-link
          to="/officers"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 transition-all duration-300"
          :style="{
            borderColor: activeTab === 'officers' ? '#004595' : 'transparent',
            background:
              activeTab === 'officers'
                ? 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
                : 'transparent',
          }"
        >
          <div
            class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            :style="{ background: activeTab === 'officers' ? '' : '#f8f8f8' }"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
            :style="{ color: activeTab === 'officers' ? '#004595' : '#6b7280' }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span
            class="text-xs font-bold relative z-10 tracking-wide"
            :style="{ color: activeTab === 'officers' ? '#003d82' : '#6b7280' }"
            >Officers</span
          >
        </router-link>

        <!-- Records -->
        <router-link
          to="/records-view"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 transition-all duration-300"
          :style="{
            borderColor: activeTab === 'records' ? '#004595' : 'transparent',
            background:
              activeTab === 'records'
                ? 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
                : 'transparent',
          }"
        >
          <div
            class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            :style="{ background: activeTab === 'records' ? '' : '#f8f8f8' }"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
            :style="{ color: activeTab === 'records' ? '#004595' : '#6b7280' }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            ></path>
          </svg>
          <span
            class="text-xs font-bold relative z-10 tracking-wide"
            :style="{ color: activeTab === 'records' ? '#003d82' : '#6b7280' }"
            >Records</span
          >
        </router-link>

        <!-- Logout -->
        <button
          @click="showLogoutConfirm = true"
          class="relative flex flex-col items-center justify-center overflow-hidden border-t-4 border-transparent transition-all duration-300"
        >
          <div
            class="absolute inset-0 bg-red-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></div>
          <svg
            class="w-6 h-6 mb-0.5 relative z-10 transform hover:scale-110 transition-transform duration-300"
            style="color: #dc2626"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          <span class="text-xs font-bold relative z-10 tracking-wide" style="color: #dc2626"
            >Logout</span
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { supabase } from '@/lib/supabase.js'

const router = useRouter()
const route = useRoute()
const showLogoutConfirm = ref(false)
const activeTab = ref('dashboard')

// Watch route changes and update active tab
watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/records-view') {
      activeTab.value = 'records'
    } else if (newPath === '/officers') {
      activeTab.value = 'officers'
    } else if (newPath === '/admin-dashboard') {
      activeTab.value = 'dashboard'
    }
  },
  { immediate: true },
)

// Props
defineProps({
  sidebarTitle: {
    type: String,
    default: 'Admin<br />Dashboard',
  },
})

// Handle logout
const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    router.push('/')
  } catch (error) {
    console.error('Logout failed:', error.message)
    router.push('/')
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scale-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
</style>
