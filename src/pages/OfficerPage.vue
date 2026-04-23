<template>
  <div class="min-h-screen relative overflow-hidden bg-slate-900">
    <!-- Background Image -->
    <div
      class="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      style="background-image: url('/src/assets/landing.jpg')"
    >
      <div class="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
    </div>

    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
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

    <!-- Toast Message (Top Right) -->
    <div
      v-if="toast.visible"
      class="fixed top-4 right-0 z-50 max-w-sm w-[min(24rem,calc(100vw-1rem))] rounded-xl p-px shadow-lg toast-border-run"
      :class="
        toast.type === 'success'
          ? 'bg-linear-to-r from-emerald-400/70 via-emerald-200/20 to-emerald-400/70'
          : 'bg-linear-to-r from-red-400/70 via-red-200/20 to-red-400/70'
      "
      role="status"
    >
      <div
        class="rounded-xl px-4 py-3"
        :class="
          toast.type === 'success'
            ? 'bg-emerald-950/70 text-emerald-100'
            : 'bg-red-950/70 text-red-100'
        "
      >
        <div class="flex items-start gap-3">
        <div class="shrink-0 mt-0.5">
          <svg
            v-if="toast.type === 'success'"
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
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
        </div>

        <div class="flex-1">
          <p class="text-sm font-bold">{{ toast.type === 'success' ? 'Success' : 'Error' }}</p>
          <p class="text-sm font-semibold mt-0.5">{{ toast.message }}</p>
        </div>

        <button
          class="shrink-0 rounded-lg px-2 py-1 text-xs font-bold uppercase hover:bg-white/10"
          type="button"
          @click="hideToast"
        >
          Close
        </button>
      </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="deleteModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closeDeleteModal"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl overflow-hidden"
      >
        <div class="p-5 border-b border-slate-700 bg-linear-to-r from-slate-800 to-blue-900">
          <h3 class="text-sm sm:text-base font-bold text-white">Confirm Deletion</h3>
          <p class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
            Delete
            <span class="text-white">{{ officerToDelete?.rank_fullname || 'this officer' }}</span>?
          </p>
        </div>

        <div class="p-5">
          <p class="text-sm font-semibold text-slate-200">
            This action cannot be undone.
          </p>

          <div class="mt-5 flex items-center justify-end gap-3">
            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white"
              type="button"
              @click="closeDeleteModal"
              :disabled="deletingId === officerToDelete?.id"
            >
              Cancel
            </button>
            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-red-600 hover:bg-red-500 text-white"
              type="button"
              @click="confirmDelete"
              :disabled="deletingId === officerToDelete?.id"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View Records Modal -->
    <div
      v-if="viewModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closeViewModal"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl"
      >
        <div class="sticky top-0 p-5 border-b border-slate-700 bg-linear-to-r from-slate-800 to-blue-900 flex items-center justify-between">
          <h3 class="text-sm sm:text-base font-bold text-white">
            {{ userReports?.rank_fullname || 'Officer Reports' }}
          </h3>
          <button
            class="text-slate-400 hover:text-white transition"
            type="button"
            @click="closeViewModal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="p-5">
          <div v-if="loadingReports" class="text-sm font-semibold text-slate-300">
            Loading reports...
          </div>

          <div v-else-if="userReports && userReports.totalreport > 0">
            <!-- Total Reports Count -->
            <div class="mb-4 bg-slate-800 rounded-xl p-3 border border-slate-700">
              <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Total Reports: <span class="text-blue-300">{{ userReports.totalreport }}</span></p>
            </div>

            <!-- Reports Table -->
            <div class="overflow-x-auto border border-slate-700 rounded-xl">
              <table class="w-full text-sm min-w-max">
                <thead>
                  <tr class="bg-slate-800 border-b border-slate-700 sticky top-0">
                    <th class="px-3 py-3 text-left font-bold text-slate-300 whitespace-nowrap">Subject</th>
                    <th class="px-3 py-3 text-left font-bold text-slate-300 whitespace-nowrap">Date</th>
                    <th class="px-3 py-3 text-left font-bold text-slate-300 whitespace-nowrap">Address</th>
                    <th class="px-3 py-3 text-left font-bold text-slate-300 whitespace-nowrap">Reference</th>
                    <th class="px-3 py-3 text-left font-bold text-slate-300 whitespace-nowrap">Description</th>
                    <th class="px-3 py-3 text-center font-bold text-slate-300 whitespace-nowrap">Screenshot</th>
                    <th class="px-3 py-3 text-center font-bold text-slate-300 whitespace-nowrap">Files</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(subject, idx) in userReports.subject?.split('; ') || []"
                    :key="idx"
                    class="border-b border-slate-700 hover:bg-slate-800/40 transition"
                  >
                    <td class="px-3 py-3 text-slate-200 max-w-sm truncate">{{ subject }}</td>
                    <td class="px-3 py-3 text-slate-200 whitespace-nowrap">
                      {{ userReports.dates?.split('; ')[idx] || 'N/A' }}
                    </td>
                    <td class="px-3 py-3 text-slate-200 max-w-sm truncate">
                      {{ userReports.addresses?.split('; ')[idx] || 'N/A' }}
                    </td>
                    <td class="px-3 py-3 text-slate-200 max-w-xs truncate">
                      {{ userReports.reference || 'N/A' }}
                    </td>
                    <td class="px-3 py-3 text-slate-200 max-w-xs truncate">
                      {{ userReports.description || 'N/A' }}
                    </td>
                    <td class="px-3 py-3 text-center whitespace-nowrap">
                      <button
                        v-if="userReports.screenshots?.split('; ')[idx]"
                        class="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-slate-700 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition text-xs font-semibold"
                        type="button"
                        @click="viewImage(idx)"
                        title="View Screenshot"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </button>
                      <span v-else class="text-slate-400 text-xs">-</span>
                    </td>
                    <td class="px-3 py-3 text-center whitespace-nowrap">
                      <button
                        v-if="isFirstFileOccurrence(idx)"
                        class="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-slate-700 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 transition text-xs font-semibold"
                        type="button"
                        @click="viewFiles(idx)"
                        title="View Files"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </button>
                      <span v-else class="text-slate-400 text-xs">-</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-5 flex items-center justify-end gap-3">
              <button
                class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white"
                type="button"
                @click="closeViewModal"
              >
                Close
              </button>
              <button
                class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-green-600 hover:bg-green-500 text-white flex items-center gap-2"
                type="button"
                @click="downloadRecordsAsZip"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download ZIP
              </button>
            </div>
          </div>

          <div v-else class="text-center py-6">
            <p class="text-sm font-semibold text-slate-300">No reports found for this officer.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image View Modal -->
    <div
      v-if="imageModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      @click.self="imageModalOpen = false"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative max-w-4xl max-h-[90vh] rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl overflow-hidden flex flex-col"
      >
        <div class="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800">
          <h3 class="text-sm font-bold text-white">Screenshot</h3>
          <button
            class="text-slate-400 hover:text-white transition"
            type="button"
            @click="imageModalOpen = false"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 overflow-auto flex items-center justify-center p-4">
          <img
            v-if="selectedImage"
            :src="selectedImage"
            :alt="selectedImage"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="hide-scrollbar relative lg:ml-64 min-h-screen overflow-y-scroll overflow-x-hidden pb-20 lg:pb-0 z-10"
    >
      <div class="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
        <!-- Page Header -->
        <div
          class="mb-6 lg:mb-8 rounded-2xl shadow-xl overflow-hidden relative"
          style="background: linear-gradient(135deg, #001a3a 0%, #002147 50%, #004595 100%)"
        >
          <div
            class="absolute -top-8 -right-8 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"
          ></div>
          <div
            class="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse pointer-events-none"
            style="animation-delay: 700ms"
          ></div>
          <div
            class="absolute inset-0 pointer-events-none"
            style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 50%)"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 class="text-lg sm:text-xl lg:text-2xl font-bold mb-1 text-white">
                  Officers/Personnel
                </h1>
                <div class="w-20 h-0.5 bg-linear-to-r from-blue-400 to-transparent mb-1.5"></div>
                <p class="text-xs sm:text-sm font-semibold text-blue-300">
                  Search officers using name (ILIKE)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Section -->
        <div class="bg-slate-900/80 rounded-2xl p-5 mb-4 sm:mb-6 shadow-md border border-slate-700">
          <div class="flex flex-wrap items-end gap-3">
            <div class="flex-1 min-w-60">
              <label class="text-xs font-bold uppercase tracking-wider text-slate-300">
                Search officer
              </label>
              <div
                class="mt-2 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5"
                @click="focusAndSearch"
              >
                <svg
                  class="w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                  ></path>
                </svg>
                <input
                  v-model="searchTerm"
                  ref="searchInput"
                  class="w-full bg-transparent text-sm font-semibold text-white placeholder:text-slate-400 focus:outline-none"
                  placeholder="Type officer name..."
                  @keydown.enter.prevent="runSearch"
                  @input="scheduleSearch"
                  @focus="runSearch"
                />
              </div>
            </div>

            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase flex items-center gap-2 transition-all duration-200 bg-blue-600 hover:bg-blue-500 text-white"
              @click="runSearch"
              :disabled="isLoading"
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
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                ></path>
              </svg>
              Search
            </button>

            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase flex items-center gap-2 transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white"
              @click="clearSearch"
              :disabled="isLoading"
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
              Clear
            </button>

            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase flex items-center gap-2 transition-all duration-200 bg-purple-600 hover:bg-purple-500 text-white"
              @click="openRestoreModal"
              :disabled="isLoading"
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
              Restore Records
            </button>

            <input
              ref="restoreFileInput"
              type="file"
              accept=".zip"
              class="hidden"
              @change="handleRestoreFile"
            />
          </div>
        </div>

    <!-- Restore Modal -->
    <div
      v-if="restoreModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      @click.self="closeRestoreModal"
    >
      <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
      <div
        class="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/90 shadow-xl overflow-hidden"
      >
        <div class="p-5 border-b border-slate-700 bg-linear-to-r from-slate-800 to-purple-900">
          <h3 class="text-sm sm:text-base font-bold text-white">Restore Records from ZIP</h3>
          <p class="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
            Upload a previously exported ZIP file to restore records
          </p>
        </div>

        <div class="p-5 space-y-4">
          <div class="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 hover:bg-purple-500/5 transition"
            @click="triggerRestoreFileInput"
          >
            <svg
              class="w-8 h-8 mx-auto mb-2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="text-sm font-bold text-slate-300">Click to upload ZIP file</p>
            <p class="text-xs text-slate-400 mt-1">or drag and drop</p>
          </div>

          <div v-if="restoreFileName" class="bg-slate-800 rounded-lg p-3 border border-slate-700">
            <p class="text-sm font-semibold text-green-400">✓ {{ restoreFileName }}</p>
          </div>

          <div v-if="restoreLoading" class="text-center py-4">
            <svg class="animate-spin h-6 w-6 mx-auto text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-sm font-semibold text-slate-300 mt-2">Restoring records...</p>
          </div>

          <div v-if="!restoreLoading" class="flex items-center justify-end gap-3 pt-2">
            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-slate-700 hover:bg-slate-600 text-white"
              type="button"
              @click="closeRestoreModal"
              :disabled="restoreLoading"
            >
              Cancel
            </button>
            <button
              class="px-4 py-2.5 rounded-xl font-bold text-sm uppercase transition-all duration-200 bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-50"
              type="button"
              @click="confirmRestore"
              :disabled="!restoreFile || restoreLoading"
            >
              Restore
            </button>
          </div>
        </div>
      </div>
    </div>

        <!-- Results -->
        <div class="bg-slate-900/80 rounded-2xlshadow-md border border-slate-700">
          <div
            class="p-4 sm:p-5 border-b border-slate-700 bg-linear-to-r from-slate-800 to-blue-900"
          >
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <h2 class="text-sm sm:text-base font-bold text-white">Officers List</h2>
              <p class="text-xs sm:text-sm font-semibold text-slate-300">
                Showing {{ officers.length }} result(s)
              </p>
            </div>
          </div>

          <div v-if="isLoading" class="p-6 text-sm font-semibold text-slate-300">
            Loading officers...
          </div>

          <div v-else class="max-h-96 overflow-y-auto">
            <table class="min-w-full">
              <thead>
                <tr class="bg-slate-800/60">
                  <th
                    class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-300"
                  >
                    Officer Name
                  </th>
                  <th
                    class="px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-300 w-16"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="officer in officers"
                  :key="officer.id"
                  class="border-t border-slate-700 hover:bg-slate-800/40 transition"
                >
                  <td class="px-4 py-3 text-sm font-semibold text-white">
                    {{ officer.rank_fullname || 'N/A' }}
                  </td>
                  <td class="px-4 py-3 text-center flex items-center justify-center gap-2">
                    <button
                      class="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition bg-slate-800 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 text-xs font-semibold uppercase"
                      type="button"
                      title="View Record"
                      @click.stop="viewRecord(officer)"
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      View
                    </button>
                    <button
                      class="inline-flex items-center justify-center w-9 h-9 rounded-lg transition bg-slate-800 hover:bg-red-500/20 text-red-300 hover:text-red-200"
                      type="button"
                      title="Delete"
                      :disabled="deletingId === officer.id"
                      @click.stop="openDeleteModal(officer)"
                    >
                      <span class="sr-only">Delete</span>
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>

                <tr v-if="officers.length === 0" class="border-t border-slate-700">
                  <td
                    class="px-4 py-8 text-center text-sm font-semibold text-slate-300"
                    colspan="2"
                  >
                    No officers found.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import NavigationPage from '@/components/NavigationPage.vue'
