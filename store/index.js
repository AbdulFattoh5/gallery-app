// State
export const state = () => ({
    api: 'j3Ja2oGdYescARnqMPvGNALSdWJinY0yDS4a0MDENtvtM3hp7Oh3AHtH',
    pages: 1,
    val: '',
    search: false,
    photos: [],
})

// Mutations
export const mutations = {
    setPhotos(state, photos) {
        state.photos = state.photos.concat(photos);
    },
    incrementPages(state) {
        state.pages++;
    },
}

// Actions
export const actions = {
    async fetchPhotos({ commit, state }) {
        await this.$axios.get(`https://api.pexels.com/v1/curated?per_page=30&page=${state.pages}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: state.api,
                },
            })
            .then(res => {
                commit('setPhotos', res.data.photos)
                console.log(res.data);
            })
            .catch(({ response }) => {
                console.log(response);
            })
    },
    async loadMorePhotos({ dispatch, commit, state }) {
        try {
            if (!state.search) {
                commit('incrementPages'); // Mutation to increment pages
                await dispatch('fetchPhotos');
            } else {
                if (state.val === "") return;
                commit('incrementPages'); // Mutation to increment pages
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// Getters
export const getters = {
    getPhotos: (state) => state.photos,
}
