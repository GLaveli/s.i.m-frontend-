//---My Toasts! xD
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function HandleCustomToast(msg) {
  toast(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
}

export default HandleCustomToast;