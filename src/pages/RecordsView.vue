<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Sidebar - Desktop Only -->
    <div
      class="hidden lg:flex fixed left-0 top-0 h-screen w-64 text-slate-800 flex-col shadow-sm z-40 bg-white border-r border-slate-200"
    >
      <!-- Sidebar Header -->
      <div class="p-6 border-b border-slate-200">
        <div class="flex flex-col items-center text-center gap-4">
          <div class="rounded-full p-4 bg-blue-50">
            <img src="../assets/pnplogo.png" alt="PNP Logo" class="w-20 h-20 object-contain" />
          </div>
          <div>
            <h1 class="text-lg font-bold text-slate-800 uppercase tracking-wide">
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
        <router-link
          to="/admin-dashboard"
          class="block p-4 hover:bg-slate-100 rounded-lg transition-all duration-200 cursor-pointer group"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 bg-slate-100 group-hover:bg-slate-200 transition"
            >
              <svg class="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                ></path>
              </svg>
            </div>
            <span class="text-sm font-semibold uppercase tracking-wider text-slate-600"
              >Overview</span
            >
          </div>
        </router-link>

        <div
          class="rounded-lg p-4 border-l-4 border-blue-600 bg-blue-50"
        >
          <div class="flex items-center gap-3">
            <div class="rounded-lg p-2 bg-blue-100">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
            </div>
            <span class="font-bold text-sm uppercase tracking-wider text-blue-600">Records</span>
          </div>
        </div>
      </div>

      <!-- Logout Button -->
      <div class="p-5 border-t border-slate-200 mt-auto">
        <button
          @click="handleLogout"
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
      <div class="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
        <!-- Page Header -->
        <div
          class="mb-6 lg:mb-8 p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm bg-white border-l-4 border-blue-600"
        >
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="rounded-full p-2 sm:p-3 bg-blue-50">
              <svg
                class="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
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
            <div>
              <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-slate-800">
                AAR Records
              </h1>
              <p class="text-xs sm:text-sm font-semibold text-slate-600">
                Filter and view AAR records by date
              </p>
            </div>
          </div>
        </div>

        <!-- Filter and Tabs Section -->
        <div class="bg-white rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-6 shadow-sm border border-slate-200">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <!-- Tab Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                @click="activeTab = 'with-attendance'"
                :class="
                  activeTab === 'with-attendance' ? 'text-white shadow-md bg-blue-600 border-blue-600' : 'bg-white border-2 border-slate-300 text-slate-700'
                "
                class="px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition hover:opacity-90"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Submitted
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="activeTab === 'with-attendance' ? 'bg-white text-blue-600' : 'bg-blue-50 text-blue-600'"
                  >{{ filteredRecords.length }}</span
                >
              </button>
              <button
                @click="activeTab = 'without-attendance'"
                :class="
                  activeTab === 'without-attendance' ? 'text-white shadow-md bg-red-600 border-red-600' : 'bg-white border-2 border-slate-300 text-slate-700'
                "
                class="px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition hover:opacity-90"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Not Submitted
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="activeTab === 'without-attendance' ? 'bg-white text-red-600' : 'bg-red-50 text-red-600'"
                  >{{ officersWithoutAttendance.length }}</span
                >
              </button>
              <button
                @click="activeTab = 'history'"
                :class="
                  activeTab === 'history' ? 'text-white shadow-md bg-emerald-600 border-emerald-600' : 'bg-white border-2 border-slate-300 text-slate-700'
                "
                class="px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 transition hover:opacity-90"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                History
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="activeTab === 'history' ? 'bg-white text-emerald-600' : 'bg-emerald-50 text-emerald-600'"
                  >{{ aarHistory.length }}</span
                >
              </button>
            </div>

            <!-- Date Filter -->
            <div
              class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full lg:w-auto"
            >
              <label
                class="text-xs sm:text-sm font-bold uppercase flex items-center gap-2 text-slate-800"
              >
                <div class="rounded-lg p-1.5 bg-blue-50">
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                Select Date
              </label>
              <input
                v-model="selectedDate"
                type="date"
                class="px-3 sm:px-4 py-2.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs sm:text-sm font-medium w-full sm:w-auto text-slate-700"
                @change="filterRecords"
              />
              <button
                @click="resetFilters"
                class="text-white px-3 sm:px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:bg-slate-700 flex items-center justify-center gap-2 transition bg-slate-600"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Clear
              </button>
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <!-- Submitted Tab -->
        <div
          v-if="activeTab === 'with-attendance'"
          class="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200"
        >
          <div class="p-4 sm:p-5 lg:p-6 border-b border-slate-200 bg-slate-50">
            <h2
              class="text-sm sm:text-base font-bold flex items-center gap-2 sm:gap-3 text-slate-800"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Submitted Reports
            </h2>
            <p class="text-xs sm:text-sm mt-1 text-slate-600">
              Showing {{ filteredRecords.length }} records
            </p>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[720px] sm:min-w-[840px]">
              <thead class="text-white bg-slate-700">
                <tr>
                  <th
                    class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase"
                  >
                    Date & Time
                  </th>
                  <th
                    class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase"
                  >
                    Name
                  </th>
                  <th
                    class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase"
                  >
                    Status
                  </th>
                  <th
                    class="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-bold uppercase"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-slate-100">
                <tr v-for="record in filteredRecords" :key="record.id" class="hover:bg-slate-50">
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800">
                    {{ record.date }}
                  </td>
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 font-semibold">
                    {{ record.name }}
                  </td>
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3">
                    <span
                      v-if="record.status === true"
                      class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded-full bg-emerald-100 text-emerald-700"
                    >
                      Present
                    </span>
                    <span
                      v-else
                      class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded-full bg-red-100 text-red-700"
                    >
                      Absent
                    </span>
                  </td>
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3">
                    <div class="flex flex-col sm:flex-row gap-2">
                      <button
                        @click="previewReport(record)"
                        class="text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold flex items-center justify-center gap-2 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 transition"
                      >
                        <svg
                          class="w-3 h-3 sm:w-4 sm:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        Preview
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="filteredRecords.length === 0">
                  <td colspan="5" class="px-4 py-8 sm:py-12 text-center text-gray-500">
                    <div class="flex flex-col items-center">
                      <div class="bg-gray-100 rounded-full p-3 sm:p-4 mb-3">
                        <svg
                          class="h-6 w-6 sm:h-8 sm:w-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                      </div>
                      <p class="font-semibold text-xs sm:text-sm text-gray-700">No records found</p>
                      <p class="text-xs sm:text-sm text-gray-500 mt-1">
                        Try adjusting your date filter
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Not Submitted Tab -->
        <div
          v-if="activeTab === 'without-attendance'"
          class="bg-white rounded p-4 sm:p-5 lg:p-6 shadow-sm"
        >
          <div class="mb-4 sm:mb-5 lg:mb-6 rounded p-4 sm:p-5 lg:p-6 text-white bg-red-500">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
            >
              <div class="flex-1">
                <h2 class="text-base sm:text-lg font-bold flex items-center gap-2 sm:gap-3">
                  <svg
                    class="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                  Officers - Not Submitted
                </h2>
                <p class="text-xs sm:text-sm mt-1">
                  {{ officersWithoutAttendance.length }} officer(s) have not submitted
                </p>
              </div>
              <div
                v-if="officersWithoutAttendance.length > 0"
                class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
              >
                <button
                  @click="previewWithoutAttendanceReport"
                  class="bg-white text-[#004595] px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  Preview
                </button>
                <button
                  @click="downloadWithoutAttendanceReport"
                  class="bg-white text-[#004595] px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 hover:opacity-90"
                >
                  <svg
                    class="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>

          <div v-if="officersWithoutAttendance.length > 0">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
            >
              <div
                v-for="officer in officersWithoutAttendance"
                :key="officer.id"
                class="rounded p-3 sm:p-4 border border-red-500 bg-red-50"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded p-2" style="background: #ef4444">
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
                  <div class="flex-1">
                    <p class="font-bold text-gray-900 text-xs sm:text-sm">
                      {{ officer.rank_fullname }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="text-center py-8 sm:py-12 rounded"
            style="background: #f0fdf4; border: 1px solid #86efac"
          >
            <div
              class="rounded-full p-3 sm:p-4 mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3 sm:mb-4"
              style="background: #10b981"
            >
              <svg
                class="w-6 h-6 sm:w-7 sm:h-7 text-white"
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
            <p class="text-gray-800 text-sm sm:text-base font-bold">
              All officers have submitted their AAR!
            </p>
            <p class="text-gray-600 text-xs sm:text-sm mt-2">
              100% submission for the selected date
            </p>
          </div>
        </div>

        <!-- History Tab -->
        <div
          v-if="activeTab === 'history'"
          class="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200"
        >
          <div class="p-4 sm:p-5 lg:p-6 border-b border-slate-200 bg-slate-50">
            <h2
              class="text-sm sm:text-base font-bold flex items-center gap-2 sm:gap-3 text-slate-800"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Officer AAR History
            </h2>
            <p class="text-xs sm:text-sm mt-1 text-slate-600">
              Search for an officer to view their AAR submission history
            </p>
          </div>

          <div class="p-4 sm:p-5 lg:p-6 space-y-5">
            <!-- Officer Search -->
            <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm relative z-20">
              <label
                class="text-sm md:text-base font-bold mb-3 flex items-center gap-2 text-slate-800"
              >
                <svg
                  class="w-5 h-5 flex-shrink-0"
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
                Search Officer
              </label>
              <div class="relative">
                <input
                  v-model="searchQuery"
                  @focus="showDropdown = true"
                  @blur="hideDropdown"
                  type="text"
                  placeholder="Type to search officer name..."
                  class="w-full px-4 py-3 text-sm border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition font-medium text-slate-800"
                  autocomplete="off"
                />

                <!-- Dropdown List -->
                <div
                  v-if="showDropdown && filteredOfficers.length > 0"
                  class="absolute z-40 w-full mt-2 bg-white border-2 border-slate-300 rounded-lg max-h-64 overflow-y-auto shadow-lg"
                >
                  <div
                    v-for="user in filteredOfficers"
                    :key="user.id"
                    @mousedown.prevent="selectOfficer(user)"
                    class="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b last:border-b-0 transition font-medium text-gray-700"
                    :class="
                      selectedOfficer?.id === user.id ? 'font-bold bg-blue-100 text-blue-800' : ''
                    "
                  >
                    {{ user.rank_fullname }}
                  </div>
                </div>

                <!-- Clear button -->
                <button
                  v-if="selectedOfficer"
                  type="button"
                  @mousedown.prevent
                  @click="clearOfficerSelection"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-red-600 bg-white border border-red-200 px-3 py-1 rounded-md hover:bg-red-50 transition"
                >
                  Clear
                </button>
              </div>

              <p v-if="allUsers.length > 0" class="text-xs text-gray-500 mt-3">
                {{ filteredOfficers.length }} of {{ allUsers.length }} officers
              </p>
            </div>

            <!-- AAR History Results -->
            <div v-if="selectedOfficer" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <div class="rounded-lg p-2 bg-emerald-50">
                    <svg
                      class="w-5 h-5 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm md:text-base font-bold text-slate-800">{{ selectedOfficer.rank_fullname }}</h3>
                    <p class="text-xs text-slate-600">AAR Submission History</p>
                  </div>
                </div>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">
                  {{ aarHistory.length }} {{ aarHistory.length === 1 ? 'record' : 'records' }}
                </span>
              </div>

              <!-- Loading State -->
              <div v-if="isLoadingHistory" class="text-center py-8">
                <svg
                  class="animate-spin h-8 w-8 mx-auto text-emerald-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <p class="text-sm text-slate-600 mt-2">Loading history...</p>
              </div>

              <!-- No Records -->
              <div
                v-else-if="aarHistory.length === 0"
                class="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg"
              >
                <div class="rounded-full p-3 mx-auto w-fit mb-2 bg-slate-50">
                  <svg
                    class="w-8 h-8 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-slate-700">No AAR records found</p>
                <p class="text-xs text-slate-500 mt-1">This officer hasn't submitted any reports yet</p>
              </div>

              <!-- History Records Table -->
              <div v-else class="overflow-x-auto">
                <table class="w-full min-w-[720px]">
                  <thead class="text-white bg-emerald-700">
                    <tr>
                      <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Date
                      </th>
                      <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Description
                      </th>
                      <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Address
                      </th>
                      <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                        Status
                      </th>
                      <th class="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-slate-100">
                    <tr
                      v-for="record in aarHistory"
                      :key="record.id"
                      class="hover:bg-slate-50 transition"
                    >
                      <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                          <svg
                            class="w-4 h-4 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <span class="text-xs font-semibold text-slate-800">
                            {{ new Date(record.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            }) }}
                          </span>
                        </div>
                      </td>
                      <td class="px-4 py-4">
                        <p class="text-xs text-slate-700 line-clamp-2">{{ record.description }}</p>
                      </td>
                      <td class="px-4 py-4">
                        <p class="text-xs text-slate-700 line-clamp-1">{{ record.address }}</p>
                      </td>
                      <td class="px-4 py-4">
                        <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                          Submitted
                        </span>
                      </td>
                      <td class="px-4 py-4 text-center">
                        <button
                          @click="viewHistoryDetails(record)"
                          class="text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition bg-blue-600"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- No Officer Selected State -->
            <div
              v-else
              class="text-center py-12 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50"
            >
              <div class="rounded-full p-4 mx-auto w-fit mb-3 bg-white">
                <svg
                  class="w-12 h-12 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <p class="text-base font-semibold text-slate-700">Search for an Officer</p>
              <p class="text-sm text-slate-500 mt-1">Use the search field above to find and view an officer's AAR history</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="showPreviewModal"
      class="fixed inset-0 flex items-center justify-center z-50 p-3 sm:p-4"
      style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
      @click.self="closePreview"
    >
      <div
        class="bg-white rounded-lg max-w-6xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
      >
        <!-- Modal Header -->
        <div
          class="sticky top-0 bg-white border-b-2 p-4 sm:p-5 lg:p-6 flex justify-between items-center z-10"
          style="border-color: #004595"
        >
          <div class="flex items-center gap-2 sm:gap-3">
            <div class="rounded-lg p-1.5 sm:p-2" style="background: #004595">
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold" style="color: #002147">
              Document Preview
            </h2>
          </div>
          <button
            @click="closePreview"
            class="rounded-full p-1.5 sm:p-2 hover:bg-gray-100 transition"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6"
              style="color: #002147"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Preview Content -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8" style="background: #f3f1ee">
          <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
            <div v-html="previewContent"></div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="sticky bottom-0 bg-white border-t-2 p-4 sm:p-5 lg:p-6 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3"
          style="border-color: #004595"
        >
          <button
            @click="downloadFromPreview"
            class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2"
            style="background: #004595; color: #ffffff"
          >
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download Report
          </button>
          <button
            @click="closePreview"
            class="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase hover:opacity-90 transition flex items-center justify-center gap-2"
            style="background: #6b7280; color: #ffffff"
          >
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Close
          </button>
        </div>
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
        class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      >
        <!-- Modal Header with gradient -->
        <div
          class="relative px-6 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6"
          style="background: linear-gradient(135deg, #002147 0%, #004595 100%)"
        >
          <div class="flex items-center justify-between mb-3 sm:mb-4">
            <div class="flex items-center gap-2 sm:gap-3">
              <div class="rounded-lg p-2 sm:p-2.5" style="background: rgba(255, 255, 255, 0.15)">
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
              <h3 class="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                Logout Confirmation
              </h3>
            </div>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="px-6 sm:px-8 py-5 sm:py-6">
          <div class="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div class="flex-shrink-0">
              <div class="rounded-full p-2 sm:p-3" style="background: #fef2f2">
                <svg
                  class="h-6 w-6 sm:h-7 sm:w-7"
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
              <h4 class="text-sm sm:text-base font-bold mb-2" style="color: #002147">
                Are you sure you want to logout?
              </h4>
              <p class="text-xs sm:text-sm leading-relaxed" style="color: #6b7280">
                You will be signed out from the admin dashboard and redirected to the login page.
              </p>
            </div>
          </div>

          <!-- Important Info Box -->
          <div
            class="rounded-lg p-3 sm:p-4 mb-5 sm:mb-6 border-l-4"
            style="background: #f0f9ff; border-left-color: #002147"
          >
            <div class="flex items-center gap-2">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4"
                style="color: #002147"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              @click="showLogoutConfirm = false"
              class="flex-1 font-bold py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg border-2"
              style="background: #ffffff; color: #002147; border-color: #e5e7eb"
            >
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
              class="flex-1 text-white font-bold py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:shadow-lg"
              style="background: #dc2626"
            >
              <div class="flex items-center justify-center gap-2">
                <svg
                  class="w-3 h-3 sm:w-4 sm:h-4"
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
      <div class="grid grid-cols-3 h-16 sm:h-18">
        <!-- Overview -->
        <router-link
          to="/admin-dashboard"
          class="relative flex flex-col items-center justify-center active:scale-95 transition-all duration-300 hover:bg-slate-50"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 text-slate-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          <span
            class="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-600"
            >Overview</span
          >
        </router-link>

        <!-- Records -->
        <div
          class="relative flex flex-col items-center justify-center bg-blue-50"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 text-blue-600"
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
            class="text-[10px] sm:text-xs font-bold tracking-wide text-blue-600"
            >Records</span
          >
        </div>
        <!-- Logout -->
        <button
          @click="showLogoutConfirm = true"
          class="relative flex flex-col items-center justify-center active:scale-95 transition-all duration-300 hover:bg-red-50"
        >
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 text-red-600"
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
          <span
            class="text-[10px] sm:text-xs font-semibold tracking-wide text-red-600"
            >Logout</span
          >
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'
import { saveAs } from 'file-saver'
import bcpoSeal from '@/assets/BCPO1.png'
import pnpSeal from '@/assets/pnplogo.png'
import signature from '@/assets/signature.png'

