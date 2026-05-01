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
      <div class="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
        <!-- Page Header -->
        <div
          class="mb-6 lg:mb-8 relative overflow-hidden"
        >
          <!-- Glowing background blobs -->
          <div class="absolute -top-20 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse pointer-events-none" style="animation-delay: 700ms"></div>
          
          <!-- Transparent background with left accent border -->
          <div class="relative flex items-start gap-4 p-6 sm:p-8 rounded-lg border-l-4 border-b-0 border-t-0 border-r-0"
            style="border-color: #004595; background: rgba(15, 23, 42, 0.5); backdrop-filter: blur(8px)"
          >
            <div
              class="rounded-lg p-3 shrink-0"
              style="background: rgba(0, 69, 149, 0.15)"
            >
              <svg
                class="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #004595"
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
              <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                AAR Records
              </h1>
              <p class="text-sm sm:text-base text-slate-400 mt-1.5 font-medium">
                Filter and view AAR records by date
              </p>
            </div>
          </div>
        </div>

        <!-- Filter and Tabs Section -->
        <div class="bg-slate-900/80 rounded-2xl p-5 mb-4 sm:mb-6 shadow-md border border-slate-700">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <!-- Tab Buttons -->
            <div class="flex flex-wrap gap-2">
              <button
                @click="activeTab = 'with-attendance'"
                :class="
                  activeTab === 'with-attendance'
                    ? 'text-white shadow-md bg-blue-600'
                    : 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                "
                class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase flex items-center gap-2 transition-all duration-200"
              >
                <svg
                  class="w-4 h-4 shrink-0"
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
                Submitted
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="
                    activeTab === 'with-attendance'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-700 text-slate-300'
                  "
                  >{{ filteredRecords.length }}</span
                >
              </button>
              <button
                @click="activeTab = 'without-attendance'"
                :class="
                  activeTab === 'without-attendance'
                    ? 'text-white shadow-md bg-red-600'
                    : 'bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700'
                "
                class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase flex items-center gap-2 transition-all duration-200"
              >
                <svg
                  class="w-4 h-4 shrink-0"
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
                Not Submitted
                <span
                  class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="
                    activeTab === 'without-attendance'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-700 text-slate-300'
                  "
                  >{{ officersWithoutAttendance.length }}</span
                >
              </button>
            </div>

        </div>

        <!-- Tab Content -->
        <!-- Submitted Tab -->
        <div
          v-if="activeTab === 'with-attendance'"
          class="bg-slate-900/80 rounded-2xl overflow-hidden shadow-md border border-slate-700 p-4 sm:p-5 lg:p-6 mt-4 mb-4"
        >
          <div
            class="p-4 sm:p-5 lg:p-6 rounded-t-2xl border-b border-slate-700 bg-linear-to-r from-slate-800 to-blue-900 flex flex-col gap-4"
          >
            <!-- Title and Download -->
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h2 class="text-sm sm:text-base font-bold flex items-center gap-2 sm:gap-3 text-white">
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
                <p class="text-xs sm:text-sm mt-1 text-blue-200">
                  Showing {{ filteredRecords.length }} records
                </p>
              </div>
              <div
                v-if="filteredRecords.length > 0"
                class="flex flex-col sm:flex-row gap-2 w-full lg:w-auto shrink-0"
              >
                <button
                  @click="downloadAllCompliedReports"
                  class="bg-white text-[#004595] px-3 sm:px-4 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm uppercase flex items-center justify-center gap-2 hover:opacity-90"
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

            <!-- Search and Date Filter -->
            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 flex-wrap">
              <label
                class="text-xs sm:text-sm text-white font-bold uppercase flex items-center gap-2 shrink-0"
              >
                <div class="rounded-lg p-1 bg-blue-50">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                Search
              </label>
              <input
                v-model="searchName"
                type="text"
                placeholder="Enter name..."
                class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 grow md:grow-0"
                @input="filterRecords"
              />
              <label
                class="text-xs sm:text-sm text-white font-bold uppercase flex items-center gap-2 shrink-0"
              >
                <div class="rounded-lg p-1 bg-blue-50">
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
                Date
              </label>
              <input
                v-model="selectedDate"
                type="date"
                class="date-slate-icon px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50"
                @change="filterRecords"
              />
              <button
                @click="resetFilters"
                class="text-white px-3 py-2 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center gap-1.5 transition bg-linear-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-sm"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div class="overflow-x-auto">
            <table class="w-full min-w-180 sm:min-w-210">
              <thead
                class="text-white"
                style="background: linear-gradient(90deg, #002147 0%, #004595 100%)"
              >
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
              <tbody class="bg-slate-800/50 divide-y divide-slate-700 max-h-96 overflow-y-auto">
                <tr
                  v-for="record in filteredRecords"
                  :key="record.id"
                  class="hover:bg-slate-700/50"
                >
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-300">
                    {{ record.date }}
                  </td>
                  <td
                    class="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white font-semibold"
                  >
                    {{ record.name }}
                  </td>
                  <td class="px-3 sm:px-4 py-2.5 sm:py-3">
                    <span
                      v-if="record.status === 'complied'"
                      class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded-full bg-emerald-500/10 text-emerald-400"
                    >
                      {{ record.status }}
                    </span>
                    <span
                      v-else
                      class="px-2.5 sm:px-3 py-1 inline-flex text-xs sm:text-sm font-bold rounded-full bg-red-500/10 text-red-400"
                    >
                      {{ record.status }}
                    </span>
                  </td>
                  <td class="px-3 sm:px-4 py-1 sm:py-3">
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
                  <td colspan="5" class="px-4 py-8 sm:py-12 text-center text-slate-400">
                    <div class="flex flex-col items-center">
                      <div class="bg-slate-700/50 rounded-full p-3 sm:p-4 mb-3">
                        <svg
                          class="h-6 w-6 sm:h-8 sm:w-8 text-slate-500"
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
                      <p class="font-semibold text-xs sm:text-sm text-slate-300">
                        No records found
                      </p>
                      <p class="text-xs sm:text-sm text-slate-400 mt-1">
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
          class="bg-slate-900/80 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md border border-slate-700 mt-4 mb-4"
        >
          <div
            class="mb-4 sm:mb-5 lg:mb-6 rounded-xl p-4 sm:p-5 lg:p-6 text-white overflow-hidden relative"
            style="background: linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)"
          >
            <div
              class="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-full opacity-5 pointer-events-none"
            ></div>
            <div
              class="absolute bottom-0 left-10 w-20 h-20 bg-white rounded-full opacity-5 pointer-events-none"
            ></div>
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

            <!-- Search and Date Filter -->
            <div class="flex flex-col md:flex-row items-start md:items-center gap-3 flex-wrap mt-4">
              <label
                class="text-xs sm:text-sm text-white font-bold uppercase flex items-center gap-2 shrink-0"
              >
                <div class="rounded-lg p-1 bg-red-50">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                Search
              </label>
              <input
                v-model="searchAbsenceName"
                type="text"
                placeholder="Enter name..."
                class="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 grow md:grow-0"
                @input="filterAbsenceRecords"
              />
              <label
                class="text-xs sm:text-sm text-white font-bold uppercase flex items-center gap-2 shrink-0"
              >
                <div class="rounded-lg p-1 bg-red-50">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                Date
              </label>
              <input
                v-model="selectedAbsenceDate"
                type="date"
                class="date-slate-icon px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50"
                @change="filterAbsenceRecords"
              />
              <button
                @click="resetAbsenceFilters"
                class="text-white px-3 py-2 rounded-lg font-bold text-xs sm:text-sm uppercase flex items-center gap-1.5 transition bg-linear-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-sm"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          <div v-if="officersWithoutAttendance.length > 0" class="bg-slate-900/80 p-4 sm:p-5 lg:p-6" style="border-top: 1px solid rgba(220, 38, 38, 0.3)">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
            >
              <div
                v-for="officer in filteredAbsenceRecords"
                :key="officer.id"
                class="rounded p-3 sm:p-4 border border-red-500/30 bg-red-500/10"
              >
                <div class="flex items-center gap-3">
                  <div class="rounded p-2 bg-red-500/20">
                    <svg
                      class="w-5 h-5 sm:w-6 sm:h-6 text-red-400"
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
                    <p class="font-bold text-white text-xs sm:text-sm">
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


      </div>
    </div>

    <!-- Preview Modal -->
    <div
      v-if="showPreviewModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      @click.self="closePreview"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-6xl max-h-[90vh] rounded-2xl border border-slate-700 bg-slate-900/90 shadow-2xl overflow-hidden flex flex-col ml-auto mr-10"
      >
        <!-- Modal Header -->
        <div
          class="sticky top-0 border-b border-slate-700 p-5 lg:p-6 flex justify-between items-center z-10"
          :class="{
            'bg-linear-to-r from-red-900/40 to-rose-900/40': isWithoutAttendancePreview,
            'bg-linear-to-r from-slate-800 to-blue-900': !isWithoutAttendancePreview
          }"
        >
          <div class="flex items-center gap-3">
            <div
              class="rounded-lg p-2 flex items-center justify-center"
              :class="{
                'bg-red-500/20': isWithoutAttendancePreview,
                'bg-blue-500/20': !isWithoutAttendancePreview
              }"
            >
              <svg
                class="w-6 h-6"
                :class="{
                  'text-red-400': isWithoutAttendancePreview,
                  'text-blue-400': !isWithoutAttendancePreview
                }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="isWithoutAttendancePreview"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4v2m0 5v1m0-9a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h2
                class="text-lg lg:text-xl font-bold"
                :class="{
                  'text-red-300': isWithoutAttendancePreview,
                  'text-blue-300': !isWithoutAttendancePreview
                }"
              >
                {{ isWithoutAttendancePreview ? 'Not Submitted Reports' : 'Document Preview' }}
              </h2>
              <p v-if="!isWithoutAttendancePreview && previewRecord?.fullRankName" class="text-xs text-slate-400 mt-1">
                {{ previewRecord.fullRankName }}
              </p>
            </div>
          </div>
          <button
            @click="closePreview"
            class="rounded-lg p-2 hover:bg-slate-700/50 transition text-slate-300 hover:text-white"
          >
            <svg
              class="w-6 h-6"
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
        <div class="flex-1 overflow-auto p-6 lg:p-8 ml-10" style="background: #1e293b">
          <div
            v-if="isWithoutAttendancePreview || isCompliedReportsPreview"
            class="max-w-6xl mx-auto"
            v-html="previewContent"
          ></div>
          <div
            v-else
            class="flex flex-col items-center justify-center gap-4"
          >
            <div v-if="previewContentPage1" class="preview-page">
              <div
                ref="editablePreviewEl"
                class="editable-preview"
                contenteditable="true"
                spellcheck="false"
                v-html="previewContentPage1"
              ></div>
            </div>
            <div v-if="previewContentPage2" class="preview-page">
              <div
                class="editable-preview"
                spellcheck="false"
                v-html="previewContentPage2"
              ></div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="sticky bottom-0 border-t border-slate-700 p-5 lg:p-6 flex flex-col sm:flex-row justify-end gap-3 bg-slate-800/50 backdrop-blur-sm"
        >
          <button
            @click="savePreviewChanges"
            :disabled="isSavingFields"
            class="px-5 lg:px-6 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 flex items-center justify-center gap-2 text-white disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-500 shadow-lg hover:shadow-xl"
          >
            <svg v-if="!isSavingFields" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <svg v-else class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isSavingFields ? 'Saving...' : 'Save edits' }}
          </button>

          <button
            @click="downloadFromPreview"
            class="px-5 lg:px-6 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 flex items-center justify-center gap-2 text-white shadow-lg hover:shadow-xl"
            :class="{
              'bg-red-600 hover:bg-red-500': isWithoutAttendancePreview,
              'bg-blue-600 hover:bg-blue-500': !isWithoutAttendancePreview
            }"
          >
            <svg
              class="w-4 h-4"
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
            📥 Download
          </button>
          <button
            @click="closePreview"
            class="px-5 lg:px-6 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 flex items-center justify-center gap-2 text-white bg-slate-700 hover:bg-slate-600 shadow-lg hover:shadow-xl"
          >
            <svg
              class="w-4 h-4"
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

    <!-- Status Modal for Success/Error Messages -->
    <div
      v-if="showStatusModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closeStatusModal"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl overflow-hidden animate-scale-in"
      >
        <!-- Modal Header with Status Icon and Gradient -->
        <div
          class="p-6 border-b border-slate-700"
          :class="{
            'bg-linear-to-r from-emerald-900/40 to-green-900/40': statusType === 'success',
            'bg-linear-to-r from-red-900/40 to-rose-900/40': statusType === 'error',
            'bg-linear-to-r from-blue-900/40 to-cyan-900/40': statusType === 'info'
          }"
        >
          <div class="flex items-start gap-4">
            <!-- Status Icon -->
            <div
              class="rounded-full p-3 shrink-0 flex items-center justify-center"
              :class="{
                'bg-emerald-500/20': statusType === 'success',
                'bg-red-500/20': statusType === 'error',
                'bg-blue-500/20': statusType === 'info'
              }"
            >
              <svg
                v-if="statusType === 'success'"
                class="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <svg
                v-else-if="statusType === 'error'"
                class="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <svg
                v-else
                class="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <!-- Message Content -->
            <div class="flex-1 min-w-0">
              <h3
                class="font-bold text-base sm:text-lg"
                :class="{
                  'text-emerald-300': statusType === 'success',
                  'text-red-300': statusType === 'error',
                  'text-blue-300': statusType === 'info'
                }"
              >
                {{ statusTitle }}
              </h3>
              <p
                class="text-sm mt-2 leading-relaxed"
                :class="{
                  'text-emerald-200/80': statusType === 'success',
                  'text-red-200/80': statusType === 'error',
                  'text-blue-200/80': statusType === 'info'
                }"
              >
                {{ statusMessage }}
              </p>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-6 flex justify-end gap-3">
          <button
            @click="closeStatusModal"
            :class="{
              'bg-emerald-600 hover:bg-emerald-500': statusType === 'success',
              'bg-red-600 hover:bg-red-500': statusType === 'error',
              'bg-blue-600 hover:bg-blue-500': statusType === 'info'
            }"
            class="px-5 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 text-white shadow-lg hover:shadow-xl"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'
