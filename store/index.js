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
        if (state.search) {
            state.photos = photos.concat(state.photos);
        } else {
            // If it's not a search response, append to the end
            state.photos = state.photos.concat(photos);
        }
    },
    incrementPages(state) {
        state.pages++;
    },
    setSearchQuery(state, query) {
        state.val = query;
        state.search = true;
        state.pages = 1;
        state.photos = [];
    },
    setDefault(state) {
        state.photos = []
        state.pages = 1
        state.val = ""
        state.search = false
    }
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
            commit('incrementPages');
            if (!state.search) {
                await dispatch('fetchPhotos');
            } else {
                if (state.val === "") return;
                await dispatch('searchPhotos');
            }
        } catch (error) {
            console.error(error);
        }
    },
    async searchPhotos({ commit, state }) {
        try {
            const res = await this.$axios.get(`https://api.pexels.com/v1/search?query=${state.val}&per_page=30&page=${state.pages}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        Authorization: state.api,
                    },
                });

            const photos = state.pages === 1 ? res.data.photos : state.photos.concat(res.data.photos);
            commit('setPhotos', photos);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    },
    async defaultMode({ dispatch, commit }) {
        try {
            commit("setDefault")
            await dispatch('fetchPhotos');
        } catch (error) {
            console.error(error);
        }
    },
}

// Getters
export const getters = {
    getPhotos: (state) => state.photos,
}