import { supabase } from '@/lib/supabase.js'

const router = useRouter()

const searchTerm = ref('')
const searchInput = ref(null)
const officers = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const deletingId = ref(null)

const deleteModalOpen = ref(false)
const officerToDelete = ref(null)

const viewModalOpen = ref(false)
const userReports = ref(null)
const loadingReports = ref(false)
const imageModalOpen = ref(false)
const selectedImage = ref(null)
const selectedFiles = ref(null)

const restoreModalOpen = ref(false)
const restoreFileInput = ref(null)
const restoreFile = ref(null)
const restoreFileName = ref('')
const restoreLoading = ref(false)

const toast = ref({ visible: false, type: 'success', message: '' })
let toastTimer = null

let searchDebounceTimer = null

const showToast = (type, message) => {
  toast.value = { visible: true, type, message }
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toast.value.visible = false
  }, 2500)
}

const hideToast = () => {
  if (toastTimer) clearTimeout(toastTimer)
  toast.value.visible = false
}

const openDeleteModal = (officer) => {
  if (!officer?.id) return
  officerToDelete.value = officer
  deleteModalOpen.value = true
}

const closeDeleteModal = () => {
  deleteModalOpen.value = false
  officerToDelete.value = null
}

const confirmDelete = async () => {
  if (!officerToDelete.value?.id) return
  await deleteOfficer(officerToDelete.value)
  closeDeleteModal()
}

