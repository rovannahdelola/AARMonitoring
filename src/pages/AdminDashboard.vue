<template>
  <div class="min-h-screen relative overflow-hidden bg-slate-900">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/src/assets/landing.jpg')"
    >
      <!-- Dark overlay for better readability -->
      <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
    </div>

    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style="animation-delay: 700ms"
      ></div>
    </div>

    <!-- Navigation Component -->
    <NavigationPage sidebarTitle="Admin Dashboard" />

    <!-- Main Content -->
    <div class="relative lg:ml-64 min-h-screen overflow-auto pb-20 lg:pb-0 z-10">
      <div class="p-4 sm:p-6 lg:p-8">
        <!-- Welcome Header -->
        <div
          class="mb-6 lg:mb-8 rounded-2xl shadow-xl overflow-hidden relative"
          style="background: linear-gradient(135deg, #001a3a 0%, #002147 50%, #004595 100%)"
        >
          <!-- Animated blobs -->
          <div
            class="absolute -top-8 -right-8 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"
          ></div>
          <div
            class="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse pointer-events-none"
            style="animation-delay: 700ms"
          ></div>
          <!-- Diagonal accent -->
          <div
            class="absolute inset-0 pointer-events-none"
            style="
              background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 50%);
            "
          ></div>
          <div class="relative p-5 sm:p-6 lg:p-8">
            <div class="flex items-center gap-3 sm:gap-4">
              <div
                class="rounded-xl p-2.5 sm:p-3 ring-2 ring-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
              >
                <svg
                  class="w-6 h-6 sm:w-8 sm:h-8 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-white">
                  Welcome Back, Administrator
                </h1>
                <div class="w-16 h-0.5 bg-linear-to-r from-blue-400 to-transparent mb-1.5"></div>
                <p class="text-xs sm:text-sm font-semibold text-blue-300">
                  Today's AAR submissions overview and statistics
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Today's Statistics -->
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-5">
            <div class="h-4 w-1 rounded-full bg-linear-to-b from-blue-500 to-blue-800"></div>
            <p class="text-sm font-bold uppercase tracking-wider text-white">Today's Statistics</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <!-- Today's Attendance -->
            <div
              class="rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg md:shadow-xl border border-slate-700 backdrop-blur-sm bg-slate-900/80 transition-all duration-300 cursor-pointer group overflow-hidden relative hover:-translate-y-0.5 hover:shadow-xl md:hover:shadow-2xl"
            >
              <div
                class="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-10 pointer-events-none"
              ></div>
              <div
                class="absolute bottom-2 right-12 w-12 h-12 bg-emerald-300 rounded-full opacity-10 pointer-events-none"
              ></div>
              <div class="flex items-center justify-between relative">
                <div class="flex-1">
                  <p
                    class="text-xs font-bold uppercase mb-2 sm:mb-3 tracking-wider text-emerald-400"
                  >
                    AAR Submissions
                  </p>
                  <p class="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    {{ todayCheckIns }}
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-slate-400">
                    {{ currentDate }}
                  </p>
                </div>
                <div
                  class="rounded-2xl p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 shadow-md bg-gradient-to-br from-emerald-500 to-emerald-600"
                >
                  <svg
                    class="w-7 h-7 sm:w-9 sm:h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Absent Officers -->
            <div
              class="rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg md:shadow-xl border border-slate-700 backdrop-blur-sm bg-slate-900/80 transition-all duration-300 cursor-pointer group overflow-hidden relative hover:-translate-y-0.5 hover:shadow-xl md:hover:shadow-2xl"
            >
              <div
                class="absolute -top-4 -right-4 w-24 h-24 bg-red-400 rounded-full opacity-10 pointer-events-none"
              ></div>
              <div
                class="absolute bottom-2 right-12 w-12 h-12 bg-red-300 rounded-full opacity-10 pointer-events-none"
              ></div>
              <div class="flex items-center justify-between relative">
                <div class="flex-1">
                  <p class="text-xs font-bold uppercase mb-2 sm:mb-3 tracking-wider text-red-400">
                    NO AAR
                  </p>
                  <p class="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    {{ officersWithoutAttendance.length }}
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-slate-400">Officers</p>
                </div>
                <div
                  class="rounded-2xl p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 shadow-md bg-gradient-to-br from-red-500 to-red-600"
                >
                  <svg
                    class="w-7 h-7 sm:w-9 sm:h-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity & Absent Officers Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <!-- Absent Officers Today -->
          <div class="rounded-lg shadow-lg bg-slate-900/80 border border-slate-700">
            <div class="p-4 sm:p-5 lg:p-6 border-b border-slate-700">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 sm:gap-3">
                  <div class="rounded-lg p-1.5 sm:p-2 bg-red-500/10">
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 class="text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                    NO AAR Officers Yet
                  </h2>
                </div>
                <span
                  class="text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-red-500/10 text-red-400"
                >
                  {{ officersWithoutAttendance.length }}
                </span>
              </div>
            </div>
            <div class="p-4 sm:p-5 lg:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
              <div v-if="officersWithoutAttendance.length === 0" class="text-center py-6 sm:py-8">
                <div class="rounded-full p-3 sm:p-4 mx-auto w-fit mb-2 sm:mb-3 bg-emerald-500/10">
                  <svg
                    class="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <p class="text-xs sm:text-sm font-bold text-emerald-400">Perfect Submission!</p>
                <p class="text-xs sm:text-sm mt-1 text-slate-400">
                  All officers have submitted their AAR today
                </p>
              </div>
              <div v-else class="space-y-2 sm:space-y-3">
                <div
                  v-for="officer in officersWithoutAttendance"
                  :key="officer.id"
                  class="p-3 sm:p-4 rounded-lg border border-slate-700 transition-all duration-200 hover:shadow-md bg-slate-800/50"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 sm:gap-3">
                      <div class="rounded-full p-1.5 sm:p-2 bg-red-500/10">
                        <svg
                          class="w-3 h-3 sm:w-4 sm:h-4 text-red-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs sm:text-sm font-bold text-white">
                          {{ officer.rank_fullname }}
                        </p>
                        <p class="text-xs sm:text-sm font-semibold text-slate-400">
                          No check-in today
                        </p>
                      </div>
                    </div>
                    <span
                      class="text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-red-500/10 text-red-400"
                    >
                      No AAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats & Summary -->
          <div class="rounded-lg shadow-lg bg-slate-900/80 border border-slate-700">
            <div class="p-5 border-b border-slate-700">
              <div class="flex items-center gap-3">
                <div class="rounded-lg p-2 bg-blue-600">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <h2 class="text-base font-bold uppercase tracking-wide text-white">
                  Quick Summary
                </h2>
              </div>
            </div>
            <div class="p-5 space-y-4">
              <!-- Submission Rate -->
              <div class="p-4 rounded-lg bg-emerald-500/10">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-xs font-bold uppercase text-emerald-400">Submission Rate</p>
                  <p class="text-2xl font-bold text-emerald-400">{{ attendanceRate }}%</p>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden bg-emerald-500/20">
                  <div
                    class="h-full rounded-full transition-all duration-500 bg-emerald-500"
                    :style="{ width: attendanceRate + '%' }"
                  ></div>
                </div>
                <p class="text-xs font-semibold mt-2 text-emerald-400">
                  {{ todayCheckIns }} out of {{ totalOfficers }} officers submitted
                </p>
              </div>

              <!-- Total Records -->
              <div
                class="p-4 rounded-lg flex items-center justify-between bg-slate-800/50 border border-slate-700"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded-lg p-2.5 bg-blue-600">
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase mb-1 text-slate-400">Total Records</p>
                    <p class="text-2xl font-bold text-white">{{ totalAttendance }}</p>
                  </div>
                </div>
              </div>

              <!-- System Status -->
              <div class="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="rounded-full p-2 bg-emerald-500">
                      <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <div>
                      <p class="text-xs font-bold uppercase text-slate-400">System Status</p>
                      <p class="text-sm font-semibold mt-0.5 text-emerald-400">
                        All Systems Operational
                      </p>
                    </div>
                  </div>
                  <svg class="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'