const router = useRouter()

// Filter date
const selectedDate = ref('')
const activeTab = ref('with-attendance')

// All records
const allRecords = ref([])
const filteredRecords = ref([])
const absenceRecords = ref([])
const filteredAbsenceRecords = ref([])

// History search
const allUsers = ref([])
const selectedOfficer = ref(null)
const aarHistory = ref([])
const isLoadingHistory = ref(false)
const searchQuery = ref('')
const showDropdown = ref(false)

// Preview modal state
const showPreviewModal = ref(false)
const previewContent = ref('')
const previewRecord = ref(null)
const showLogoutConfirm = ref(false)
const isWithoutAttendancePreview = ref(false)
const headerImageData = ref({ pnp: '', bcpo: '' })

// Officers without attendance
const officersWithoutAttendance = computed(() => filteredAbsenceRecords.value)

// Date filter starts blank so all records appear initially
const setDefaultDate = () => {
  selectedDate.value = ''
}

const toDataUrl = async (url) => {
  const response = await fetch(url)
  const blob = await response.blob()

  return await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

const preloadHeaderImages = async () => {
  try {
    const [pnpData, bcpoData] = await Promise.all([toDataUrl(pnpSeal), toDataUrl(bcpoSeal)])
    headerImageData.value = { pnp: pnpData, bcpo: bcpoData }
  } catch (error) {
    console.warn('Could not inline header images for download:', error)
  }
}

// Lazy-load html-docx-js via script tag to avoid bundling issues
let htmlDocxModule = null
const loadHtmlDocx = async () => {
  if (htmlDocxModule) return htmlDocxModule

  if (typeof window !== 'undefined' && window.htmlDocx) {
    htmlDocxModule = window.htmlDocx
    return htmlDocxModule
  }

  await new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/html-docx-js@0.3.1/dist/html-docx.min.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load html-docx-js'))
    document.head.appendChild(script)
  })

  htmlDocxModule = window.htmlDocx
  if (!htmlDocxModule) {
    throw new Error('html-docx-js failed to initialize')
  }

  return htmlDocxModule
}

