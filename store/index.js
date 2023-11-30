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
        state.photos = photos
    },
}

// Actions
export const actions = {
    async fetchPhotos({ commit, state} ) {
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
}

// Getters
export const getters = {
    getPhotos: (state) => state.photos,
}