import NavigationPage from '@/components/NavigationPage.vue'

const router = useRouter()

// Data
const totalAttendance = ref(0)
const todayCheckIns = ref(0)
const totalOfficers = ref(0)
const allUsers = ref([])
const todayAttendanceUserIds = ref([])

// Current date for display
const currentDate = computed(() => {
  const today = new Date()
  return today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
})

// Officers without attendance
const officersWithoutAttendance = computed(() => {
  return allUsers.value.filter((user) => !todayAttendanceUserIds.value.includes(user.id))
})

// Attendance rate
const attendanceRate = computed(() => {
  if (totalOfficers.value === 0) return 0
  return Math.round((todayCheckIns.value / totalOfficers.value) * 100)
})

// Fetch data from Supabase
const fetchData = async () => {
  try {
    // Fetch all users
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*')
      .order('rank_fullname', { ascending: true })

    if (usersError) throw usersError
    allUsers.value = users || []
    totalOfficers.value = users?.length || 0

    // Get today's date range
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    // Fetch today's attendance records
    const { data: attendance, error: attendanceError } = await supabase
      .from('aar_report')
      .select(
        `
                *,
                users (
                    id,
                    rank_fullname
                )
            `,
      )
      .gte('date', today.toISOString())
      .lt('date', tomorrow.toISOString())
      .order('date', { ascending: false })

    if (attendanceError) throw attendanceError

    todayCheckIns.value = attendance?.length || 0
    todayAttendanceUserIds.value = attendance?.map((a) => a.user_id) || []

    // Fetch total attendance count (all time)
    const { count, error: countError } = await supabase
      .from('aar_report')
      .select('*', { count: 'exact', head: true })

    if (countError) throw countError
    totalAttendance.value = count || 0
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Check authentication on mount
onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('Authenticated user:', user?.id)
  if (!user) {
    router.push('/')
    return
  }

  // Fetch dashboard data
  await fetchData()
})
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