const fetchOfficers = async (term = '') => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const cleanedTerm = String(term || '').trim()

    let query = supabase.from('users').select('*').order('rank_fullname', { ascending: true })

    if (cleanedTerm) {
      query = query.ilike('rank_fullname', `%${cleanedTerm}%`)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching officers:', error)
      errorMessage.value = `Failed to load officers: ${error.message}`
      showToast('error', errorMessage.value)
      officers.value = []
      return
    }

    officers.value = data || []
  } catch (err) {
    console.error('Exception fetching officers:', err)
    errorMessage.value = 'Error loading officers.'
    showToast('error', errorMessage.value)
    officers.value = []
  } finally {
    isLoading.value = false
  }
}

const runSearch = async () => {
  await fetchOfficers(searchTerm.value)
}

const scheduleSearch = () => {
  if (searchDebounceTimer) {
    clearTimeout(searchDebounceTimer)
  }

  searchDebounceTimer = setTimeout(() => {
    runSearch()
  }, 250)
}

const focusAndSearch = () => {
  if (searchInput.value) {
    searchInput.value.focus()
  }
  scheduleSearch()
}

const clearSearch = async () => {
  searchTerm.value = ''
  await fetchOfficers('')
}

const deleteOfficer = async (officer) => {
  if (!officer?.id) return

  deletingId.value = officer.id
  errorMessage.value = ''

  try {
    // Step 1: Delete all documents directly referencing this user_id
    const { error: docsUserError } = await supabase
      .from('documents')
      .delete()
      .eq('user_id', officer.id)

    if (docsUserError) {
      console.error('Error deleting documents by user_id:', docsUserError)
      throw new Error(`Failed to delete documents: ${docsUserError.message}`)
    }

    // Step 2: Get all AAR reports for this user
    const { data: aarReports, error: fetchError } = await supabase
      .from('aar_report')
      .select('id')
      .eq('user_id', officer.id)

    if (fetchError) {
      throw fetchError
    }

    // Step 3: Delete all documents that reference these AAR reports
    if (aarReports && aarReports.length > 0) {
      const aarReportIds = aarReports.map(report => report.id)
      
      for (const aarReportId of aarReportIds) {
        const { error: docError } = await supabase
          .from('documents')
          .delete()
          .eq('aar_report_id', aarReportId)

        if (docError) {
          console.error('Error deleting documents by aar_report_id:', docError)
          throw new Error(`Failed to delete documents: ${docError.message}`)
        }
      }
    }

    // Step 4: Delete all AAR reports for this user
    const { error: reportsError } = await supabase
      .from('aar_report')
      .delete()
      .eq('user_id', officer.id)

    if (reportsError) {
      console.error('Error deleting officer reports:', reportsError)
      throw new Error(`Failed to delete officer reports: ${reportsError.message}`)
    }

    // Step 5: Delete the user
    const { error: userError } = await supabase.from('users').delete().eq('id', officer.id)

    if (userError) {
      console.error('Error deleting officer:', userError)
      throw new Error(`Failed to delete user: ${userError.message}`)
    }

    await fetchOfficers(searchTerm.value)
    showToast('success', 'Officer deleted successfully.')
  } catch (err) {
    console.error('Exception deleting officer:', err)
    errorMessage.value = err.message || 'Error deleting officer.'
    showToast('error', errorMessage.value)
  } finally {
    deletingId.value = null
  }
}

