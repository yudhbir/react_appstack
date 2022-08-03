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
    updateUser:async function(credentials,user_id) {
        return fetch('https://dummyjson.com/users/'+user_id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
        }).then(res => res.json()).then(json => {
            return json;
        });
    },
    deleteUser:async function(user_id) {
        return fetch('https://dummyjson.com/users/'+user_id, {
                method: 'DELETE',
        }).then(res => res.json()).then(json => {
            return json;
        });
    },
}
export default AuthService;