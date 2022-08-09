import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
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
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().required('Email is required'),
      ein: Yup.string().required('ein is required'),
      phone: Yup.string().required('phone is required'),
      ssn: Yup.string().required('ssn is required'),
      birthDate: Yup.string().required('birthDate is required'),
  }).required();

  // functions to build form returned by useForm() hook
  const { register, formState: { errors },handleSubmit } = useForm({
      mode: "onSubmit",
      resolver: yupResolver(validationSchema)
  });

  const handleupdateSubmit = async (data) => {
    /* work when validation packages are not enabled
      // evt.preventDefault(); 
      // const data = new FormData(evt.target);
      // console.log(data.get('username')); 
      // let form_info={};
      // let user_id=0;
      // for (var [key, value] of data.entries()) { 
      //   if(key=='id'){
      //     user_id=value;
      //   }else{
      //     form_info[key]=value
      //   }
      // }  
    */
    // console.log(data);   
    const updated_data = await AuthService.updateUser(data,data.id);  
    //console.log(updated_data);      
    
  }
  
    return (
      <>  
             
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}  contentLabel="Example Modal" >
          <h4>Edit User</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal} style={btnStyles}>
            <span aria-hidden="true">&times;</span>
          </button>
          <form onSubmit={handleSubmit(handleupdateSubmit)}>
            <div className="form-group mb-2">
                <label>First Name</label>
                <input type="text" className={`form-control ${errors?.firstName ? 'is-invalid' : ''}`} defaultValue={edit_user.firstName} name="firstName" {...register('firstName')}/>
                <div className="invalid-feedback">{errors?.firstName?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>Last Name</label>
                <input type="text" className={`form-control ${errors?.lastName ? 'is-invalid' : ''}`} defaultValue={edit_user.lastName} name="lastName" {...register('lastName')}/>
                <div className="invalid-feedback">{errors?.lastName?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>Username</label>
                <input type="text" className={`form-control ${errors?.username ? 'is-invalid' : ''}`} defaultValue={edit_user.username} name="username" {...register('username')}/>
                <div className="invalid-feedback">{errors?.username?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>Email</label>
                <input type="text" className={`form-control ${errors?.email ? 'is-invalid' : ''}`} defaultValue={edit_user.email} name="email" {...register('email')}/>
                <div className="invalid-feedback">{errors?.email?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>EIN</label>
                <input type="text" className={`form-control ${errors?.ein ? 'is-invalid' : ''}`} defaultValue={edit_user.ein} name="ein" {...register('ein')}/>
                <div className="invalid-feedback">{errors?.ein?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>Phone</label>
                <input type="text" className={`form-control ${errors?.phone ? 'is-invalid' : ''}`} defaultValue={edit_user.phone} name="phone" {...register('phone')}/>
                <div className="invalid-feedback">{errors?.phone?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>SSN</label>
                <input type="text" className={`form-control ${errors?.ssn ? 'is-invalid' : ''}`} defaultValue={edit_user.ssn} name="ssn" {...register('ssn')}/>
                <div className="invalid-feedback">{errors?.ssn?.message}</div>
            </div>
            <div className="form-group mb-2">
                <label>Birth Date</label>
                <input type="text" className={`form-control ${errors?.birthDate ? 'is-invalid' : ''}`} defaultValue={edit_user.birthDate} name="birthDate" {...register('birthDate')}/>
                <div className="invalid-feedback">{errors?.birthDate?.message}</div>
            </div>
            <input type="hidden" className="form-control" defaultValue={edit_user.id} name="id" {...register('id')}/>
            <input type="submit" className="btn btn-primary shadow-2 mb-4" value="Update" />
          </form>
        </Modal>
      </>
    );
  }
  export default EditUserModal;