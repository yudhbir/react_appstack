const ProductService = {  
    productListing:async function() {
        return fetch('https://dummyjson.com/products', {
            }).then(res => res.json()).then(json => {
                return json;
            });
    },
    updateProduct:async function(credentials,user_id) {
        return fetch('https://dummyjson.com/products/'+user_id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
        }).then(res => res.json()).then(json => {
            return json;
        });
    },
    deleteProduct:async function(user_id) {
        return fetch('https://dummyjson.com/products/'+user_id, {
                method: 'DELETE',
        }).then(res => res.json()).then(json => {
            return json;
        });
    },
}
export default ProductService;