import { saveAs } from 'file-saver'
import NavigationPage from '@/components/NavigationPage.vue'
import bcpoSeal from '@/assets/BCPO1.png'
import pnpSeal from '@/assets/pnplogo.png'
import signature from '@/assets/signature.png'

const router = useRouter()

// Filter date
const selectedDate = ref('')
const searchName = ref('')
const activeTab = ref('with-attendance')

// Not Submitted filters (separate)
const selectedAbsenceDate = ref('')
const searchAbsenceName = ref('')

// All records
const allRecords = ref([])
const filteredRecords = ref([])
const absenceRecords = ref([])
const filteredAbsenceRecords = ref([])



// Preview modal state
const showPreviewModal = ref(false)
const previewContent = ref('')
const previewContentPage1 = ref('')
const previewContentPage2 = ref('')
const previewRecord = ref(null)
const isWithoutAttendancePreview = ref(false)
const isCompliedReportsPreview = ref(false)
const headerImageData = ref({ pnp: '', bcpo: '' })

// Editable fields state
const editableFields = ref({
  for: '',
  subject: '',
  address: '',
  reference: '',
  description: ''
})
const isSavingFields = ref(false)
const editablePreviewEl = ref(null)

// Status modal state for success/error messages
const showStatusModal = ref(false)
const statusMessage = ref('')
const statusType = ref('success') // 'success' or 'error'
const statusTitle = ref('')

