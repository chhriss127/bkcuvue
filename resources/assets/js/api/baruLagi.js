export default {

    index: function(p) {
        return axios.get('/api/baruLagi', { params: p });
    },

    create: function() {
        return axios.get('/api/baruLagi/create');
    },

    store: function(form) {
        return axios.post('/api/baruLagi/store', form);
    },

    edit: function(id) {
        return axios.get('/api/baruLagi/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/baruLagi/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/baruLagi/' + id);
    },

}