const viewRecord = (officer) => {
  if (!officer?.id) return
  fetchUserReports(officer.id)
}

const fetchUserReports = async (userId) => {
  loadingReports.value = true
  try {
    const { data, error } = await supabase.rpc('get_user_reports', { p_user_id: userId })
    
    if (error) {
      console.error('Error fetching user reports:', error)
      showToast('error', `Failed to load reports: ${error.message}`)
      return
    }

    console.log('Fetched user reports:', data)
    
    userReports.value = data && data.length > 0 ? data[0] : null
    viewModalOpen.value = true
  } catch (err) {
    console.error('Exception fetching user reports:', err)
    showToast('error', 'Error loading reports.')
  } finally {
    loadingReports.value = false
  }
}

const closeViewModal = () => {
  viewModalOpen.value = false
  userReports.value = null
}

const viewImage = (idx) => {
  // This will be used when you have screenshot URLs from the database
  const screenshot = userReports.value?.screenshots?.split('; ')[idx]
  if (screenshot) {
    selectedImage.value = screenshot
    imageModalOpen.value = true
  }
}

const viewFiles = (idx) => {
  // Get unique files by deduplicating
  const allFiles = userReports.value?.files?.split('; ') || []
  const uniqueFiles = [...new Set(allFiles)]
  const files = uniqueFiles[idx]
  
  if (files) {
    // If it's a URL, open in new tab
    if (files.startsWith('http://') || files.startsWith('https://')) {
      window.open(files, '_blank')
    } else {
      // Otherwise, download or display as needed
      selectedFiles.value = files
      imageModalOpen.value = true
    }
  }
}

