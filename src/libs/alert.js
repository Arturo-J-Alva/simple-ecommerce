import Swal from 'sweetalert2'
// type => 'warning', 'success', 'error', 'info', 'question'

const sweet_alert = (action, type) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'bg-green-500 hover:bg-green-700 text-white font-bold sm:py-2 px-2 sm:px-4 mt-1 mx-2 outline-none',
            cancelButton: 'bg-red-500 hover:bg-red-700 text-white font-bold sm:py-2 px-2 sm:px-4 mt-1 mx-2 outline-none'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Eliminar subtipo',
        text: "Si lo elimina ya no podrá recuperarlo.",
        icon: type || 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, cancelo',
        reverseButtons: true
    }).then(async (result) => {

        if (result.value) {
            
            action()

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {

        }
    })
}

export default sweet_alert;