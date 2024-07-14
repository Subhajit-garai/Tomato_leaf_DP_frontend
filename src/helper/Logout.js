
import { SurverRequest } from './SurverRequest';
import { toast } from 'react-toastify';

export const  Logout = () =>{
  let LogOutUrl = "/api/v1/users/logout"
  SurverRequest("GET", LogOutUrl, '')
    .then((data) => {
      data.success ? toast.success(data.message): toast.process("processing") ;
      window.location.reload();
    })

  }