const isFirstFileOccurrence = (idx) => {
  const allFiles = userReports.value?.files?.split('; ') || []
  if (allFiles.length === 0) return false
  
  const currentFile = allFiles[idx]
  // Check if this is the first occurrence of this file
  return allFiles.indexOf(currentFile) === idx
}

const openRestoreModal = () => {
  restoreModalOpen.value = true
  restoreFile.value = null
  restoreFileName.value = ''
}

const closeRestoreModal = () => {
  restoreModalOpen.value = false
  restoreFile.value = null
  restoreFileName.value = ''
  if (restoreFileInput.value) {
    restoreFileInput.value.value = ''
  }
}

const triggerRestoreFileInput = () => {
  if (restoreFileInput.value) {
    restoreFileInput.value.click()
  }
}

const handleRestoreFile = (event) => {
  const files = event.target.files
  if (files && files.length > 0) {
    restoreFile.value = files[0]
    restoreFileName.value = files[0].name
  }
}

const confirmRestore = async () => {
  if (!restoreFile.value) {
    showToast('error', 'Please select a ZIP file')
    return
  }

  restoreLoading.value = true

  try {
    const JSZip = (await import('jszip')).default
    const zip = new JSZip()
    const loadedZip = await zip.loadAsync(restoreFile.value)

    // Read summary.txt
    const summaryFile = loadedZip.file('summary.txt')
    if (!summaryFile) {
      throw new Error('Invalid ZIP file: summary.txt not found')
    }

    const summaryText = await summaryFile.async('text')
    const lines = summaryText.split('\n')
    
    let officerName = ''
    let subjects = ''
    let dates = ''
    let addresses = ''
    let reference = ''
    let description = ''
    let screenshotLinks = ''
    let fileLinks = ''

    // Parse summary.txt
    for (const line of lines) {
      if (line.startsWith('Officer:')) {
        officerName = line.replace('Officer:', '').trim()
      } else if (line.startsWith('Subjects:')) {
        subjects = line.replace('Subjects:', '').trim()
      } else if (line.startsWith('Dates:')) {
        dates = line.replace('Dates:', '').trim()
      } else if (line.startsWith('Addresses:')) {
        addresses = line.replace('Addresses:', '').trim()
      } else if (line.startsWith('Reference:')) {
        reference = line.replace('Reference:', '').trim()
      } else if (line.startsWith('Description:')) {
        description = line.replace('Description:', '').trim()
      } else if (line.startsWith('Screenshots:')) {
        screenshotLinks = line.replace('Screenshots:', '').trim()
      } else if (line.startsWith('Files:')) {
        fileLinks = line.replace('Files:', '').trim()
      }
    }

    if (!officerName) {
      throw new Error('Invalid ZIP file: Officer name not found in summary')
    }

    // Get or create officer in users table
    let userId
    const { data: existingUsers, error: checkError } = await supabase
      .from('users')
      .select('id')
      .eq('rank_fullname', officerName.trim())

    if (checkError) throw checkError

    if (existingUsers && existingUsers.length > 0) {
      userId = existingUsers[0].id
    } else {
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert({ rank_fullname: officerName.trim() })
        .select()

      if (insertError) throw insertError
      if (!newUser || newUser.length === 0) throw new Error('Failed to create user')
      userId = newUser[0].id
    }

    // Insert into aar_report table with screenshots
    const { data: aarRecord, error: aarError } = await supabase
      .from('aar_report')
      .insert({
        user_id: userId,
        subject: subjects !== 'N/A' ? subjects : '',
        address: addresses !== 'N/A' ? addresses : '',
        date: dates !== 'N/A' ? dates : new Date().toISOString().split('T')[0],
        screenshots: screenshotLinks !== 'N/A' && screenshotLinks ? screenshotLinks : '',
        status: 'complied',
        reference: reference !== 'N/A' ? reference : '',
        description: description !== 'N/A' ? description : '',
      })
      .select()

    if (aarError) throw aarError
    if (!aarRecord || aarRecord.length === 0) throw new Error('Failed to create AAR record')

    const aarRecordId = aarRecord[0].id

    // Insert file references into documents table
    if (fileLinks !== 'N/A' && fileLinks) {
      const fileNamesList = fileLinks.split(',').map(f => f.trim())
      for (const fileName of fileNamesList) {
        if (fileName) {
          const { error: docError } = await supabase
            .from('documents')
            .insert({
              files: fileName,
              user_id: userId,
            })

          if (docError) {
            console.error('Error inserting document:', docError)
          }
        }
      }
    }

    showToast('success', `Records restored successfully for ${officerName}`)
    closeRestoreModal()
    await fetchOfficers(searchTerm.value)
  } catch (err) {
    console.error('Error restoring records:', err)
    showToast('error', `Error: ${err.message}`)
  } finally {
    restoreLoading.value = false
  }
}