// Fetch all attendance records
const fetchRecords = async () => {
  try {
    // Fetch all AAR reports
    const { data: attendance, error } = await supabase
      .from('aar_reports_with_screenshots1')
      .select('*')
      .order('date', { ascending: false })

    console.log('Fetched AAR records:', attendance)

    if (error) throw error

    allRecords.value = (attendance || []).map((record) => {
      const rawDateValue = record.date
      const dateObj = rawDateValue ? new Date(rawDateValue) : null
      const fullRankName = record.rank_fullname || 'Unknown'
      const fallbackRank = fullRankName !== 'Unknown' ? fullRankName.split(' ')[0] : 'N/A'
      const formattedDate = dateObj
        ? dateObj.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })
        : 'N/A'
      const narrativeDate = dateObj
        ? dateObj.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })
        : 'N/A'

      return {
        id: record.id,
        date: formattedDate,
        dateObj,
        rank: fallbackRank,
        name: fullRankName,
        fullRankName,
        userId: record.user_id,
        status: record.status !== false,
        screenshots: record.screenshots || '',
        description: record.description || '',
        address: record.address || '',
        reportDate: narrativeDate,
      }
    })

    // Fetch records not submitted
    const { data: absenceData, error: absenceError } = await supabase
      .from('aar_reports_with_screenshots')
      .select('*')
      .order('date', { ascending: false })

    if (absenceError) throw absenceError

    absenceRecords.value = (absenceData || []).map((record) => {
      const rawDateValue = record.date || record.created_at
      const dateObj = rawDateValue ? new Date(rawDateValue) : null
      const formattedDate = dateObj
        ? dateObj.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
          })
        : 'N/A'

      return {
        id: record.id,
        date: formattedDate,
        dateObj,
        userId: record.user_id,
        description: record.description || '',
        address: record.address || '',
        screenshots: record.screenshots || '',
        rank_fullname: record.rank_fullname || 'Unknown',
        badge_number: record.badge_number || 'N/A',
      }
    })

    filterRecords()
  } catch (error) {
    console.error('Error fetching records:', error)
    alert(`Unable to fetch AAR data. Details: ${error?.message || error}`)
  }
}

