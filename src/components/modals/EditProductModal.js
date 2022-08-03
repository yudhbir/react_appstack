import React from 'react';
import Modal from 'react-modal';
import ProductService from '../../services/ProductService'
Modal.setAppElement('#root');
const customStyles = {
    content: { top: '50%', left: '50%',width: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
};
const btnStyles = { float: 'right', position: 'absolute', right: '18px', top: '18px', borderRadius: '50px' }

function EditProductModal(props) {
    const edit_product=props.product;
    const [modalIsOpen, setIsOpen] = React.useState(props.showpop);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
      props.destroyModal();
    }
    const handleupdateSubmit = async (evt) => {
      evt.preventDefault(); 
      const data = new FormData(evt.target);
      // console.log(data.get('username')); 
      let form_info={};
      let user_id=0;
      for (var [key, value] of data.entries()) { 
        if(key=='id'){
          user_id=value;
        }else{
          form_info[key]=value
        }
      }      
      const updated_data = await ProductService.updateProduct(form_info,user_id);  
      //console.log(updated_data);      
      
    }
  
    return (
      <>  
             
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}  contentLabel="Example Modal" >
          <h4>Edit User</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal} style={btnStyles}>
            <span aria-hidden="true">&times;</span>
          </button>
          <form onSubmit={handleupdateSubmit}>
            <div className="form-group mb-2">
                <label>First Name</label>
                <input type="text" className="form-control" defaultValue={edit_product.title} name="title"/>
            </div>
            <div className="form-group mb-2">
                <label>Last Name</label>
                <input type="text" className="form-control" defaultValue={edit_product.description} name="description"/>
            </div>
            <div className="form-group mb-2">
                <label>Username</label>
                <input type="text" className="form-control" defaultValue={edit_product.price} name="price"/>
            </div>
            <div className="form-group mb-2">
                <label>Email</label>
                <input type="text" className="form-control" defaultValue={edit_product.rating} name="rating"/>
            </div>
            <div className="form-group mb-2">
                <label>EIN</label>
                <input type="text" className="form-control" defaultValue={edit_product.stock} name="stock"/>
            </div>
            <div className="form-group mb-2">
                <label>Phone</label>
                <input type="text" className="form-control" defaultValue={edit_product.brand} name="brand"/>
            </div>
            <div className="form-group mb-2">
                <label>SSN</label>
                <input type="text" className="form-control" defaultValue={edit_product.category} name="category"/>
            </div>
            <input type="hidden" className="form-control" defaultValue={edit_product.id} name="id"/>
            <button className="btn btn-primary shadow-2 mb-4">Update</button>
          </form>
        </Modal>
      </>
    );
  }
  export default EditProductModal;