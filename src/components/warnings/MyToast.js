//---My Toasts! xD
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function defaultToast(msg) {
  toast(msg);
}
function errorToast(msg) {
  toast.error(msg);
}
function successToast(msg) {
  toast.success(msg);
}
function infoToast(msg) {
  toast.info(msg);
}
function warnToast(msg) {
  toast.warn(msg, {
    position: toast.POSITION.TOP_LEFT,
    className: 'sua-classe',
  });
}
function customToast(msg) {
  toast(msg, {
    position: toast.POSITION.TOP_LEFT,
    className: 'sua-classe',
  });
}




export { defaultToast, errorToast, successToast, infoToast, warnToast, customToast }