// Filter records by selected date
const filterRecords = () => {
  if (!selectedDate.value) {
    filteredRecords.value = allRecords.value
    filteredAbsenceRecords.value = absenceRecords.value
    return
  }

  const selected = new Date(selectedDate.value)
  selected.setHours(0, 0, 0, 0)

  const endOfDay = new Date(selected)
  endOfDay.setHours(23, 59, 59, 999)

  filteredRecords.value = allRecords.value.filter((record) => {
    if (!record.dateObj) {
      return false
    }
    return record.dateObj >= selected && record.dateObj <= endOfDay
  })

  filteredAbsenceRecords.value = absenceRecords.value.filter((record) => {
    if (!record.dateObj) {
      return false
    }
    return record.dateObj >= selected && record.dateObj <= endOfDay
  })
}

// Reset filters
const resetFilters = () => {
  selectedDate.value = ''
  filteredRecords.value = allRecords.value
  filteredAbsenceRecords.value = absenceRecords.value
}

// Download from preview modal
const inlineHeaderImages = (html) => {
  const { pnp, bcpo } = headerImageData.value
  let updated = html

  if (pnp) {
    updated = updated.replaceAll(pnpSeal, pnp)
  }

  if (bcpo) {
    updated = updated.replaceAll(bcpoSeal, bcpo)
  }

  return updated
}

