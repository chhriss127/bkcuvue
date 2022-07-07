import Echo from 'laravel-echo';

export function PusherAuth() {
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'c91782db3f476a90726d',
        cluster: 'ap1',
        encrypted: true,
        auth: {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
            },
        },
    });
}