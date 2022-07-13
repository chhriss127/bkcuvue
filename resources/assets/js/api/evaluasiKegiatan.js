export default {

    index: function(p) {
        return axios.get('/api/evaluasiKegiatan', { params: p });
    },

    create: function() {
        return axios.get('/api/evaluasiKegiatan/create');
    },

    store: function(form) {
        return axios.post('/api/evaluasiKegiatan/store', form);
    },

    edit: function(id) {
        return axios.get('/api/evaluasiKegiatan/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/evaluasiKegiatan/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/evaluasiKegiatan/' + id);
    },

}