const showStatusModalMessage = (title, message, type = 'success') => {
  statusTitle.value = title
  statusMessage.value = message
  statusType.value = type
  showStatusModal.value = true
}

const closeStatusModal = () => {
  showStatusModal.value = false
  statusMessage.value = ''
  statusTitle.value = ''
}

const escapeHtml = (value) => {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

const getEditedPreviewHtml = () => {
  const page1Html = previewContentPage1.value || ''
  const page2Html = previewContentPage2.value || ''
  return { page1Html, page2Html }
}

const buildPhotosPagesHtml = (screenshotUrls) => {
  return screenshotUrls.length
    ? `
        <div class="a4-page" style="width: 210mm; min-height: 297mm; background: #ffffff; color: #0f172a; padding: 22mm 20mm; font-family: Arial; font-size: 12pt; box-sizing: border-box;">
          <div class="avoid-break" style="text-align: center; margin: 0 0 14px 0; page-break-inside: avoid; break-inside: avoid;">
            <h1 style="font-size: 18pt; letter-spacing: 1px; margin: 0; text-align: center; text-transform: uppercase; font-weight: bold;">ACTUAL PHOTO</h1>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
            ${screenshotUrls
              .map(
                (url) => `
              <div style="text-align: center; page-break-inside: avoid; break-inside: avoid; margin-bottom: 10px;">
                <img src="${url}" alt="Attendance Photo" width="200" height="200" style="object-fit: contain; display: block; margin: 0 auto; page-break-inside: avoid; break-inside: avoid;">
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      `
    : `
        <div class="a4-page" style="width: 210mm; min-height: 297mm; background: #ffffff; color: #0f172a; padding: 22mm 20mm; font-family: Arial; font-size: 12pt; box-sizing: border-box;">
          <div class="avoid-break" style="text-align: center; margin: 0 0 14px 0; page-break-inside: avoid; break-inside: avoid;">
            <h1 style="font-size: 18pt; letter-spacing: 1px; margin: 0; text-align: center; text-transform: uppercase; font-weight: bold;">ACTUAL PHOTO</h1>
          </div>
          <div class="avoid-break" style="margin-top: 22px; padding: 16px; border: 1px dashed #cbd5f5; border-radius: 10px; text-align: center; font-size: 12px; color: #64748b; background: #f8fafc; page-break-inside: avoid; break-inside: avoid;">
            No photographic evidence was attached for this report.
          </div>
        </div>
      `
}

const buildPreviewPage1Html = (record) => {
  const subjectText = record.subject || ''
  const narrativeText = record.subject || 'No activity narrative provided.'
  const locationLine = record.address ? record.address : 'No deployment address submitted.'
  const safeSubject = escapeHtml(subjectText)
  const safeNarrative = escapeHtml(narrativeText)
  const subjectHtml = (safeSubject || '&nbsp;').toUpperCase()
  const narrativeHtml = safeNarrative || '&nbsp;'

  return `
        <div class="a4-page" style="width: 210mm; min-height: 297mm; background: #ffffff; color: #0f172a; padding: 20mm 18mm; padding-top: 10mm; font-family: Arial; font-size: 12pt; box-sizing: border-box; page-break-after: always;">
          <div style="margin-bottom: 20px; page-break-after: avoid;">
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
              <tr>
                <td style="width: 70px; text-align: left; vertical-align: middle;">
                  <img src="${pnpSeal}" alt="PNP Seal" width="65" height="75" style="display: block; margin: 0 auto 0 0; width: 65px; height: 75px; object-fit: contain;">
                </td>
                <td style="text-align: center; color: #080616; vertical-align: middle; padding: 0 3px; letter-spacing: 0.4px;">
                  <p style="margin: 0 0 1px 0; font-size: 10pt;">Republic of the Philippines</p>
                  <p style="margin: 0 0 1px 0; font-size: 10pt;">National Police Commission</p>
                  <p style="margin: 1px 0; font-size: 11pt; font-weight: bold;">PHILIPPINE NATIONAL POLICE, POLICE REGIONAL OFFICE 13</p>
                  <p style="margin: 1px 0; font-size: 11pt;">BUTUAN CITY POLICE OFFICE</p>
                  <p style="margin: 1px 0; font-size: 11pt; font-weight: bold;">BUTUAN CITY POLICE STATION 1</p>
                  <p style="margin: 1px 0; font-size: 11pt;">AD Curato St., cor. JC Aquino Avenue, Butuan City</p>
                </td>
                <td style="width: 70px; text-align: right; vertical-align: middle;">
                  <img src="${bcpoSeal}" alt="BCPO Seal" width="65" height="65" style="display: block; margin: 0 0 0 auto; object-fit: contain;">
                </td>
              </tr>
            </table>
          </div>
          <div style="text-align: left; margin-bottom: 10px; page-break-after: avoid;">
            <h1 style="margin: 0; font-size: 11pt; letter-spacing: 3px; font-weight: bold;">MEMORANDUM</h1>
          </div>
          <table style="width: 100%; border: none; font-size: 11pt; margin-bottom: 10px; page-break-after: avoid;">
            <tr>
              <td style="width: 60px; padding: 3px 0;">FOR</td>
              <td style="padding: 3px 0;">: ${record.for}</td>
            </tr>
            <tr>
              <td style="padding: 3px 0;">FROM</td>
              <td style="padding: 3px 0;">: ${record.fullRankName || record.name || 'Acting Station Commander, BCPS1'}</td>
            </tr>
            <tr>
              <td style="padding: 3px 0;">SUBJECT</td>
              <td style="padding: 3px 0; font-weight: bold;">: ${subjectHtml}</td>
            </tr>
            <tr>
              <td style="padding: 3px 0;">DATE</td>
              <td style="padding: 3px 0;">: ${record.reportDate || record.date || 'N/A'}</td>
            </tr>
          </table>
          <table style="width: 100%; border-collapse: collapse; margin: 8pt 0; page-break-after: avoid;">
            <tr>
              <td style="border-top: 2pt solid #0f172a; padding: 0; height: 0; line-height: 0;"></td>
            </tr>
          </table>
          <div style="color: #0f172a; margin-left: 18pt; margin-top: 10px;">
            <div style="margin-bottom: 10px; font-size: 11pt; color: #1e293b;">
              <p style="margin: 0 0 4px 0;">1. References:</p>
              <ol style="margin: 0 0 0 16px; padding: 0;">
                <li style="margin: 0 0 2px 0;">${record.reference}</li>
              </ol>
            </div>
            <div style="color: #0f172a; font-size: 11pt; margin-bottom: 12px;">
              <p style="margin: 0 0 4px 0; text-align: justify; margin-left: 0; padding-left: 18pt; text-indent: -18pt;">2. ${record.description}</p>
            </div>
            <div style="margin-bottom: 10px; font-size: 11pt; color: #1e293b;">
            <p style="margin: 0; font-size: 11pt;">3. For information.</p>
            </div>
          </div>
          <div class="avoid-break" style="margin: 0; margin-top: 10mm; page-break-inside: avoid; break-inside: avoid;">
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed; page-break-inside: avoid; break-inside: avoid;">
              <tr class="avoid-break" style="page-break-inside: avoid; break-inside: avoid;">
                <td style="width: 60%;"></td>
                <td style="width: 40%; text-align: right; vertical-align: top;">
                  <div class="avoid-break" style="display: inline-block; text-align: center; width: 6.5cm; page-break-inside: avoid; break-inside: avoid;">
                    <img src="${signature}" alt="Signature" width="120" height="60" style="display: block; margin: 0 auto 2px auto; width: 120px; height: 60px; object-fit: contain; page-break-inside: avoid; break-inside: avoid;">
                    <div style="line-height: 1.2;">
                      <div style="font-weight: bold; font-size: 11pt; margin: 0;">NAMRA P ARIMAO JR</div>
                      <div style="font-size: 11pt; margin: 0;">Police Captain</div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `
}


// Officers without attendance
const officersWithoutAttendance = computed(() => filteredAbsenceRecords.value)

const toDateInputValue = (date) => {
  const tzOffsetMs = date.getTimezoneOffset() * 60_000
  return new Date(date.getTime() - tzOffsetMs).toISOString().slice(0, 10)
}

// Date filter defaults to today's date
const setDefaultDate = () => {
  selectedDate.value = toDateInputValue(new Date())
  selectedAbsenceDate.value = toDateInputValue(new Date())
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
    // Fetch submitted AAR reports via RPC with "complied" status
    const { data: attendance, error } = await supabase
      .rpc('get_reports_by_status', { p_status: 'complied' })

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
        p_id: record.p_id,
        date: formattedDate,
        dateObj,
        rank: fallbackRank,
        name: fullRankName,
        fullRankName,
        status: record.status,
        screenshots: record.screenshots || '',
        for: record.for || '',
        subject: record.subject || '',
        address: record.address || '',
        reportDate: narrativeDate,
        reference: record.reference || '',
        description: record.description || '',
      }
    })

    filterRecords()
    filterAbsenceRecords()
  } catch (error) {
    console.error('Error fetching records:', error)
    alert(`Unable to fetch AAR data. Details: ${error?.message || error}`)
  }
}

// Filter records by selected date and name
const filterRecords = () => {
  let filtered = allRecords.value

  // Filter by name if search is provided
  if (searchName.value.trim()) {
    const searchLower = searchName.value.toLowerCase().trim()
    filtered = filtered.filter((record) =>
      record.name.toLowerCase().includes(searchLower)
    )
  }

  // Filter by date if selected
  if (selectedDate.value) {
    const selected = new Date(selectedDate.value)
    selected.setHours(0, 0, 0, 0)

    const endOfDay = new Date(selected)
    endOfDay.setHours(23, 59, 59, 999)

    filtered = filtered.filter((record) => {
      if (!record.dateObj) {
        return false
      }
      return record.dateObj >= selected && record.dateObj <= endOfDay
    })
  }

  filteredRecords.value = filtered
}

// Reset filters
const resetFilters = () => {
  selectedDate.value = ''
  searchName.value = ''
  filteredRecords.value = allRecords.value
}

// Filter absence records separately by name and date
const filterAbsenceRecords = async () => {
  try {
    // Always fetch from get_no_aar with current date
    const { data: absenceData, error: absenceError } = await supabase
      .rpc('get_no_aar', { p_status: 'complied', p_date: selectedAbsenceDate.value })

    if (absenceError) throw absenceError

    absenceRecords.value = (absenceData || []).map((record) => {
      return {
        id: record.id,
        p_id: record.p_id,
        date: 'N/A',
        dateObj: null,
        subject: record.subject || '',
        address: record.address || '',
        screenshots: record.screenshots || '',
        rank_fullname: record.rank_fullname || 'Unknown',
        for: record.for || '',
        reference: record.reference || '',
        description: record.description || '',
      }
    })

    let filtered = absenceRecords.value

    // Filter by name if search is provided
    if (searchAbsenceName.value.trim()) {
      const searchLower = searchAbsenceName.value.toLowerCase().trim()
      filtered = filtered.filter((record) =>
        record.rank_fullname.toLowerCase().includes(searchLower)
      )
    }

    filteredAbsenceRecords.value = filtered
  } catch (error) {
    console.error('Error filtering absence records:', error)
  }
}

// Reset absence filters
const resetAbsenceFilters = () => {
  selectedAbsenceDate.value = toDateInputValue(new Date())
  searchAbsenceName.value = ''
  filterAbsenceRecords()
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
      .avoid-break { page-break-inside: avoid; break-inside: avoid; }
      tr.avoid-break, td.avoid-break { page-break-inside: avoid; break-inside: avoid; }
      .signature-block { width: 100%; text-align: right; margin: 20px 0 12px 0; color: #0f172a; font-size: 12pt; }
      .signature-inner { display: inline-block; position: relative; text-align: center; font-size: 12pt; padding-top: 70px; }
      .signature-image { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 140px; height: 70px; object-fit: contain; opacity: 0.95; z-index: 0; pointer-events: none; }
      .signature-text { position: relative; z-index: 1; }
    </style></head><body><div class="doc-wrapper">${bodyContent}</div></body></html>`

const normalizeHtmlForDocx = (html) => {
  if (!html) return ''
  if (typeof window === 'undefined' || typeof DOMParser === 'undefined') return html

  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html')
    const root = doc.body?.firstElementChild
    if (!root) return html

    const images = Array.from(root.querySelectorAll('img'))
    images.forEach((img) => {
      const existingStyleRaw = (img.getAttribute('style') || '').trim()
      const existingStyle = existingStyleRaw.toLowerCase()
      const isAbsolutelyPositioned = existingStyle.includes('position: absolute')
      const insideTable = !!img.closest('table')

      const hasWidth = /(^|;)\s*width\s*:/i.test(existingStyleRaw)
      const hasMaxWidth = /(^|;)\s*max-width\s*:/i.test(existingStyleRaw)
      const hasHeight = /(^|;)\s*height\s*:/i.test(existingStyleRaw)
      const hasMaxHeight = /(^|;)\s*max-height\s*:/i.test(existingStyleRaw)

      const safePatchParts = ['page-break-inside: avoid', 'break-inside: avoid']

      if (!hasWidth && !hasMaxWidth) safePatchParts.push('max-width: 100%')
      if (!hasHeight && !hasMaxHeight) safePatchParts.push('height: auto')

      const safePatch = `${safePatchParts.join('; ')};`
      const flowPatch =
        'display: block; margin-left: auto; margin-right: auto; page-break-inside: avoid; break-inside: avoid;'

      const patchStyle = isAbsolutelyPositioned
        ? safePatch
        : insideTable
          ? safePatch
          : `${safePatch}; ${flowPatch}`

      img.setAttribute('style', existingStyleRaw ? `${existingStyleRaw}; ${patchStyle}` : patchStyle)

      // Only wrap images that are in normal flow (not absolutely positioned) and not inside tables
      if (!isAbsolutelyPositioned && !insideTable) {
        const parent = img.parentElement
        const alreadyWrapped = parent?.classList?.contains('avoid-break')
        if (!alreadyWrapped && parent) {
          const wrapper = doc.createElement('div')
          wrapper.className = 'avoid-break'
          wrapper.setAttribute('style', 'page-break-inside: avoid; break-inside: avoid;')
          parent.insertBefore(wrapper, img)
          wrapper.appendChild(img)
        }
      }
    })

    return root.innerHTML
  } catch {
    return html
  }
}

// Extract edited values from the preview HTML
const extractEditedValuesFromPreview = () => {
  if (!editablePreviewEl.value) {
    console.error('[AAR Extract] editablePreviewEl is null')
    return null
  }

  const html = editablePreviewEl.value.innerHTML
  console.log('[AAR Extract] Extracting from preview HTML')

  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    // Extract FOR - find the table cell after "FOR" label
    let forValue = ''
    const tdElements = Array.from(doc.querySelectorAll('td'))
    for (let i = 0; i < tdElements.length; i++) {
      if (tdElements[i].textContent.trim().toUpperCase() === 'FOR') {
        if (tdElements[i + 1]) {
          forValue = tdElements[i + 1].textContent.replace(/^\s*:\s*/, '').trim()
        }
        break
      }
    }

    // Extract SUBJECT - find the table cell after "SUBJECT" label
    let subjectValue = ''
    for (let i = 0; i < tdElements.length; i++) {
      if (tdElements[i].textContent.trim().toUpperCase() === 'SUBJECT') {
        if (tdElements[i + 1]) {
          subjectValue = tdElements[i + 1].textContent.replace(/^\s*:\s*/, '').trim()
        }
        break
      }
    }

    // Extract ADDRESS - find deployment address line
    let addressValue = ''
    const allText = doc.body.innerText
    const addressMatch = allText.match(/(?:Deployment Address|Location|Address)[:\s]+([^\n]+)/i)
    if (addressMatch) {
      addressValue = addressMatch[1].trim()
    }

    // Extract REFERENCE - find the first list item
    const firstLi = doc.querySelector('ol li')
    const referenceValue = firstLi ? firstLi.textContent.trim() : ''

    // Extract DESCRIPTION - find paragraph starting with "2."
    let descriptionValue = ''
    const paragraphs = Array.from(doc.querySelectorAll('p'))
    for (const p of paragraphs) {
      const text = p.textContent.trim()
      if (text.startsWith('2.')) {
        descriptionValue = text.replace(/^2\.\s*/, '').trim()
        break
      }
    }

    console.log('[AAR Extract] Extracted values:', {
      forValue,
      subjectValue,
      addressValue,
      referenceValue,
      descriptionValue
    })

    return { forValue, subjectValue, addressValue, referenceValue, descriptionValue }
  } catch (error) {
    console.error('[AAR Extract] Error extracting values:', error)
    return null
  }
}

