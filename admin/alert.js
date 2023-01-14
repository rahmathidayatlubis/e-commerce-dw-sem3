document.querySelector('#tambahBr').addEventListener('click', function(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Berhasil menambahkan barang',
        showConfirmButton: false,
        timer: 1500
      })
});

document.querySelector('#editBr').addEventListener('click', function(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Perubahan disimpan',
        showConfirmButton: false,
        timer: 1500
      })
});
















// sweett alert
const hapus = document.getElementsByClassName('btn-danger');
for(let i = 0; i<hapus.length; i++){
    hapus[i].addEventListener('click', function(e){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success me-3 rounded',
          cancelButton: 'btn btn-danger rounded'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "Hapus dari keranjang!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
});
}