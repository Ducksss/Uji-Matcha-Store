import Swal from "sweetalert2";


export const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
});

export const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});


export default {Toast, swalWithBootstrapButtons}