const inlineAllImages = async (html) => {
  const imageRegex = /<img[^>]*src="([^"]+)"[^>]*>/gi
  const seen = new Set()
  const tasks = []

  let match
  while ((match = imageRegex.exec(html)) !== null) {
    const src = match[1]
    if (src.startsWith('data:') || seen.has(src)) continue
    seen.add(src)

    tasks.push(
      toDataUrl(src)
        .then((dataUrl) => ({ src, dataUrl }))
        .catch(() => null),
    )
  }

  const results = await Promise.all(tasks)
  let updated = html

  results.forEach((result) => {
    if (result?.dataUrl) {
      updated = updated.replaceAll(result.src, result.dataUrl)
    }
  })

  return updated
}

const buildDocHtml = (
  bodyContent,
) => `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Report</title><style>
      body, .doc-wrapper, table, td, th, p, ol, ul, li, span { margin: 0; padding: 0; font-family: Arial; font-size: 12pt; color: #0f172a; }
      body { text-align: left; }
      .doc-wrapper { background: #ffffff; }
      img { max-width: 100%; height: auto; }
      table { border-collapse: collapse; width: 100%; }
      .signature-block { width: 100%; text-align: right; margin: 20px 0 12px 0; color: #0f172a; font-size: 12pt; }
      .signature-inner { display: inline-block; position: relative; text-align: center; font-size: 12pt; padding-top: 70px; }
      .signature-image { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 140px; height: 70px; object-fit: contain; opacity: 0.95; z-index: 0; pointer-events: none; }
      .signature-text { position: relative; z-index: 1; }
    </style></head><body><div class="doc-wrapper">${bodyContent}</div></body></html>`

