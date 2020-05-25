const mutations = {
    TOGGLE_IS_SIDEBAR_ACTIVE(state, value) {
        state.isSidebarActive = value;
    },
    SET_DOUGHNUT_LEGEND(state, value) {
        state.doughnutLegend = value;
    }
}

export default mutations;