// Save the edited preview changes to Supabase
const savePreviewChanges = async () => {
  if (!previewRecord.value) {
    showStatusModalMessage('Error', 'No record selected.', 'error')
    return
  }

  console.log('[AAR Save] Saving changes for record ID:', previewRecord.value.id)

  const extracted = extractEditedValuesFromPreview()
  if (!extracted) {
    showStatusModalMessage('Error', 'Could not extract values from preview.', 'error')
    return
  }

  const { forValue, subjectValue, addressValue, referenceValue, descriptionValue } = extracted

  // Compare with original values to detect changes
  const hasForChange = forValue !== (previewRecord.value.for || '')
  const hasSubjectChange = subjectValue !== (previewRecord.value.subject || '')
  const hasAddressChange = addressValue !== (previewRecord.value.address || '')
  const hasReferenceChange = referenceValue !== (previewRecord.value.reference || '')
  const hasDescriptionChange = descriptionValue !== (previewRecord.value.description || '')

  if (!hasForChange && !hasSubjectChange && !hasAddressChange && !hasReferenceChange && !hasDescriptionChange) {
    showStatusModalMessage('Info', 'No changes detected.', 'info')
    return
  }

  isSavingFields.value = true

  try {

    const rpcParams = { p_report_id: previewRecord.value.p_id }

    if (hasSubjectChange) rpcParams.p_new_subject = subjectValue?.trim() || null
    if (hasAddressChange) rpcParams.p_new_address = addressValue?.trim() || null
    if (hasForChange) rpcParams.p_new_for = forValue?.trim() || null
    if (hasDescriptionChange) rpcParams.p_new_description = descriptionValue?.trim() || null
    if (hasReferenceChange) rpcParams.p_new_reference = referenceValue?.trim() || null

    console.log('[AAR RPC] Calling update_report_fields with:', rpcParams)

    const { data, error } = await supabase.rpc('update_report_fields', rpcParams)

    
    console.log('[AAR RPC] RPC response:', data)


    if (error) {
      console.error('[AAR RPC] Error calling RPC:', error)
      throw error
    }

    if (!data || data.length === 0) {
      showStatusModalMessage('Info', 'No records updated. Please verify the record status.', 'info')
      isSavingFields.value = false
      return
    }

    // Update local state with the first updated record
    const updatedRecord = data[0]
    previewRecord.value = {
      ...previewRecord.value,
      for: updatedRecord.for,
      subject: updatedRecord.subject,
      address: updatedRecord.address,
      reference: updatedRecord.reference,
      description: updatedRecord.description
    }

    // Update in all lists
    const updateInList = (listRef) => {
      const index = listRef.value.findIndex(item => item.id === previewRecord.value.id)
      if (index !== -1) {
        listRef.value[index] = {
          ...listRef.value[index],
          for: updatedRecord.for,
          subject: updatedRecord.subject,
          address: updatedRecord.address,
          reference: updatedRecord.reference,
          description: updatedRecord.description
        }
      }
    }
    updateInList(allRecords)
    updateInList(filteredRecords)

    // Now upload the document after saving changes
    try {
      const { page1Html, page2Html } = getEditedPreviewHtml()
      const contentToUpload = normalizeHtmlForDocx(`${page1Html || ''}${page2Html || ''}`)
      
      if (contentToUpload) {
        const officerName = previewRecord.value?.name || 'Officer'
        const reportDate = previewRecord.value?.reportDate || ''
        const filename = reportDate
          ? `AAR_Report_${officerName.replace(/[^a-z0-9]+/gi, '_')}_${reportDate.replace(/[^a-z0-9]+/gi, '_')}.docx`
          : `AAR_Report_${officerName.replace(/[^a-z0-9]+/gi, '_')}.docx`
        
        const htmlWithInlineHeaders = inlineHeaderImages(contentToUpload)
        const fullyInlinedHtml = await inlineAllImages(htmlWithInlineHeaders)
        await uploadWordReport(fullyInlinedHtml, filename)
      }
    } catch (uploadError) {
      console.error('[AAR Save] Document upload error:', uploadError)
      // Don't fail the save if upload fails, just log it
    }

    showStatusModalMessage('Success', `Successfully updated ${data.length} record(s).`, 'success')
  } catch (error) {
    console.error('[AAR RPC] Error:', error)
    showStatusModalMessage('Error', `Failed to save changes: ${error.message}`, 'error')
  } finally {
    isSavingFields.value = false
  }
}

