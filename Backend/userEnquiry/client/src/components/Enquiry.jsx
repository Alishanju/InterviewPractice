import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput,Textarea } from "flowbite-react";
import EnquiryList from './EnquiryList';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    mobile:'',
    message:'',
    _id:'',
  });
  const [enquiryList,setEnquiryList]=useState([]);

    const saveEnquiry=(e)=>{
        e.preventDefault();
        const emailExists = enquiryList.some(item => item.email === formData.email && item._id !== formData._id);
if (emailExists) {
  return toast.error("Email already exists");
}
        // let formData={
        //   name:e.target.name.value,
        //   email:e.target.email.value,
        //   mobile:e.target.mobile.value,
        //   message:e.target.message.value
        // }
        //http://localhost:8020/api/website/enquiry/Insert

if(formData._id){
          //update
          axios.put(`http://localhost:8020/api/website/enquiry/update/${formData._id}`,formData).then((res)=>{    
          console.log(res.data);
          toast.success("Enquiry updated successfully");
        }).catch(err => console.log(err))
        .finally(() => {
          setFormData({
                  name:'',
                  email:'',
                  mobile:'',
                  message:''
  });
          getAllValue();
    })  
  }
  else{
          //insert
        axios.post('http://localhost:8020/api/website/enquiry/Insert',formData).then((res)=>{
          console.log(res.data);
          toast.success("Enquiry saved successfully");
        }).catch(err => console.log(err))
        .finally(() => {
          setFormData({
                  name:'',
                  email:'',
                  mobile:'',
                  message:''
  });
          getAllValue();
    })

    }
  }

    
  const getValue=(e)=>{
    let inputName=e.target.name;
    let inputValue=e.target.value;
    let oldData={...formData};
    oldData[inputName]=inputValue;
    setFormData(oldData)
  }

  const getAllValue = () => {
  axios.get("http://localhost:8020/api/website/enquiry/view")
    .then(res => {
      setEnquiryList(res.data.data);
      console.log(res.data.data);
    })
    .catch(err => console.log(err))
    .finally(() => {
      console.log("Request finished"); // good for stopping loading state
    });
};
 
useEffect(()=>{
  getAllValue();
},[])

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>
      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-200 p-4'>
            <h2 className='text-[20px] font-bold'>Enquiry Form</h2>
            <form action="" onSubmit={saveEnquiry}>
                <div className='py-3'>
                    <Label htmlFor="name">Your Name</Label>
                     <TextInput id="name" name="name" type="text" onChange={getValue} value={formData.name} placeholder="Enter your Name" required />
                </div>
                  <div className='py-3'>
                    <Label htmlFor="email">Your Email</Label>
                     <TextInput id="email" name="email" type="email" onChange={getValue} value={formData.email} placeholder="Enter your Email" required />
                </div>
                <div className='py-3'>
                    <Label htmlFor="phone">Your Phone</Label>
                     <TextInput id="phone" name="mobile" type="text" onChange={getValue} value={formData.mobile}  placeholder="Enter your Phone number" required />
                </div>
                <div className='py-3'>
                    <Label htmlFor="message">Your Message</Label>
                     <Textarea id="message" name="message" type="text" onChange={getValue} value={formData.message}  placeholder="Enter your Message..." required rows={4} />
                </div>
                <div className='py-3'>
                    <Button className='w-[100%]' color="dark" type="submit">{formData._id ? "Update" : "Save"}</Button>

                </div>
            </form>
        </div>
        <EnquiryList data={enquiryList} getAllValue={getAllValue} setFormData={setFormData}/>
      </div>
    </div>
  )
}

export default Enquiry
