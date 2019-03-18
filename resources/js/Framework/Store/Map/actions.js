export default {

    declareMap({commit}, data) {
        commit('declareMap', data);
    },
    storeRestaurants({commit}, data) {
        commit('storeRestaurants', data);
    },
    storePlaceId({commit}, data) {
        commit('storePlaceId', data);
    },
    declarePlacesService({commit}, data) {
        commit('declarePlacesService',data);
    },
    storeMarkers({commit}, data) {
        commit('storeMarkers',data);
    },

};