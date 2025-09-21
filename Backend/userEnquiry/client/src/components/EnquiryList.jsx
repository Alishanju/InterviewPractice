import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const EnquiryList = ({data,getAllValue,setFormData}) => {
  
  console.log("Props in EnquiryList:", {data, getAllValue,setFormData});
  const deleteRow=(id)=>{
    console.log(id); //http://localhost:8020/api/website/enquiry/delete/:id 
   Swal.fire({
  title: "Do you want to Delete the row?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Yes",
  denyButtonText: `No`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  

  if (result.isConfirmed) {
    Swal.fire("Deleted!", "", "success");
     axios.delete(`http://localhost:8020/api/website/enquiry/delete/${id}`).then((res)=>{
      console.log(res.data);
      toast.success("Enquiry deleted successfully");
    }).catch(err => console.log(err))
    .finally(() => {if (typeof getAllValue === 'function') getAllValue();}) 
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});   
    
  }


  const editRow=(id)=>{
    console.log(id);
    axios.get(`http://localhost:8020/api/website/enquiry/single/${id}`).then((res)=>{
      console.log(res.data.data); 
      setFormData(res.data.data);

  }).catch(err => console.log(err))
  .finally(() => {
    console.log("Request finished"); // good for stopping loading state
  });
}

  
  return (
    <div className='bg-gray-200 p-4'>
      <ToastContainer/>
        <h2 className='text-[20px] font-bold mb-4'>Enquiry List</h2>
        <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>S.No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone Number</TableHeadCell>
             <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>
              Delete
            </TableHeadCell>
              <TableHeadCell>
               Edit
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {data.length>=1 ? data.map((item, index) => (
            <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 
              {index+1}
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell> 
            <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.message}</TableCell>
            <TableCell>
              <button className="font-medium text-primary-600 text-white px-4 py-2 bg-red-500 rounded-md hover:underline dark:text-primary-500" onClick={()=>deleteRow(item._id)}> 
                Delete
              </button>
            </TableCell>
             <TableCell>  
              <button className="font-medium text-primary-600 bg-blue-500 text-white px-4 py-2 rounded-md hover:underline dark:text-primary-500" onClick={()=>editRow(item._id )}>
                Edit
              </button>
            </TableCell>
          </TableRow>
          )) : <h1 className='text-center text-[20px] font-bold'>No Enquiry Found</h1>}

          {/* <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             1
            </TableCell>
            <TableCell>Alisha</TableCell>
            <TableCell>alisha@gmail.com</TableCell>
            <TableCell>+91 83830920202</TableCell>
              <TableCell>Hi Alisha</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Delete
              </a>
            </TableCell>
             <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </div>
      
    </div>
  )
}

export default EnquiryList