const downloadFromPreview = async () => {
  if (isWithoutAttendancePreview.value) {
    await downloadWithoutAttendanceReport()
    return
  }

  if (!previewContent.value) {
    alert('No preview available to download.')
    return
  }

  const filename = previewRecord.value?.reportDate
    ? `AAR_Report_${previewRecord.value.reportDate.replace(/[^a-z0-9]+/gi, '_')}.docx`
    : 'report.docx'

  const htmlWithInlineHeaders = inlineHeaderImages(previewContent.value)
  const fullyInlinedHtml = await inlineAllImages(htmlWithInlineHeaders)
  await downloadWordReport(fullyInlinedHtml, filename)
}

// Preview report functions
const previewReport = async (record) => {
  try {
    previewRecord.value = record
    isWithoutAttendancePreview.value = false

    // Parse screenshots URLs (comma-separated)
    const screenshotUrls = record.screenshots
      ? record.screenshots
          .split(',')
          .map((url) => url.trim())
          .filter((url) => url)
      : []

    const narrativeDescription = record.description || 'No activity narrative provided.'
    const locationLine = record.address ? record.address : 'No deployment address submitted.'

    const imagesHTML =
      screenshotUrls.length > 0
        ? `
        <div style="margin-top: 0; padding-top: 30px; color: #0f172a; max-width: 190mm; margin-left: auto; margin-right: auto;">
          <div style="display: flex; align-items: center; justify-content: center;">
            <h3 style="font-size: 20px; letter-spacing: 1px; margin: 0; text-align: center; text-transform: uppercase; font-weight: bold;">Actual Photos</h3>
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${screenshotUrls
              .map(
                (url) => `
                <div style="width: 100%; padding: 12px 0; page-break-inside: avoid;">
                  <div style="overflow: hidden; background: #f8fafc; text-align: center; height: 320px; display: flex; align-items: center; justify-content: center;">
                    <img src="${url}" alt="Attendance Photo" style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; margin: 0 auto;">
                  </div>
                </div>
              `,
              )
              .join('')}
          </div>
        </div>
      `
        : '<div style="margin-top: 22px; padding: 16px; border: 1px dashed #cbd5f5; border-radius: 10px; text-align: center; font-size: 12px; color: #64748b; background: #f8fafc;">No photographic evidence was attached for this report.</div>'

    const previewHTML = `
      <div style="background: #e5e7eb; padding: 24px 10px; display: flex; justify-content: center; font-family: Arial; font-size: 12pt; color: #0f172a;">
        <div style="width: 210mm; min-height: 297mm; background: #ffffff; color: #0f172a; padding: 30mm 25mm; box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18); font-size: 12pt;">
          <div style="margin-bottom: 18px;">
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
              <tr>
                <td style="width: 100px; text-align: left; vertical-align: middle;">
                  <img src="${pnpSeal}" alt="PNP Seal" width="85" height="95" style="display: block; margin: 0 auto 0 0; width: 85px; height: 95px; object-fit: contain;">
                </td>
                <td style="text-align: center; vertical-align: middle; padding: 0 6px; letter-spacing: 0.8px; font-size: 12pt;">
                  <p style="margin: 0; font-size: 10pt;">Republic of the Philippines</p>
                  <p style="margin: 2px 0; font-size: 10pt;">National Police Commission</p>
                  <p style="margin: 2px 0; font-size: 11pt;">PHILIPPINE NATIONAL POLICE, POLICE REGIONAL OFFICE 13</p>
                  <p style="margin: 2px 0; font-size: 11pt;">BUTUAN CITY POLICE OFFICE</p>
                  <p style="margin: 2px 0; font-size: 11pt; font-weight: bold;">BUTUAN CITY POLICE STATION 1</p>
                  <p style"margin: 2px 0; font-size: 10pt;">AD Curato St., cor. JC Aquino Avenue, Butuan City</p>
                </td>
                <td style="width: 100px; text-align: right; vertical-align: middle;">
                  <img src="${bcpoSeal}" alt="BCPO Seal" width="85" height="85" style="display: block; margin: 0 0 0 auto; width: 85px; height: 85px; object-fit: contain;">
                </td>
              </tr>
            </table>
          </div>
          <div style="text-align: left; margin-bottom: 14px;">
            <h1 style="margin: 0; font-size: 12pt; letter-spacing: 4px; font-weight: bold;">MEMORANDUM</h1>
          </div>
          <table style="width: 100%; border: none; font-size: 12pt; margin-bottom: 18px;">
            <tr>
              <td style="width: 70px; padding: 6px 0;">FOR</td>
              <td style="padding: 6px 0;">: City Director, BCPO <span style="opacity: 0.8;">: (Attention: CAD Branch)</span></td>
            </tr>
            <tr>
              <td style="padding: 6px 0;">FROM</td>
              <td style="padding: 6px 0;">: ${record.fullRankName || record.name || 'Acting Station Commander, BCPS1'}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;">SUBJECT</td>
              <td style="padding: 6px 0;font-weight: bold; ">: After Activity Report on Police Visibility</td>
            </tr>
            <tr>
              <td style="padding: 6px 0;">DATE</td>
              <td style="padding: 6px 0;">: ${record.reportDate || record.date || 'N/A'}</td>
            </tr>
          </table>
          <div style="width: 100%; margin: 6pt 0 18pt 0; line-height: 1px; font-size: 1px;">
            <div style="border-top: 2pt solid #0f172a; width: 100%; height: 1px;">&nbsp;</div>
          </div>
          <div style="color: #0f172a; margin-left: 25pt; margin-bottom: 18px;">
          <div style="margin-bottom: 18px; font-size: 12pt; color: #1e293b;">
            <p style="margin: 0 0 6px 0;">1. References:</p>
            <ol style="margin: 0 0 0 18px; padding: 0;">
              <li>1. PNP Master Plan TAGATAGUYOD</li>
              <li>2. Latest station directive covering operations at ${locationLine}</li>
            </ol>
          </div>
          <div style="color: #0f172a; font-size: 12pt; margin-bottom: 40px;">
            <p style="margin: 0 0 12px 0; text-align: justify; font-size: 12pt;">2. Personnel of BCPS1 ${record.fullRankName}, ${narrativeDescription} under the supervision of <strong>PCPT NAMRA P ARIMAO JR, Acting Station Commander</strong> conduct establishment visit, police presence/visibility and
                ${record.address} on ${record.reportDate} at time. Said activity is conducted to ensure public safety and security thereat</p>
            <p style="margin: 0; font-size: 12pt;">3. For information.</p>
          </div>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin: 25px 0 0 0; color: #0f172a; font-size: 12pt; page-break-after: always;">
            <tr>
              <td style="width: 55%;"></td>
              <td style="width: 45%; text-align: right; padding-top: 70px; position: relative;">
                <div style="display: inline-block; position: relative; text-align: right; font-size: 12pt; min-width: 220px;">
                  <img src="${signature}" alt="Signature" width="140" height="70" style="position: absolute; top: -70px; left: 50%; transform: translateX(-50%); width: 140px; height: 70px; object-fit: contain; z-index: 0; pointer-events: none;">
                  <div style="position: relative; z-index: 1; text-align: right; line-height: 1.2;">
                    <div style="font-weight: bold; font-size: 12pt; text-align: right; margin: 0 0 2px 0;">NAMRA P ARIMAO JR</div>
                    <div style="font-size: 12pt; text-align: right; margin: 0 0 2px 0;">Police Captain</div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          ${imagesHTML}
        </div>
      </div>
      `

    previewContent.value = previewHTML
    showPreviewModal.value = true
  } catch (error) {
    console.error('Error generating preview:', error)
    alert('Error generating preview. Please try again.')
  }
}