// Save edited fields via RPC function


const downloadFromPreview = async () => {
  if (isCompliedReportsPreview.value) {
    await downloadAllCompliedReports()
    return
  }

  if (isWithoutAttendancePreview.value) {
    await downloadWithoutAttendanceReport()
    return
  }

  const { page1Html, page2Html } = getEditedPreviewHtml()
  previewContentPage1.value = page1Html
  previewContentPage2.value = page2Html
  previewContent.value = `${page1Html}${page2Html}`

  const page1ToDownload = previewContentPage1.value
  const page2ToDownload = previewContentPage2.value
  const contentToDownload = normalizeHtmlForDocx(`${page1ToDownload || ''}${page2ToDownload || ''}`)

  if (!contentToDownload) {
    alert('No preview available to download.')
    return
  }

  const filename = previewRecord.value?.reportDate
    ? `AAR_Report_${previewRecord.value.name?.replace(/[^a-z0-9]+/gi, '_') || 'Officer'}_${previewRecord.value.reportDate.replace(/[^a-z0-9]+/gi, '_')}.docx`
    : `AAR_Report_${previewRecord.value?.name?.replace(/[^a-z0-9]+/gi, '_') || 'Officer'}.docx`

  const htmlWithInlineHeaders = inlineHeaderImages(contentToDownload)
  const fullyInlinedHtml = await inlineAllImages(htmlWithInlineHeaders)
  await downloadWordReport(fullyInlinedHtml, filename)
}

