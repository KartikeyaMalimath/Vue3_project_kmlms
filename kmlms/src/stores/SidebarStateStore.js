import { defineStore } from "pinia";

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        isOpen: true,
        activeLink: 0,
    }),

    actions: {
        toggleSidebar() {
            this.isOpen = !this.isOpen;
        },

        openSidebar() {
            this.isOpen = true;
        },

        closeSidebar() {
            this.isOpen = false;
        },
        setActiveLink(linkIndex) {
            this.activeLink = linkIndex;
        },
        $reset() {
            // localStorage.removeItem('sidebar');
            console.log('sessions closed');          
        }
    },

    getters: {
        sidebarOpen: state => state.isOpen,
        sidebarActiveLink: state => state.activeLink,
    },

    persist: {
        storage: localStorage
    },

})