const downloadRecordsAsZip = async () => {
  if (!userReports.value) return

  try {
    // Import JSZip dynamically
    const JSZip = (await import('jszip')).default
    const { saveAs } = await import('file-saver')

    const zip = new JSZip()
    const fileName = `${userReports.value?.rank_fullname || 'Officer'}_Records_${Date.now()}`
    const folder = zip.folder(fileName)

    // Collect all screenshots and files links
    const allScreenshots = userReports.value?.screenshots?.split('; ') || []
    const allFiles = userReports.value?.files?.split('; ') || []
    const uniqueFiles = [...new Set(allFiles)]

    const screenshotsString = allScreenshots.length > 0 ? allScreenshots.join(', ') : 'N/A'
    const filesString = uniqueFiles.length > 0 ? uniqueFiles.join(', ') : 'N/A'

    // Create a summary text file with all data including screenshots and files
    const summaryContent = `AAR RECORDS SUMMARY
${'='.repeat(50)}

Officer: ${userReports.value?.rank_fullname || 'N/A'}
Total Reports: ${userReports.value?.totalreport || 0}

RECORDS:
${'-'.repeat(50)}

Subjects: ${userReports.value?.subject || 'N/A'}

Dates: ${userReports.value?.dates || 'N/A'}

Addresses: ${userReports.value?.addresses || 'N/A'}

Reference: ${userReports.value?.reference || 'N/A'}

Description: ${userReports.value?.description || 'N/A'}

Screenshots: ${screenshotsString}

Files: ${filesString}

Generated: ${new Date().toLocaleString()}
    `
    folder.file('summary.txt', summaryContent)

    // Download files if they exist
    for (let i = 0; i < uniqueFiles.length; i++) {
      const fileUrl = uniqueFiles[i]
      if (fileUrl && (fileUrl.startsWith('http://') || fileUrl.startsWith('https://'))) {
        try {
          const response = await fetch(fileUrl)
          const blob = await response.blob()
          const urlParts = fileUrl.split('/')
          const filename = urlParts[urlParts.length - 1].split('?')[0] || `document_${i + 1}`
          folder.file(filename, blob)
        } catch (err) {
          console.error(`Error downloading file ${i + 1}:`, err)
        }
      }
    }

    // Download screenshots if they exist
    const screenshotFolder = folder.folder('screenshots')
    for (let i = 0; i < allScreenshots.length; i++) {
      const screenshotUrl = allScreenshots[i]
      if (screenshotUrl && (screenshotUrl.startsWith('http://') || screenshotUrl.startsWith('https://'))) {
        try {
          const response = await fetch(screenshotUrl)
          const blob = await response.blob()
          screenshotFolder.file(`screenshot_${i + 1}.jpg`, blob)
        } catch (err) {
          console.error(`Error downloading screenshot ${i + 1}:`, err)
        }
      }
    }

    // Generate and save the zip
    const content = await folder.generateAsync({ type: 'blob' })
    saveAs(content, `${fileName}.zip`)
    showToast('success', 'Records downloaded as ZIP successfully!')
  } catch (err) {
    console.error('Error creating zip:', err)
    showToast('error', 'Error downloading records as ZIP')
  }
}


onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    router.push('/')
    return
  }

  await fetchOfficers('')
})
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.toast-border-run {
  background-size: 200% 200%;
  animation: toastBorderRun 1.2s linear infinite;
}

@keyframes toastBorderRun {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
</style>