// Preview report functions
const previewReport = async (record) => {
  try {
    previewRecord.value = record
    isWithoutAttendancePreview.value = false
    isCompliedReportsPreview.value = false

    // Parse screenshots URLs (comma-separated)
    const screenshotUrls = record.screenshots
      ? record.screenshots
          .split(',')
          .map((url) => url.trim())
          .filter((url) => url)
      : []

    previewContentPage1.value = buildPreviewPage1Html(record)
    previewContentPage2.value = buildPhotosPagesHtml(screenshotUrls)
    previewContent.value = `${previewContentPage1.value}${previewContentPage2.value}`

    showPreviewModal.value = true
  } catch (error) {
    console.error('Error generating preview:', error)
    alert('Error generating preview. Please try again.')
  }
}

// Upload Word report to Supabase storage and documents table
const uploadWordReport = async (htmlContent, filename = 'report.doc') => {
  try {
    const htmlDocx = await loadHtmlDocx()
    const htmlTemplate = buildDocHtml(htmlContent)
    const safeName = filename.toLowerCase().endsWith('.docx')
      ? filename
      : filename.replace(/\.doc$/i, '.docx')
    const docBlob = htmlDocx.asBlob(htmlTemplate)
    
    // Create a File object from the blob for uploading
    const file = new File([docBlob], safeName, { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
    
    // Upload to 'files' bucket
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('files')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      })
    
    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new Error(`Failed to upload ${file.name}: ${uploadError.message}`)
    }
    
    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from('files').getPublicUrl(fileName)
    
    // Insert into documents table with reference to preview.record.id
    if (previewRecord.value && previewRecord.value.id) {
      const { error: insertError } = await supabase
        .from('documents')
        .insert({
          files: publicUrl,
          user_id: previewRecord.value.id,
        })
      
      if (insertError) {
        console.error('Database insert error:', insertError)
        throw new Error(`Failed to save document record: ${insertError.message}`)
      }
      
      console.log('Document uploaded and recorded successfully')
    }
  } catch (error) {
    console.error('Error uploading Word report:', error)
    throw error
  }
}

