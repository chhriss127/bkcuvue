export default {

    index: function(p) {
        return axios.get('/api/pertanyaanEvaluasi', { params: p });
    },

    create: function() {
        return axios.get('/api/pertanyaanEvaluasi/create');
    },

    store: function(form) {
        return axios.post('/api/pertanyaanEvaluasi/store', form);
    },

    edit: function(id) {
        return axios.get('/api/pertanyaanEvaluasi/edit/' + id);
    },

    update: function(id, form) {
        return axios.post('/api/pertanyaanEvaluasi/update/' + id, form);
    },

    destroy: function(id) {
        return axios.delete('/api/pertanyaanEvaluasi/' + id);
    },

}