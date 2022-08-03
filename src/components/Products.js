import React, { useState,useEffect } from 'react';
import ProductService from '../services/ProductService';
import EditProductModal from './modals/EditProductModal';
import TopNavCart from './TopNavCart'
function Products(){
    const [products, setProducts] = useState('');
    const [isloading, setIsloading] = useState(false);
    const [editaction, setEditaction] = useState(false);
    const [editproduct, setEditproduct] = useState(0);
    const [topnavcart, setTopnavcart] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const product_info = await ProductService.productListing();
            // console.log(user_info.users);
            if(product_info.products){
                setIsloading(true);
                setProducts(product_info.products);
            }
        }
        fetchData();

    },[]);
    const show_product_info=(evt,user)=>{        
        setEditaction(true);
        setEditproduct(user);
    }
    const closeModal=(e)=>{        
        setEditaction(false);
        setEditproduct(0);
    }
    const delete_product_info=async (evt,prod_id)=>{
        let cflag=confirm('Are you sure to remove this record?');
        if(cflag){
            const deleted_data = await ProductService.deleteProduct(prod_id);  
            console.log(deleted_data);
        }
    }
    const mass_selection=(evt)=>{
        const products_listing = [...products];
        products_listing.map((prod) => {
            if(evt.target.checked){
                 prod.isChecked = true;
            }else{
                prod.isChecked = false;
            }
            return prod;
        });
        setProducts([...products_listing]);
        setTopnavcart(products_listing)
    }
    function addto_bucketCart(evt, prod){
        if(evt.target.checked){
            setTopnavcart(existingItems => {
                return [prod, ...existingItems]        
            })
        }else{
            const val = evt.target.value;
            setTopnavcart(topnavcart=>topnavcart.filter(item => item.id != val));
        }
        // console.log(topnavcart);
    }
    return(
        <>
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content"> 
                            <div className="page-header">
                                <div className="page-block">
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <div className="page-header-title">
                                                <h5 className="m-b-10">Product Management</h5>
                                            </div>
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home"></i></a></li>
                                                <li className="breadcrumb-item"><a href="index.html">Product Management</a></li>
                                                <li className="breadcrumb-item"><a href="index.html">Product Listing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                       
                            <div className="main-body">
                                <div className="page-wrapper">                                
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h5>User Listing</h5>
                                                </div>
                                                <div className="card-block table-border-style">
                                                    <div className="table-responsive">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th><input type="checkbox" name="paent_product" onChange={(evt)=>mass_selection(evt)}/></th>
                                                                    <th>#</th>
                                                                    <th>Title</th>
                                                                    <th>Description</th>
                                                                    <th>Price</th>
                                                                    <th>Rating</th>
                                                                    <th>Stock</th>
                                                                    <th>Brand</th>
                                                                    <th>Category</th>
                                                                    <th>Category</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {   isloading ? (
                                                                    products.map((prod, i) => {
                                                                        return <tr key={i}> 
                                                                            <td scope="row"><input type="checkbox" name="product[]" value={prod.id}  checked={prod?.isChecked} onChange={(evt)=>{addto_bucketCart(evt,prod);}}/></td> 
                                                                            <td>{prod.id}</td> 
                                                                            <td>{prod.title}</td> 
                                                                            <td>{prod.description.substring(0,70)}</td> 
                                                                            <td>{prod.price}</td> 
                                                                            <td>{prod.rating}</td> 
                                                                            <td>{prod.stock}</td> 
                                                                            <td>{prod.brand}</td> 
                                                                            <td>{prod.category}</td> 
                                                                            <td>{prod.category}</td> 
                                                                            <td><a className="tag" onClick={(evt)=>show_product_info(evt,prod)}>Edit</a> &nbsp;<a  className="tag" onClick={(evt)=>delete_product_info(evt,prod.id)}>Delete</a></td> 
                                                                        </tr>
                                                                    })
                                                                ) : (
                                                                    <tr><td> No Record Found.</td></tr>
                                                                )
                                                            }
                                                                                                                         
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            {   editaction &&  editproduct &&
                <EditProductModal product={editproduct} showpop={editaction} destroyModal={()=>closeModal()}/>                
            }
            {/*   topnavcart &&
                <TopNavCart cart={topnavcart} />                
        */}
        </>
    );
}
export default Products;