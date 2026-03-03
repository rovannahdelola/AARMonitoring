<template>
  <div class="min-h-screen bg-police-cream">
    <!-- Sidebar - Desktop Only -->
    <div
      class="hidden lg:flex fixed left-0 top-0 h-screen w-64 text-slate-800 flex-col shadow-sm z-40 bg-white border-r border-slate-300"
    >
      <!-- Sidebar Header -->
      <div class="p-6 border-b border-slate-200">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="rounded-full p-4 bg-police-cream">
            <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-police-dark uppercase tracking-wide">
              Admin<br />Dashboard
            </h1>
            <p class="text-xs mt-2 font-semibold text-slate-600">
              AAR Monitoring System
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="flex-1 p-5 space-y-3">
        <div
          class="rounded-lg p-4 border-l-4 border-police-dark bg-police-cream"
        >
          <div class="flex items-center gap-3">
            <div class="rounded-lg p-2 bg-police-light">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <span class="font-bold text-sm uppercase tracking-wider text-police-dark">Overview</span>
          </div>
        </div>

        <router-link
          to="/records-view"
          class="block p-4 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer group"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 bg-slate-100 group-hover:bg-slate-200 transition"
            >
              <svg
                class="w-5 h-5 text-slate-600"
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
            <span class="text-sm font-semibold uppercase tracking-wider text-slate-600"
              >Records</span
            >
          </div>
        </router-link>
      </div>

      <!-- Logout Button -->
      <div class="p-5 border-t border-slate-200 mt-auto">
        <button
          @click="showLogoutConfirm = true"
          class="w-full text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 hover:bg-red-700 bg-red-600"
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

    <!-- Main Content -->
    <div class="lg:ml-64 min-h-screen overflow-auto pb-20 lg:pb-0">
      <div class="p-4 sm:p-6 lg:p-8">
        <!-- Welcome Header -->
        <div
          class="mb-6 lg:mb-8 p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm bg-white border-l-4 border-police-dark"
        >
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="rounded-full p-2 sm:p-3 bg-police-cream">
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 text-police-dark"
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
              <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-police-dark">
                Welcome Back, Administrator
              </h1>
              <p class="text-xs sm:text-sm font-semibold text-slate-600">
                Today's AAR submissions overview and statistics
              </p>
            </div>
          </div>
        </div>

        <!-- Today's Statistics -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-5">
            <div class="h-1 w-1 rounded-full bg-police-light"></div>
            <p class="text-sm font-bold uppercase tracking-wider text-police-dark">
              Today's Statistics
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <!-- Today's Attendance -->
            <div
              class="rounded-lg p-4 sm:p-5 lg:p-6 border-l-4 border-emerald-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white"
            >
              <div class="flex items-center justify-between">
                <div class="flex-1">
                  <p
                    class="text-xs font-bold uppercase mb-2 sm:mb-3 tracking-wider text-slate-600"
                  >
                    AAR Submissions
                  </p>
                  <p class="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-emerald-600">
                    {{ todayCheckIns }}
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-slate-500">
                    {{ currentDate }}
                  </p>
                </div>
                <div
                  class="rounded-xl p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300 bg-emerald-50"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600"
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
              class="rounded-lg p-4 sm:p-5 lg:p-6 border-l-4 border-red-500 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white"
            >
              <div class="flex items-center justify-between">
                <div class="flex-1">
                  <p
                    class="text-xs font-bold uppercase mb-2 sm:mb-3 tracking-wider text-slate-600"
                  >
                    NO AAR
                  </p>
                  <p class="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-red-600">
                    {{ officersWithoutAttendance.length }}
                  </p>
                  <p class="text-xs sm:text-sm font-semibold text-slate-500">Officers</p>
                </div>
                <div class="rounded-xl p-2 sm:p-3 bg-red-50">
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 text-red-600"
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
          <div class="rounded-lg shadow-sm bg-white border border-slate-200">
            <div class="p-4 sm:p-5 lg:p-6 border-b border-slate-200">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 sm:gap-3">
                  <div class="rounded-lg p-1.5 sm:p-2 bg-red-50">
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
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
                  <h2
                    class="text-sm sm:text-base font-bold uppercase tracking-wide text-slate-800"
                  >
                    NO AAR Officers Yet
                  </h2>
                </div>
                <span
                  class="text-xs sm:text-sm font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-red-50 text-red-600"
                >
                  {{ officersWithoutAttendance.length }}
                </span>
              </div>
            </div>
            <div class="p-4 sm:p-5 lg:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
              <div v-if="officersWithoutAttendance.length === 0" class="text-center py-6 sm:py-8">
                <div
                  class="rounded-full p-3 sm:p-4 mx-auto w-fit mb-2 sm:mb-3 bg-emerald-50"
                >
                  <svg
                    class="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600"
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
                <p class="text-xs sm:text-sm font-bold text-emerald-600">
                  Perfect Submission!
                </p>
                <p class="text-xs sm:text-sm mt-1 text-slate-500">
                  All officers have submitted their AAR today
                </p>
              </div>
              <div v-else class="space-y-2 sm:space-y-3">
                <div
                  v-for="officer in officersWithoutAttendance"
                  :key="officer.id"
                  class="p-3 sm:p-4 rounded-lg border border-slate-200 transition-all duration-200 hover:shadow-md bg-white"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 sm:gap-3">
                      <div class="rounded-full p-1.5 sm:p-2 bg-red-50">
                        <svg
                          class="w-3 h-3 sm:w-4 sm:h-4 text-red-600"
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
                        <p class="text-xs sm:text-sm font-bold text-slate-800">
                          {{ officer.rank_fullname }}
                        </p>
                        <p class="text-xs sm:text-sm font-semibold text-slate-500">
                          No check-in today
                        </p>
                      </div>
                    </div>
                    <span
                      class="text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-red-50 text-red-600"
                    >
                      No AAR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats & Summary -->
          <div class="rounded-lg shadow-sm bg-white border border-slate-200">
            <div class="p-5 border-b border-slate-200">
              <div class="flex items-center gap-3">
                <div class="rounded-lg p-2 bg-police-cream">
                  <svg
                    class="w-5 h-5 text-police-dark"
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
                <h2 class="text-base font-bold uppercase tracking-wide text-police-dark">
                  Quick Summary
                </h2>
              </div>
            </div>
            <div class="p-5 space-y-4">
              <!-- Submission Rate -->
              <div
                class="p-4 rounded-lg bg-emerald-50"
              >
                <div class="flex items-center justify-between mb-2">
                  <p class="text-xs font-bold uppercase text-emerald-700">Submission Rate</p>
                  <p class="text-2xl font-bold text-emerald-600">{{ attendanceRate }}%</p>
                </div>
                <div class="w-full h-2 rounded-full overflow-hidden bg-emerald-100">
                  <div
                    class="h-full rounded-full transition-all duration-500 bg-emerald-600"
                    :style="{ width: attendanceRate + '%' }"
                  ></div>
                </div>
                <p class="text-xs font-semibold mt-2 text-emerald-700">
                  {{ todayCheckIns }} out of {{ totalOfficers }} officers submitted
                </p>
              </div>

              <!-- Total Records -->
              <div
                class="p-4 rounded-lg flex items-center justify-between bg-police-cream border-2 border-slate-300"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded-lg p-2.5 bg-police-dark">
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
                    <p class="text-xs font-bold uppercase mb-1 text-slate-600">
                      Total Records
                    </p>
                    <p class="text-2xl font-bold text-police-dark">{{ totalAttendance }}</p>
                  </div>
                </div>
              </div>

              <!-- System Status -->
              <div
                class="p-4 rounded-lg bg-police-cream border-2 border-slate-300"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="rounded-full p-2 bg-emerald-600">
                      <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <div>
                      <p class="text-xs font-bold uppercase text-police-dark">
                        System Status
                      </p>
                      <p class="text-sm font-semibold mt-0.5 text-emerald-600">
                        All Systems Operational
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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

    <!-- Logout Confirmation Modal -->
    <div
      v-if="showLogoutConfirm"
      class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in bg-black/20 backdrop-blur-sm"
    >
      <!-- Backdrop overlay -->
      <div @click="showLogoutConfirm = false" class="absolute inset-0"></div>

      <!-- Modal dialog -->
      <div
        @click.stop
        class="relative bg-white rounded-2xl max-w-md w-full mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header -->
        <div
          class="relative px-8 pt-8 pb-6 bg-blue-600"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="rounded-lg p-2.5 bg-white/20">
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
            <div class="flex-shrink-0">
              <div class="rounded-full p-3 bg-red-50">
                <svg
                  class="h-7 w-7 text-red-600"
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
              <h4 class="text-base font-bold mb-2 text-slate-800">
                Are you sure you want to logout?
              </h4>
              <p class="text-sm leading-relaxed text-slate-600">
                You will be signed out from the admin dashboard and redirected to the login page.
              </p>
            </div>
          </div>

          <!-- Important Info Box -->
          <div
            class="rounded-lg p-4 mb-6 border-l-4 border-blue-600 bg-blue-50"
          >
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-xs font-semibold text-blue-800">
                You can login again anytime using your credentials
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <button
              @click="showLogoutConfirm = false"
              class="flex-1 font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2 border-slate-300 bg-white text-slate-800"
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
              class="flex-1 text-white font-bold py-3.5 px-5 rounded-lg text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg hover:bg-red-700 bg-red-600"
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
      class="lg:hidden fixed bottom-0 left-0 right-0 z-50 shadow-lg bg-white border-t-2 border-blue-600"
    >
      <div class="grid grid-cols-3 h-16">
        <!-- Overview -->
        <div
          class="relative flex flex-col items-center justify-center bg-blue-50"
        >
          <svg
            class="w-6 h-6 mb-0.5 text-blue-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span class="text-xs font-bold tracking-wide text-blue-600"
            >Overview</span
          >
        </div>

        <!-- Records -->
        <router-link
          to="/records-view"
          class="relative flex flex-col items-center justify-center active:scale-95 transition-all duration-300 hover:bg-slate-50"
        >
          <svg
            class="w-6 h-6 mb-0.5 text-slate-600"
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
          <span class="text-xs font-semibold tracking-wide text-slate-600"
            >Records</span
          >
        </router-link>

        <!-- Logout -->
        <button
          @click="showLogoutConfirm = true"
          class="relative flex flex-col items-center justify-center active:scale-95 transition-all duration-300 hover:bg-red-50"
        >
          <svg
            class="w-6 h-6 mb-0.5 text-red-600"
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
          <span class="text-xs font-semibold tracking-wide text-red-600"
            >Logout</span
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'

const router = useRouter()

// Data
const totalAttendance = ref(0)
const todayCheckIns = ref(0)
const totalOfficers = ref(0)
const allUsers = ref([])
const todayAttendanceUserIds = ref([])
const showLogoutConfirm = ref(false)

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

const handleLogout = async () => {
  showLogoutConfirm.value = false

  try {
    // Sign out from Supabase
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Logout error:', error)
    }

    // Clear local storage
    localStorage.removeItem('currentAdmin')

    // Redirect to login page
    router.push('/')
  } catch (err) {
    console.error('Logout error:', err)
    // Still redirect even if error
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