const downloadWordReport = async (htmlContent, filename = 'report.doc') => {
  try {
    const htmlDocx = await loadHtmlDocx()
    const htmlTemplate = buildDocHtml(htmlContent)
    const safeName = filename.toLowerCase().endsWith('.docx')
      ? filename
      : filename.replace(/\.doc$/i, '.docx')
    const docBlob = htmlDocx.asBlob(htmlTemplate)
    saveAs(docBlob, safeName)
  } catch (error) {
    console.error('Error downloading Word report:', error)
    alert('Error downloading Word report. Please try again.')
  }
}

const previewWithoutAttendanceReport = () => {
  try {
    previewRecord.value = null
    isWithoutAttendancePreview.value = true

    const officersHTML = officersWithoutAttendance.value
      .map(
        (officer, index) => `
            <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${officer.rank_fullname || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 11px;">${officer.badge_number || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #fee2e2; color: #991b1b; border: 1.5px solid #ef4444;">✗ Absent</span>
                </td>
            </tr>
        `,
      )
      .join('')

    const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 15px; background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); padding: 12px; border-radius: 6px;">
                    <h1 style="color: #ffffff; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #fee2e2; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Officers Without Attendance Report</h2>
                    <p style="color: #fecaca; font-size: 10px;">Date: ${new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #fecaca; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div style="border: 2px solid #ef4444; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-gradient(to right, #fee2e2 0%, #fef2f2 100%); box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="background: #dc2626; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: #ffffff; font-size: 16px; font-weight: bold;">⚠️</span>
                        </div>
                        <div>
                            <p style="color: #991b1b; font-weight: bold; font-size: 12px; margin: 0;">
                                Total Officers - Not Submitted: ${officersWithoutAttendance.value.length}
                            </p>
                            <p style="color: #b91c1c; font-size: 10px; margin: 2px 0 0 0;">
                                These officers have not submitted their AAR for the selected date
                            </p>
                        </div>
                    </div>
                </div>

                <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #002147 0%, #004595 100%);">
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">RANK & FULL NAME</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 120px; color: #ffffff; font-weight: bold; font-size: 11px;">BADGE NUMBER</th>
                                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${officersHTML}
                        </tbody>
                    </table>
                </div>

                <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
                    <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document preview from the PNP Attendance Monitoring System</p>
                    <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
                </div>
            </div>
        `

    previewContent.value = previewHTML
    showPreviewModal.value = true
  } catch (error) {
    console.error('Error generating preview:', error)
    alert('Error generating preview. Please try again.')
  }
}

// Download Word report for officers without attendance
const downloadWithoutAttendanceReport = async () => {
  try {
    if (!previewContent.value) {
      previewWithoutAttendanceReport()
    }

    const htmlDocx = await loadHtmlDocx()
    const htmlTemplate = buildDocHtml(previewContent.value)
    const filename = selectedDate.value
      ? `Officers_Without_Attendance_${new Date(selectedDate.value)
          .toLocaleDateString('en-US')
          .replace(/[^a-z0-9]+/gi, '_')}.docx`
      : 'Officers_Without_Attendance.docx'

    const docBlob = htmlDocx.asBlob(htmlTemplate)
    saveAs(docBlob, filename)
  } catch (error) {
    console.error('Error generating Word document:', error)
    alert('Error generating Word document. Please try again.')
  }
}

const closePreview = () => {
  showPreviewModal.value = false
  previewContent.value = ''
  previewRecord.value = null
  isWithoutAttendancePreview.value = false
}

// History tab functions
const filteredOfficers = computed(() => {
  if (!searchQuery.value || searchQuery.value.trim() === '') {
    return allUsers.value
  }
  const query = searchQuery.value.toLowerCase()
  return allUsers.value.filter((user) => user.rank_fullname.toLowerCase().includes(query))
})

const selectOfficer = (user) => {
  selectedOfficer.value = user
  searchQuery.value = user.rank_fullname
  showDropdown.value = false
  fetchAARHistory(user.id)
}

const clearOfficerSelection = () => {
  selectedOfficer.value = null
  searchQuery.value = ''
  aarHistory.value = []
  showDropdown.value = false
}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}

const fetchAARHistory = async (userId) => {
  if (!userId) {
    aarHistory.value = []
    return
  }

  isLoadingHistory.value = true
  
  try {
    const { data, error } = await supabase
      .from('aar_report')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching AAR history:', error)
      aarHistory.value = []
      return
    }

    aarHistory.value = data || []
  } catch (err) {
    console.error('Exception fetching AAR history:', err)
    aarHistory.value = []
  } finally {
    isLoadingHistory.value = false
  }
}

const viewHistoryDetails = (record) => {
  previewReport(record)
}

// Logout handler
const handleLogout = async () => {
  try {
    await supabase.auth.signOut()
    localStorage.removeItem('currentAdmin')
    router.push('/')
  } catch (err) {
    console.error('Logout error:', err)
    router.push('/')
  }
}

// Initialize
onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    router.push('/')
    return
  }

  setDefaultDate()
  await preloadHeaderImages()
  await fetchRecords()
  await fetchUsers()
})

const fetchUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('rank_fullname', { ascending: true })

    if (error) {
      console.error('Error fetching users:', error)
      return
    }

    allUsers.value = data || []
  } catch (err) {
    console.error('Exception fetching users:', err)
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
