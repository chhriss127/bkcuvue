export default {

    index: function(p) {
        return axios.get('/api/evaluasiDiklat', { params: p });
    },

    create: function() {
        return axios.get('/api/evaluasiDiklat/create');
    },

    store: function(form) {
        return axios.post('/api/evaluasiDiklat/store', form);
    },

    edit: function(id) {
        return axios.get('/api/evaluasiDiklat/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/evaluasiDiklat/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/evaluasiDiklat/' + id);
    },

}