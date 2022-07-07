export default {

    index: function(p) {
        return axios.get('/api/halamanBaru', { params: p });
    },

    create: function() {
        return axios.get('/api/halamanBaru/create');
    },

    store: function(form) {
        return axios.post('/api/halamanBaru/store', form);
    },

    edit: function(id) {
        return axios.get('/api/halamanBaru/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/halamanBaru/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/halamanBaru/' + id);
    },

}