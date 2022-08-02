const AuthService = {
    loginUser: async function(credentials) {
        return fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials) // expiresInMins: 60, // optional //username: 'kminchelle', password: '0lelplR',            
        }).then(res => res.json()).then(json => {
            return json;
        })
    },
    userListing:async function(credentials) {
        return fetch('https://dummyjson.com/users', {
            }).then(res => res.json()).then(json => {
                return json;
            });
    },
}
export default AuthService;