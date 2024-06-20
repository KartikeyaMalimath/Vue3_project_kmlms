<script setup>
import SidebarItem from "./SidebarItem.vue";


</script>

<template>
  <div class="w-full md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 
        absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1
        px-2" v-bind:class="collapseShow">
    <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block p-3 no-underline"> Admin Layout Pages
    </h6>
    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
      <li class="items-center bg-emerald-200 rounded px-4 py-0 my-1">
        <sidebar-item to="/dashboard" navText="Dashboard" navActiveKey="dashboard" class="hover:bg-blue-400">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-solid fa-tv" size="md"/>
          </template>
        </sidebar-item>
      </li>
      <li class="items-center rounded px-4 py-0 my-1">
        <sidebar-item to="/enterprises" navText="Enterprises" navActiveKey="enterprises" class="hover:bg-blue-400">
          <template v-slot:icon>
            <font-awesome-icon icon="fa-solid fa-city" size="md"/>
          </template>
        </sidebar-item>
      </li>
    </ul>
  </div>
</template>