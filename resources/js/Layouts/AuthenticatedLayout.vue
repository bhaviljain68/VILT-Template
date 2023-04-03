<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";
import SideDrawer from "../Components/SideDrawer.vue";
import ThemeSwitcher from "@/Components/ThemeSwitcher.vue";
const showingNavigationDropdown = ref(false);
</script>

<template>
  <div>
    <SideDrawer>
      <div class="min-h-screen">
        <nav class="border-b border-primary">
          <!-- Primary Navigation Menu -->
          <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-5 h-16">
              <div class="col-span-2 flex items-center justify-start">
                <label for="my-drawer" class="text-3xl rotate-180 hover:cursor-pointer">
                  <i-mdi-hamburger-menu-back />
                </label>
              </div>
              <div class="col-span-1 flex items-center justify-center">
                <Link :href="route('dashboard')">
                  <ApplicationLogo class="block h-9 w-auto fill-current" />
                </Link>
              </div>
              <div class="col-span-2 flex items-center justify-end">
                <div class="ml-3 relative">
                  <Dropdown align="right" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md hover:text-neutral-focus focus:outline-none transition ease-in-out duration-150"
                        >
                          {{ $page.props.auth.user.name }}

                          <svg
                            class="ml-2 -mr-0.5 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                      <DropdownLink
                        :href="route('logout')"
                        method="post"
                        as="button"
                        toBlade="true"
                      >
                        Log Out
                      </DropdownLink>
                    </template>
                  </Dropdown>
                </div>
                <!-- Theme Changer -->
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <!-- Responsive Navigation Menu -->
          <div
            :class="{
              block: showingNavigationDropdown,
              hidden: !showingNavigationDropdown,
            }"
            class="sm:hidden"
          >
            <!-- <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div> -->

            <!-- Responsive Settings Options -->
            <div class="pt-0 pb-1 border-t border-primary">
              <div class="py-4 px-4 bg-offset text-neutral">
                <div class="font-medium text-base">
                  {{ $page.props.auth.user.name }}
                </div>
                <div class="font-medium text-sm">{{ $page.props.auth.user.email }}</div>
              </div>

              <div class="mt-3 space-y-1">
                <ResponsiveNavLink :href="route('profile.edit')">
                  Profile
                </ResponsiveNavLink>
                <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                  Log Out
                </ResponsiveNavLink>
              </div>
            </div>
          </div>
        </nav>

        <!-- Page Breadcrumbs -->

        <div
          class="text-sm breadcrumbs mt-4 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
          v-if="$slots.breadcrumbs"
        >
          <ul>
            <slot name="breadcrumbs" />
          </ul>
        </div>
        <!-- Page Content -->
        <main class="max-w-9xl mx-auto sm:px-6 lg:px-8 text-base-content py-6">
          <slot />
        </main>
      </div>
    </SideDrawer>
  </div>
</template>

<style></style>