// Download Word report (without upload - upload is handled in savePreviewChanges)
const downloadWordReport = async (htmlContent, filename = 'report.doc') => {
  try {
    const htmlDocx = await loadHtmlDocx()
    const htmlTemplate = buildDocHtml(htmlContent)
    const safeName = filename.toLowerCase().endsWith('.docx')
      ? filename
      : filename.replace(/\.doc$/i, '.docx')
    const docBlob = htmlDocx.asBlob(htmlTemplate)
    
    // Trigger the download
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
    isCompliedReportsPreview.value = false
    previewContentPage1.value = ''
    previewContentPage2.value = ''

    const officersHTML = officersWithoutAttendance.value
      .map(
        (officer, index) => `
            <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${officer.rank_fullname || 'N/A'}</td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #fee2e2; color: #991b1b; border: 1.5px solid #ef4444;">✗ Absent</span>
                </td>
                <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; color: #374151; font-size: 10px; background: #f9fafb;">No Compliance</td>
            </tr>
        `,
      )
      .join('')

    const previewHTML = `
            <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center;  margin-bottom: 15px; background: transparent; padding: 12px; border-radius: 6px;">
                    <h1 style="color: #080616; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
                    <h2 style="color: #080616; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Officers Without Attendance Report</h2>
                    <p style="color: #080616; font-size: 10px;">Date: ${new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p style="color: #080616; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div style="border: 2px solid #ef4444; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-gradient(to right, #fee2e2 0%, #fef2f2 100%); box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="background: #dc2626; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; shrink: 0;">
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
                            <tr style="background: #1A1953;" >
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

// Preview all complied reports
const previewAllCompliedReports = () => {
  try {
    if (filteredRecords.value.length === 0) {
      alert('No records to preview.')
      return
    }

    previewRecord.value = null
    isWithoutAttendancePreview.value = false
    isCompliedReportsPreview.value = true

    const reportTableHtml = filteredRecords.value
      .map(
        (record, index) => `
          <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
            <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${record.date}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${record.name}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
              <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #d1fae5; color: #065f46; border: 1.5px solid #10b981;">✓ ${record.status}</span>
            </td>
          </tr>
        `,
      )
      .join('')

    const previewHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 15px; background: linear-linear(135deg, #002147 0%, #004595 100%); padding: 12px; border-radius: 6px;">
          <h1 style="color: #1A1953; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
          <h2 style="color: #1A1953; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Complied Reports Summary</h2>
          <p style="color: #1A1953; font-size: 10px;">Date: ${selectedDate.value ? new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'All Dates'}</p>
          <p style="color: #1A1953; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div style="border: 2px solid #10b981; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-linear(to right, #d1fae5 0%, #ecfdf5 100%); box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="background: #059669; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; shrink: 0;">
              <span style="color: #ffffff; font-size: 16px; font-weight: bold;">✓</span>
            </div>
            <div>
              <p style="color: #065f46; font-weight: bold; font-size: 12px; margin: 0;">
                Total Complied Reports: ${filteredRecords.value.length}
              </p>
              <p style="color: #047857; font-size: 10px; margin: 2px 0 0 0;">
                All officers who have submitted their AAR for the selected date
              </p>
            </div>
          </div>
        </div>

        <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: linear-linear(135deg, #002147 0%, #004595 100%);">
                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">Date & Time</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">Rank & Full Name</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${reportTableHtml}
            </tbody>
          </table>
        </div>

        <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
          <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document from the PNP Attendance Monitoring System</p>
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

// Download all complied reports as Word document with table
const downloadAllCompliedReports = async () => {
  try {
    if (filteredRecords.value.length === 0) {
      alert('No records to download.')
      return
    }

    const reportTableHtml = filteredRecords.value
      .map(
        (record, index) => `
          <tr style="${index % 2 === 0 ? 'background: #f9fafb;' : 'background: #ffffff;'}">
            <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center; font-weight: 600; color: #374151; font-size: 11px;">${index + 1}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${record.date}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; color: #1f2937; font-weight: 500; font-size: 11px;">${record.name}</td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; text-align: center;">
              <span style="display: inline-block; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 10px; background: #d1fae5; color: #065f46; border: 1.5px solid #10b981;">✓ ${record.status}</span>
            </td>
          </tr>
        `,
      )
      .join('')

    const allReportsHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 15px; background: linear-linear(135deg, #002147 0%, #004595 100%); padding: 12px; border-radius: 6px;">
          <h1 style="color: #1A1953; font-size: 16px; margin-bottom: 4px; font-weight: bold;">PHILIPPINE NATIONAL POLICE</h1>
          <h2 style="color: #1A1953; font-size: 13px; margin-bottom: 2px; font-weight: bold;">Complied Reports Summary</h2>
          <p style="color: #1A1953; font-size: 10px;">Date: ${selectedDate.value ? new Date(selectedDate.value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'All Dates'}</p>
          <p style="color: #1A1953; font-size: 10px;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div style="border: 2px solid #10b981; border-radius: 6px; padding: 10px; margin-bottom: 15px; background: linear-linear(to right, #d1fae5 0%, #ecfdf5 100%); box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="background: #059669; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; shrink: 0;">
              <span style="color: #ffffff; font-size: 16px; font-weight: bold;">✓</span>
            </div>
            <div>
              <p style="color: #065f46; font-weight: bold; font-size: 12px; margin: 0;">
                Total Complied Reports: ${filteredRecords.value.length}
              </p>
              <p style="color: #047857; font-size: 10px; margin: 2px 0 0 0;">
                All officers who have submitted their AAR for the selected date
              </p>
            </div>
          </div>
        </div>

        <div style="background: #ffffff; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: linear-linear(135deg, #002147 0%, #004595 100%);">
                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 50px; color: #ffffff; font-weight: bold; font-size: 11px;">#</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">Date & Time</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: left; color: #ffffff; font-weight: bold; font-size: 11px;">Rank & Full Name</th>
                <th style="padding: 8px; border: 1px solid #004595; text-align: center; width: 100px; color: #ffffff; font-weight: bold; font-size: 11px;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${reportTableHtml}
            </tbody>
          </table>
        </div>

        <div style="text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb; margin-top: 25px;">
          <p style="color: #6b7280; font-size: 11px; font-weight: 500;">This is an official document from the PNP Attendance Monitoring System</p>
          <p style="color: #9ca3af; font-size: 10px; margin-top: 3px;">For official use only</p>
        </div>
      </div>
    `

    const htmlDocx = await loadHtmlDocx()
    const htmlTemplate = buildDocHtml(allReportsHTML)
    const filename = selectedDate.value
      ? `Complied_Reports_${new Date(selectedDate.value)
          .toLocaleDateString('en-US')
          .replace(/[^a-z0-9]+/gi, '_')}.docx`
      : 'Complied_Reports.docx'

    const docBlob = htmlDocx.asBlob(htmlTemplate)
    saveAs(docBlob, filename)
  } catch (error) {
    console.error('Error downloading complied reports:', error)
    alert('Error downloading complied reports. Please try again.')
  }
}

const closePreview = async () => {
  showPreviewModal.value = false
  previewContent.value = ''
  previewContentPage1.value = ''
  previewContentPage2.value = ''
  previewRecord.value = null
  isWithoutAttendancePreview.value = false
  isCompliedReportsPreview.value = false
  editablePreviewEl.value = null
}

// (Edit mode removed) Keep preview modal view-only

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

.preview-page {
  background: transparent;
  width: 100%;
  max-width: 210mm;
  margin: 0 auto;
}

.preview-page :deep(.a4-page) {
  margin: 0 auto;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.18);
  width: 210mm;
  page-break-after: always;
}

.editable-preview {
  width: 100%;
}

.editable-preview:focus {
  outline: none;
}
</style>