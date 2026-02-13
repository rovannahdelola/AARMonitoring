<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#e7f0ff_0%,#f5f7fb_45%,#eaf0ff_100%)]"
  >
    <div
      class="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0%,rgba(189,212,255,0.35)_45%,rgba(255,255,255,0.2)_100%)]"
    ></div>
    <div class="relative max-w-[1600px] mx-auto px-4 md:px-8 py-4 md:py-6">
      <!-- Header -->
      <div
        class="rounded-2xl p-5 md:p-6 mb-5 md:mb-6 text-white shadow-xl border border-white/20 bg-[linear-gradient(120deg,#001a3d_0%,#003f8c_55%,#0c66c6_100%)]"
      >
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
            <!-- Logo -->
            <div class="flex items-center gap-3">
              <img
                src="../assets/BCPO1.png"
                alt="Police Station 1"
                class="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <div class="text-center md:text-left md:ml-2">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/15 text-[#d8e6ff]"
              >
                <span>Daily AAR</span>
                <span class="w-1 h-1 rounded-full bg-white"></span>
                <span>Station 1</span>
              </div>
              <h1 class="text-2xl md:text-3xl font-extrabold uppercase mt-2">
                Attendance Check-In
              </h1>
              <p class="text-xs md:text-sm font-semibold mt-1 text-[#fcd77f]">
                Philippine National Police · Police Station 1
              </p>
            </div>
          </div>
          <button
            @click="returnToLogin"
            class="text-white font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition w-full md:w-auto justify-center shadow-lg shadow-black/20 bg-[linear-gradient(135deg,#f04444,#c91f1f)]"
          >
            <svg
              class="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            <span class="text-sm md:text-base">Back to Login</span>
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 md:mb-6">
        <!-- Current Date -->
        <div
          class="rounded-2xl p-5 md:p-6 shadow-xl border border-white/60 backdrop-blur-sm bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(232,238,255,0.95))] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div>
              <p
                class="text-[11px] md:text-xs font-semibold tracking-wide uppercase text-[#5c6b93]"
              >
                Today's Date
              </p>
              <p class="text-lg md:text-2xl font-bold mt-1 text-[#002147]">
                {{ currentDate }}
              </p>
            </div>
            <div class="rounded-2xl p-3 bg-[rgba(16,185,129,0.15)]">
              <svg
                class="w-6 h-6 md:w-7 md:h-7 text-[#10b981]"
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
          </div>
        </div>

        <!-- Current Time -->
        <div
          class="rounded-2xl p-5 md:p-6 shadow-xl border border-white/60 backdrop-blur-sm bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(223,236,255,0.95))] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <div class="flex items-center justify-between">
            <div>
              <p
                class="text-[11px] md:text-xs font-semibold tracking-wide uppercase text-[#5c6b93]"
              >
                Current Time
              </p>
              <p class="text-2xl md:text-3xl font-bold mt-1 text-[#002147]">
                {{ currentTime }}
              </p>
            </div>
            <div class="rounded-2xl p-3 bg-[rgba(251,191,36,0.18)]">
              <svg
                class="w-6 h-6 md:w-7 md:h-7 text-[#fbbf24]"
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
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
        <!-- Left Column: Instructions -->
        <div class="lg:col-span-3 order-1 space-y-4">
          <!-- Instructions Card -->
          <div
            class="rounded-2xl p-5 shadow-lg border border-[#d4def8] bg-[linear-gradient(155deg,#ffffff_0%,#eef3ff_65%,#e3ecff_100%)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="rounded-xl p-2 bg-[#002147]">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h2 class="text-base md:text-lg font-bold text-[#002147]">Submission Protocol</h2>
                <p class="text-[11px] font-semibold tracking-wide uppercase text-[#5c6b93]">
                  Follow each step carefully
                </p>
              </div>
            </div>
            <div class="space-y-3 border-l-2 border-[#cdd8ff] pl-4">
              <div class="flex gap-3 items-start rounded-xl p-3">
                <div
                  class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#002147]"
                >
                  1
                </div>
                <div>
                  <p class="text-xs md:text-sm font-semibold text-[#0f1f4b]">Select Officer</p>
                  <p class="text-[11px] md:text-xs text-gray-600">
                    Use the search field to pick your official rank and name from the roster.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start rounded-xl p-3">
                <div
                  class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#002147]"
                >
                  2
                </div>
                <div>
                  <p class="text-xs md:text-sm font-semibold text-[#0f1f4b]">Describe Activity</p>
                  <p class="text-[11px] md:text-xs text-gray-600">
                    Complete the description box with your duty summary and accountability notes.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start rounded-xl p-3">
                <div
                  class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#002147]"
                >
                  3
                </div>
                <div>
                  <p class="text-xs md:text-sm font-semibold text-[#0f1f4b]">Confirm Address</p>
                  <p class="text-[11px] md:text-xs text-gray-600">
                    Enter the exact deployment location, including barangay or landmark for clarity.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start rounded-xl p-3">
                <div
                  class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#002147]"
                >
                  4
                </div>
                <div>
                  <p class="text-xs md:text-sm font-semibold text-[#0f1f4b]">Set Deployment Date</p>
                  <p class="text-[11px] md:text-xs text-gray-600">
                    Use the date picker to match the actual day of your field assignment.
                  </p>
                </div>
              </div>
              <div class="flex gap-3 items-start rounded-xl p-3">
                <div
                  class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[#002147]"
                >
                  5
                </div>
                <div>
                  <p class="text-xs md:text-sm font-semibold text-[#0f1f4b]">Attach Evidence</p>
                  <p class="text-[11px] md:text-xs text-gray-600">
                    Upload clear PNG/JPG screenshots (max 25MB each) that prove your deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Important Notice (hidden on mobile) -->
          <div
            class="hidden lg:block rounded-2xl p-4 shadow-md border-l-4 bg-[#eaf0ff] border-[#0f63c7] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div class="flex items-start gap-3">
              <svg
                class="w-6 h-6 flex-shrink-0 text-[#0f63c7]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <h3 class="font-bold text-sm md:text-base mb-2 text-[#10224b]">Important Notice</h3>
                <p class="text-xs md:text-sm text-[#1f3b7b]">
                  Ensure all information is accurate before submission. Screenshots must be clear
                  and readable.
                </p>
              </div>
            </div>
          </div>

          <!-- System Information (hidden on mobile) -->
          <div
            class="hidden lg:block bg-white rounded-lg p-4 shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <h3 class="font-bold text-sm md:text-base mb-3 text-[#002147]">System Information</h3>
            <div class="space-y-2">
              <div class="flex justify-between text-xs md:text-sm">
                <span class="text-gray-600">Status:</span>
                <span class="font-bold text-green-600">● Active</span>
              </div>
              <div class="flex justify-between text-xs md:text-sm">
                <span class="text-gray-600">Registered Users:</span>
                <span class="font-bold text-[#002147]">{{ allUsers.length }}</span>
              </div>
              <div class="flex justify-between text-xs md:text-sm">
                <span class="text-gray-600">Max File Size:</span>
                <span class="font-bold text-[#002147]">25 MB</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="lg:col-span-9 order-2">
          <div class="bg-white rounded-lg p-6 space-y-5 shadow-md">
            <div
              class="flex items-center gap-3 p-4 rounded-lg bg-[#eff6ff] border-l-4 border-[#002147]"
            >
              <div class="rounded-lg p-2 bg-[#002147]">
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-white"
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
                <p class="text-sm md:text-base font-bold text-[#002147]">
                  Attendance Registration Form
                </p>
                <p class="text-xs text-gray-600">Complete all required fields below</p>
              </div>
            </div>

            <!-- Error Message -->
            <div
              v-if="fetchError"
              class="border-l-4 border-[#dc2626] bg-[#fee2e2] p-4 rounded-lg text-xs md:text-sm font-bold text-[#dc2626]"
            >
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p>{{ fetchError }}</p>
              </div>
            </div>

            <!-- Searchable User Selection -->
            <div
              class="rounded-2xl border border-[#dfe7ff] bg-white/95 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg relative z-20"
            >
              <label
                class="text-sm md:text-base font-bold mb-3 flex items-center gap-2 text-[#002147]"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0"
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
                1. Select Your Name <span class="text-red-600">*</span>
              </label>
              <div class="relative">
                <input
                  ref="searchInput"
                  v-model="searchQuery"
                  @focus="showDropdown = true"
                  @blur="hideDropdown"
                  :disabled="isLoadingUsers"
                  type="text"
                  placeholder="Type to search or click to view all..."
                  class="w-full px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm border-2 border-[#d1d5db] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition font-medium text-[#002147]"
                  autocomplete="off"
                />

                <!-- Dropdown List -->
                <div
                  v-if="showDropdown && !isLoadingUsers"
                  class="absolute z-40 w-full mt-2 bg-white border-2 border-[#d1d5db] rounded-lg max-h-64 overflow-y-auto shadow-lg"
                >
                  <div
                    v-if="filteredUsers.length === 0"
                    class="px-3 md:px-4 py-2.5 md:py-3 text-gray-500 text-xs md:text-sm"
                  >
                    No users found
                  </div>
                  <div
                    v-for="user in filteredUsers"
                    :key="user.id"
                    @mousedown.prevent="selectUser(user)"
                    class="px-3 md:px-4 py-2.5 md:py-3 hover:bg-blue-50 cursor-pointer text-xs md:text-sm border-b last:border-b-0 transition font-medium text-gray-700"
                    :class="
                      selectedUserId === user.id ? 'font-bold bg-blue-100 text-[#002147]' : ''
                    "
                  >
                    {{ user.rank_fullname }}
                  </div>
                </div>

                <!-- Clear button / Loading indicator -->
                <button
                  v-if="selectedUserId && !isLoadingUsers"
                  type="button"
                  @mousedown.prevent
                  @click="clearSelection"
                  class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#dc2626] bg-white border border-[#fecaca] px-3 py-1 rounded-md hover:bg-[#fee2e2] transition"
                >
                  Clear
                </button>
                <div v-else-if="isLoadingUsers" class="absolute right-3 top-2.5 md:top-3">
                  <svg
                    class="animate-spin h-4 w-4 md:h-5 md:w-5 text-blue-900"
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
                </div>
              </div>

              <p v-if="!isLoadingUsers && allUsers.length > 0" class="text-xs text-gray-500 mt-4">
                {{ filteredUsers.length }} of {{ allUsers.length }} users
              </p>
            </div>

            <!-- Additional Details -->
            <div
              class="relative rounded-3xl border border-[#cdd8ff] bg-white/95 p-6 space-y-5 shadow-xl shadow-blue-50 overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div
                class="absolute inset-0 opacity-70 pointer-events-none bg-[linear-gradient(130deg,rgba(228,235,255,0.35)_0%,rgba(232,244,255,0.65)_60%,rgba(255,255,255,0.4)_100%)]"
              ></div>
              <div class="relative flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <div
                    class="rounded-2xl p-3 shadow-md bg-[linear-gradient(140deg,#002147,#0f63c7)]"
                  >
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
                        d="M9 5h6m-8 4h10m-12 4h7m-7 4h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm md:text-base font-bold text-[#001b44]">Operational Details</p>
                    <p
                      class="text-[11px] md:text-xs font-semibold tracking-wide uppercase text-[#5c6b93]"
                    >
                      Complete all accountability fields
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-end text-right">
                  <span
                    class="text-[10px] font-bold tracking-wide px-3 py-1 rounded-full bg-[#e0e7ff] text-[#3730a3]"
                    >All fields required</span
                  >
                  <span class="text-[10px] font-semibold mt-1 text-[#93a1d3]"
                    >Reviewed before submission</span
                  >
                </div>
              </div>
              <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div
                  class="rounded-2xl border border-[#d8e2ff] p-4 bg-white/90 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <label
                    class="text-sm md:text-base font-bold mb-2 flex items-center gap-2 text-[#002147]"
                  >
                    <span
                      class="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs shadow bg-[linear-gradient(135deg,#002147,#0f63c7)]"
                      >2</span
                    >
                    Description <span class="text-red-600">*</span>
                  </label>
                  <textarea
                    v-model="formData.description"
                    rows="4"
                    class="w-full px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm border-2 border-[#d1dcfb] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition font-medium text-[#001b44] bg-[#f8fbff]"
                    placeholder="Provide a brief description of your duty or activity"
                  ></textarea>
                  <p class="text-[10px] text-gray-500 mt-2">
                    Example: Traffic monitoring along Aurora Blvd.
                  </p>
                </div>
                <div class="space-y-4">
                  <div
                    class="rounded-2xl border border-[#d8e2ff] p-4 bg-white/90 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <label
                      class="text-sm md:text-base font-bold mb-2 flex items-center gap-2 text-[#002147]"
                    >
                      <span
                        class="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs shadow bg-[linear-gradient(135deg,#002147,#0f63c7)]"
                        >3</span
                      >
                      Address <span class="text-red-600">*</span>
                    </label>
                    <input
                      v-model="formData.address"
                      type="text"
                      class="w-full px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm border-2 border-[#d1dcfb] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition font-medium text-[#001b44] bg-[#f8fbff]"
                      placeholder="Enter your current deployment address"
                    />
                    <p class="text-[10px] text-gray-500 mt-2">
                      Include specific barangay or landmark when possible.
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-[#cfdfff] p-4 bg-[linear-gradient(135deg,#e9f2ff_0%,#dbeafe_100%)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <span
                        class="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs shadow bg-[linear-gradient(135deg,#002147,#0f63c7)]"
                        >4</span
                      >
                      <p class="text-sm md:text-base font-bold text-[#002147]">
                        Date <span class="text-red-600">*</span>
                      </p>
                    </div>
                    <div class="relative">
                      <span class="text-[11px] font-semibold uppercase tracking-wide text-[#1e3a8a]"
                        >Selected Date</span
                      >
                      <div
                        class="mt-1 flex items-center gap-2 rounded-2xl border border-white/70 bg-white px-3 py-2.5 shadow-sm"
                      >
                        <svg
                          class="w-4 h-4 text-[#002147]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <input
                          v-model="formData.date"
                          type="date"
                          class="w-full bg-transparent text-xs md:text-sm font-semibold focus:outline-none text-[#002147]"
                        />
                      </div>
                      <p class="text-[11px] font-semibold mt-2 text-[#1e3a8a]">
                        Use the date that matches your actual deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Screenshot Upload Field -->
            <div class="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              <label
                class="text-sm md:text-base font-bold mb-3 flex items-center gap-2 text-[#002147]"
              >
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                5. Upload Screenshots <span class="text-red-600">*</span>
              </label>
              <div
                class="rounded-2xl border-2 border-dashed border-[#95b2ff] p-6 transition-all duration-200 shadow-inner bg-[linear-gradient(145deg,#f8fbff_0%,#eef3ff_100%)] hover:-translate-y-0.5 hover:shadow-xl"
              >
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  multiple
                  @change="handleFileUpload"
                  class="hidden"
                />

                <div
                  v-if="previewImages.length === 0"
                  @click="$refs.fileInput.click()"
                  class="cursor-pointer text-center"
                >
                  <div
                    class="rounded-2xl p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3 shadow bg-[linear-gradient(140deg,#002147,#0f63c7)]"
                  >
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="text-sm font-bold text-[#0f1f4b]">Click to upload</p>
                  <p class="text-xs text-gray-500 mt-2">
                    PNG, JPG · Max 25MB per file · Minimum of 1 attachment
                  </p>
                </div>

                <div v-else class="space-y-4">
                  <!-- Horizontal scrollable image gallery -->
                  <div class="flex gap-3 overflow-x-auto pb-3">
                    <div
                      v-for="(preview, index) in previewImages"
                      :key="index"
                      class="relative shrink-0 bg-white rounded border border-[#e5e7eb] hover:border-gray-400 transition"
                    >
                      <div class="relative">
                        <img
                          @click="zoomImage(preview.url)"
                          :src="preview.url"
                          alt="Preview"
                          class="w-28 h-28 md:w-32 md:h-32 object-cover rounded cursor-zoom-in"
                        />
                        <button
                          @click.stop="removeImage(index)"
                          class="absolute -top-2 -right-2 text-white rounded-full p-1.5 transition hover:opacity-90 bg-[#dc2626]"
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
                        </button>
                        <div
                          class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-2 rounded-b"
                        >
                          <p class="truncate px-1 font-semibold">{{ preview.name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    @click="$refs.fileInput.click()"
                    class="w-full text-white font-bold py-3 rounded-xl text-sm transition hover:opacity-90 flex items-center justify-center gap-2 shadow bg-[linear-gradient(135deg,#003c94,#0d63c6)]"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                    Add More Screenshots
                  </button>
                </div>
                <div
                  class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-semibold text-[#0f1f4b]"
                >
                  <div class="rounded-lg bg-white/80 border border-[#dfe7ff] px-3 py-2 text-center">
                    Minimum 1 screenshot
                  </div>
                  <div class="rounded-lg bg-white/80 border border-[#dfe7ff] px-3 py-2 text-center">
                    PNG/JPG formats only
                  </div>
                  <div class="rounded-lg bg-white/80 border border-[#dfe7ff] px-3 py-2 text-center">
                    Max 25MB per file
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                @click="submitForm"
                :disabled="!isFormValid || isSubmitting"
                class="w-full py-4 text-white font-bold text-base rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 hover:opacity-95 bg-[#002147]"
                :class="{ 'cursor-not-allowed opacity-60': !isFormValid || isSubmitting }"
              >
                <svg
                  v-if="!isSubmitting"
                  class="w-5 h-5"
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
                <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
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
                <span v-if="isSubmitting">Uploading...</span>
                <span v-else>Submit Attendance</span>
              </button>
              <div class="mt-4 p-3 rounded-lg text-center bg-[#fef3c7]">
                <p class="text-xs md:text-sm font-bold text-[#92400e]">
                  <span class="text-[#dc2626]">*</span> Required fields must be filled out before
                  submitting
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom: Important Notice & System Info (visible on mobile only) -->
        <div class="lg:hidden lg:col-span-3 order-3 grid grid-cols-1 gap-4">
          <!-- Important Notice -->
          <div class="bg-[#eaf0ff] rounded-2xl p-4 shadow-md border-l-4 border-[#0f63c7]">
            <div class="flex items-start gap-3">
              <svg
                class="w-5 h-5 flex-shrink-0 text-[#0f63c7]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <h3 class="font-bold text-sm mb-1 text-[#10224b]">Important Notice</h3>
                <p class="text-xs text-[#1f3b7b]">
                  Ensure all information is accurate before submission. Screenshots must be clear
                  and readable.
                </p>
              </div>
            </div>
          </div>

          <!-- System Information -->
          <div class="bg-white rounded-lg p-4 shadow-md">
            <h3 class="font-bold text-sm mb-3 text-[#002147]">System Information</h3>
            <div class="space-y-2">
              <div class="flex justify-between text-xs">
                <span class="text-gray-600">Status:</span>
                <span class="font-bold text-green-600">● Active</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-gray-600">Registered Users:</span>
                <span class="font-bold text-[#002147]">{{ allUsers.length }}</span>
              </div>
              <div class="flex justify-between text-xs">
                <span class="text-gray-600">Max File Size:</span>
                <span class="font-bold text-[#002147]">25 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div
        v-if="showSuccess"
        class="fixed top-4 left-4 right-4 md:top-8 md:left-8 md:right-auto px-5 md:px-6 py-3 md:py-4 rounded-lg z-50 shadow-xl bg-[#10b981] border-2 border-[#059669]"
      >
        <div class="flex items-center gap-2 md:gap-3">
          <svg
            class="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div>
            <p class="text-white font-bold text-sm md:text-base">Success!</p>
            <p class="text-white text-xs md:text-sm">AAR report submitted successfully</p>
          </div>
        </div>
      </div>

      <!-- Zoom Modal -->
      <div
        v-if="showZoomModal"
        @click="closeZoom"
        class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      >
        <button
          @click="closeZoom"
          class="absolute top-4 right-4 md:top-6 md:right-6 text-white rounded p-2 md:p-3 transition hover:opacity-90 z-10 bg-[#dc2626]"
        >
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <img
          :src="zoomedImage"
          alt="Zoomed"
          class="max-w-full max-h-full object-contain rounded"
          @click.stop
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase.js'

const router = useRouter()
const allUsers = ref([])
const selectedUserId = ref(null)
const isLoadingUsers = ref(false)
const fetchError = ref('')
const searchQuery = ref('')
const showDropdown = ref(false)
const searchInput = ref(null)

const getTodayString = () => new Date().toISOString().split('T')[0]

const formData = ref({
  description: '',
  address: '',
  date: '',
  screenshots: [],
})

const previewImages = ref([])
const fileInput = ref(null)
const showSuccess = ref(false)
const showZoomModal = ref(false)
const zoomedImage = ref(null)
const isSubmitting = ref(false)
const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25MB in bytes
const currentDate = ref('')
const currentTime = ref('')

const isFormValid = computed(() => {
  return (
    selectedUserId.value !== null &&
    selectedUserId.value !== '' &&
    formData.value.description.trim() !== '' &&
    formData.value.address.trim() !== '' &&
    formData.value.date !== '' &&
    formData.value.screenshots.length > 0
  )
})

// Filter users based on search query
const filteredUsers = computed(() => {
  if (!searchQuery.value || searchQuery.value.trim() === '') {
    return allUsers.value
  }

  const query = searchQuery.value.toLowerCase()
  return allUsers.value.filter((user) => user.rank_fullname.toLowerCase().includes(query))
})

const selectUser = (user) => {
  selectedUserId.value = user.id
  searchQuery.value = user.rank_fullname
  showDropdown.value = false
}

const focusSearchInput = () => {
  nextTick(() => {
    if (searchInput.value) {
      searchInput.value.focus()
    }
  })
}

const clearSelection = () => {
  selectedUserId.value = null
  searchQuery.value = ''
  showDropdown.value = true
  focusSearchInput()
}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}

const handleFileUpload = (event) => {
  const files = Array.from(event.target.files)

  files.forEach((file) => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      alert(`File ${file.name} is too large. Maximum size is 25MB.`)
      return
    }

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert(`File ${file.name} is not an image.`)
      return
    }

    formData.value.screenshots.push(file)

    const reader = new FileReader()
    reader.onload = (e) => {
      previewImages.value.push({
        url: e.target.result,
        name: file.name,
        size: file.size,
      })
    }
    reader.readAsDataURL(file)
  })

  // Reset file input
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const removeImage = (index) => {
  formData.value.screenshots.splice(index, 1)
  previewImages.value.splice(index, 1)
}

const zoomImage = (imageUrl) => {
  zoomedImage.value = imageUrl
  showZoomModal.value = true
}

const closeZoom = () => {
  showZoomModal.value = false
  zoomedImage.value = null
}

const submitForm = async () => {
  if (!isFormValid.value || isSubmitting.value) return

  isSubmitting.value = true

  try {
    fetchError.value = ''
    console.log('Uploading screenshots to Supabase Storage...')

    const uploadedUrls = []

    // Upload each screenshot to Supabase Storage
    for (const file of formData.value.screenshots) {
      // Create unique filename with timestamp
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`

      // Upload to Screenshots bucket
      const { error: uploadError } = await supabase.storage
        .from('AARIMAGES')
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
      } = supabase.storage.from('AARIMAGES').getPublicUrl(fileName)

      uploadedUrls.push(publicUrl)
      console.log('Uploaded:', fileName, '→', publicUrl)
    }

    // Join URLs with comma
    const screenshotLinks = uploadedUrls.join(',')

    console.log('Inserting into aar_report table...')
    const dateForStorage = formData.value.date

    // Insert into aar_report table
    const { data, error } = await supabase
      .from('aar_report')
      .insert({
        user_id: selectedUserId.value,
        description: formData.value.description.trim(),
        address: formData.value.address.trim(),
        date: dateForStorage,
        screenshots: screenshotLinks,
        status: true,
      })
      .select()

    if (error) {
      console.error('Database insert error:', error)
      throw new Error(`Failed to save record: ${error.message}`)
    }

    console.log('Form aar_report successfully:', data)
    showSuccess.value = true

    // Reset form after 5 seconds
    setTimeout(() => {
      selectedUserId.value = null
      searchQuery.value = ''
      formData.value = {
        description: '',
        address: '',
        date: getTodayString(),
        screenshots: [],
      }
      previewImages.value = []
      showSuccess.value = false
    }, 5000)
  } catch (err) {
    console.error('Submit error:', err)
    fetchError.value = err.message || 'Failed to submit form'

    // Scroll to error message
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } finally {
    isSubmitting.value = false
  }
}

const returnToLogin = () => {
  router.push('/')
}

// Update time every second
const updateDateTime = () => {
  const now = new Date()

  // Format date: February 10, 2026
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  currentDate.value = now.toLocaleDateString('en-US', options)

  // Format time: 2:30:45 PM
  currentTime.value = now.toLocaleTimeString('en-US')
}

// Fetch users from users table
onMounted(async () => {
  isLoadingUsers.value = true
  fetchError.value = ''

  // Initialize date and time
  updateDateTime()
  // Update time every second
  setInterval(updateDateTime, 1000)
  formData.value.date = getTodayString()

  try {
    console.log('Fetching users from Supabase...')

    // Fetch all users for the dropdown
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('rank_fullname', { ascending: true })

    if (error) {
      console.error('Error fetching users:', error)
      fetchError.value = `Failed to load users: ${error.message}`
      return
    }

    if (data) {
      allUsers.value = data
      console.log('Users loaded successfully:', data.length, 'users')
      if (data.length > 0) {
        console.log('users:', data[0])
      }
    } else {
      console.warn('No data returned from users table')
      allUsers.value = []
    }
  } catch (err) {
    console.error('Exception while fetching users:', err)
    fetchError.value = `Error: ${err.message}`
  } finally {
    isLoadingUsers.value = false
  }
})
</script>

<style scoped>
/* Horizontal scroll styling */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #002147 #e5e7eb;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #002147;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #003d7a;
}
</style>
