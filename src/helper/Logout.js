
import { SurverRequest } from './SurverRequest';
import { toast } from 'react-toastify';

export const  Logout = () =>{
  let LogOutUrl = `${process.env.REACT_APP_SURVER_DOMAIN}/api/v1/logout`
  SurverRequest("GET", LogOutUrl, '')
    .then((data) => {
      data.success ? toast.success(data.message): toast.process("processing") ;
      window.location.reload();
    })

  }

