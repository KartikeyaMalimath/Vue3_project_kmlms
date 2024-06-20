import { createPinia, defineStore } from 'pinia';

// Create Pinia instance
const pinia = createPinia();

// Define Pinia store
export const usePiniaStore = defineStore('pinia', {
  state: () => ({
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    sidebarType: "bg-white",
    sideNavType: "ManageSidenav",
    activeSidebarLi: "dashboard",
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
  }),
  getters: {
    HideConfigButton: (state) => state.hideConfigButton,
    IsPinned: (state) => state.isPinned,
    ShowConfig: (state) => state.showConfig,
    SidebarType: (state) => state.sidebarType,
    SideNavType: (state) => state.sideNavType,
    ActiveSidebarLi: (state) => state.activeSidebarLi,
    Mcolor: (state) => state.mcolor,
    DarkMode: (state) => state.darkMode,
    IsNavFixed: (state) => state.isNavFixed,
    IsAbsolute: (state) => state.isAbsolute,
    ShowNavs: (state) => state.showNavs,
    ShowSidenav: (state) => state.showSidenav,
    ShowNavbar: (state) => state.showNavbar,
    ShowFooter: (state) => state.showFooter,
    ShowMain: (state) => state.showMain,
    Layout: (state) => state.layout,
  },
  actions: {
    setHideConfigButton(value) {
      this.hideConfigButton = value;
      this.saveState();
    },
    setIsPinned(value) {
      this.isPinned = value;
      this.saveState();
    },
    setShowConfig(value) {
      this.showConfig = value;
      this.saveState();
    },
    setSidebarType(payload) {
      this.sidebarType = payload;
      this.saveState();
    },
    setSideNavType(payload) {
      this.sideNavType = payload;
      this.saveState();
    },
    setActiveSidebarLi(payload) {
      this.activeSidebarLi = payload;
      this.saveState();
    },
    setMcolor(value) {
      this.mcolor = value;
      this.saveState();
    },
    setDarkMode(value) {
      this.darkMode = value;
      this.saveState();
    },
    setIsNavFixed(value) {
      this.isNavFixed = value;
      this.saveState();
    },
    setIsAbsolute(value) {
      this.isAbsolute = value;
      this.saveState();
    },
    setShowNavs(value) {
      this.showNavs = value;
      this.saveState();
    },
    setShowSidenav(value) {
      this.showSidenav = value;
      this.saveState();
    },
    setShowNavbar(value) {
      this.showNavbar = value;
      this.saveState();
    },
    setShowFooter(value) {
      this.showFooter = value;
      this.saveState();
    },
    setShowMain(value) {
      this.showMain = value;
      this.saveState();
    },
    setLayout(layoutName = "default") {
      this.layout = layoutName;
      if (this.layout === "default") {
        this.showSidenav = false;
      } else {
        this.showSidenav = true;
      }
      this.saveState();
    },
    minimizeSidebar() {
      let sidenav_show = document.querySelector("#app");  
      if (this.isPinned) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        this.isPinned = false;
        this.ShowSidenav = true;
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        this.isPinned = true;
        this.ShowSidenav = false;
      }
      this.saveState();
    },
    toggleConfigurator() {
      this.ShowConfig = !this.ShowConfig;
      this.saveState();
    },
    saveState() {
      localStorage.setItem('piniaState', JSON.stringify(this.$state));
    },
    loadState() {
      const savedState = localStorage.getItem('piniaState');
      if (savedState) {
        this.$state = JSON.parse(savedState);
      }
    }
  },
});

export default pinia; // Export the Pinia instance
