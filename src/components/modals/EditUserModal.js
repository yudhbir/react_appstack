import React from 'react';
import Modal from 'react-modal';
import AuthService from '../../services/AuthService'
Modal.setAppElement('#root');
const customStyles = {
    content: { top: '50%', left: '50%',width: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', },
};
const btnStyles = { float: 'right', position: 'absolute', right: '18px', top: '18px', borderRadius: '50px' }

function EditUserModal(props) {
    const edit_user=props.user;
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
      const updated_data = await AuthService.updateUser(form_info,user_id);  
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
                <input type="text" className="form-control" defaultValue={edit_user.firstName} name="firstName"/>
            </div>
            <div className="form-group mb-2">
                <label>Last Name</label>
                <input type="text" className="form-control" defaultValue={edit_user.lastName} name="lastName"/>
            </div>
            <div className="form-group mb-2">
                <label>Username</label>
                <input type="text" className="form-control" defaultValue={edit_user.username} name="username"/>
            </div>
            <div className="form-group mb-2">
                <label>Email</label>
                <input type="text" className="form-control" defaultValue={edit_user.email} name="email"/>
            </div>
            <div className="form-group mb-2">
                <label>EIN</label>
                <input type="text" className="form-control" defaultValue={edit_user.ein} name="ein"/>
            </div>
            <div className="form-group mb-2">
                <label>Phone</label>
                <input type="text" className="form-control" defaultValue={edit_user.phone} name="phone"/>
            </div>
            <div className="form-group mb-2">
                <label>SSN</label>
                <input type="text" className="form-control" defaultValue={edit_user.ssn} name="ssn"/>
            </div>
            <div className="form-group mb-2">
                <label>Birth Date</label>
                <input type="text" className="form-control" defaultValue={edit_user.birthDate} name="birthDate"/>
            </div>
            <input type="hidden" className="form-control" defaultValue={edit_user.id} name="id"/>
            <button className="btn btn-primary shadow-2 mb-4">Update</button>
          </form>
        </Modal>
      </>
    );
  }
  export default EditUserModal;