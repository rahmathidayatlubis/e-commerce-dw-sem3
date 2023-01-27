// const form = document.getElementById('form1');
// // const nama = document.getElementById('g502').innerHTML;
// let nama;
// if(document.getElementById("g502") != null){
//     nama=document.getElementById("g502").innerHTML;
// }

const mouse = document.querySelector('#mouse');
const mouseRow2 = document.querySelector('#mouseRow2');
const keyboard = document.querySelector('#keyboard');
const keyboardRow2 = document.querySelector('#keyboardRow2');
const listKey = document.querySelector('#list-profile-list').classList;
const listMouse = document.querySelector('#list-mouse-list').classList;
const disListKey = document.querySelector('#list-profile').classList;
const getMouse = mouse.classList;
const getMouse2 = mouseRow2.classList;
const getKeyboard = keyboard.classList;
const getKeyboard2 = keyboardRow2.classList;

function showKey() {
  disListKey.remove('d-none');
}
function hideKey() {
  disListKey.add('d-none');
}

const detailMouse1 = document.querySelector('#mouse1Detail').classList;
const detailMouse2 = document.querySelector('#mouse2Detail').classList;
const detailMouse3 = document.querySelector('#mouse3Detail').classList;
const detailMouse4 = document.querySelector('#mouse4Detail').classList;
const detailMouse5 = document.querySelector('#mouse5Detail').classList;
const detailMouse6 = document.querySelector('#mouse6Detail').classList;
const detailMouse7 = document.querySelector('#mouse7Detail').classList;
const detailMouse8 = document.querySelector('#mouse8Detail').classList;

const detailKey1 = document.querySelector('#key1Detail').classList;
const detailKey2 = document.querySelector('#key2Detail').classList;
const detailKey3 = document.querySelector('#key3Detail').classList;
const detailKey4 = document.querySelector('#key4Detail').classList;
const detailKey5 = document.querySelector('#key5Detail').classList;
const detailKey6 = document.querySelector('#key6Detail').classList;
const detailKey7 = document.querySelector('#key7Detail').classList;
const detailKey8 = document.querySelector('#key8Detail').classList;



const cartMouse1 = document.querySelector('#cartMouse1').classList;
const cartMouse2 = document.querySelector('#cartMouse2').classList;
const cartMouse3 = document.querySelector('#cartMouse3').classList;
const cartMouse4 = document.querySelector('#cartMouse4').classList;
const cartMouse5 = document.querySelector('#cartMouse5').classList;
const cartMouse6 = document.querySelector('#cartMouse6').classList;
const cartMouse7 = document.querySelector('#cartMouse7').classList;
const cartMouse8 = document.querySelector('#cartMouse8').classList;

const cartKey1 = document.querySelector('#cartKey1').classList;
const cartKey2 = document.querySelector('#cartKey2').classList;
const cartKey3 = document.querySelector('#cartKey3').classList;
const cartKey4 = document.querySelector('#cartKey4').classList;
const cartKey5 = document.querySelector('#cartKey5').classList;
const cartKey6 = document.querySelector('#cartKey6').classList;
const cartKey7 = document.querySelector('#cartKey7').classList;
const cartKey8 = document.querySelector('#cartKey8').classList;





const strukMouse1 = document.querySelector('#strukMouse1').classList;
const strukMouse2 = document.querySelector('#strukMouse2').classList;
const strukMouse3 = document.querySelector('#strukMouse3').classList;
const strukMouse4 = document.querySelector('#strukMouse4').classList;
const strukMouse5 = document.querySelector('#strukMouse5').classList;
const strukMouse6 = document.querySelector('#strukMouse6').classList;
const strukMouse7 = document.querySelector('#strukMouse7').classList;
const strukMouse8 = document.querySelector('#strukMouse8').classList;


const strukKey1 = document.querySelector('#strukKey1').classList;
const strukKey2 = document.querySelector('#strukKey2').classList;
const strukKey3 = document.querySelector('#strukKey3').classList;
const strukKey4 = document.querySelector('#strukKey4').classList;
const strukKey5 = document.querySelector('#strukKey5').classList;
const strukKey6 = document.querySelector('#strukKey6').classList;
const strukKey7 = document.querySelector('#strukKey7').classList;
const strukKey8 = document.querySelector('#strukKey8').classList;






// keyboard 1
function key1(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailKey1.remove("d-none");
  cartKey1.add('d-none');
}
function backKey1(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey1.add("d-none");
}
function cartK1() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey1.add('d-none');
  cartKey1.remove('d-none');
}
function strukK1(){
  cartKey1.add('d-none');
  strukKey1.remove('d-none');
}

// keyboard 2
function key2(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey2.remove("d-none");
  cartKey2.add('d-none');
}
function backKey2(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey2.add("d-none");
}
function cartK2() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey2.add('d-none');
  cartKey2.remove('d-none');
}
function strukK2(){
  cartKey2.add('d-none');
  strukKey2.remove('d-none');
}

// keyboard 3
function key3(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey3.remove("d-none");
  cartKey3.add('d-none');
}
function backKey3(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey3.add("d-none");
}
function cartK3() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey3.add('d-none');
  cartKey3.remove('d-none');
}
function strukK3(){
  cartKey3.add('d-none');
  strukKey3.remove('d-none');
}


// keyboard 4
function key4(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey4.remove("d-none");
  cartKey4.add('d-none');
}
function backKey4(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey4.add("d-none");
}
function cartK4() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey4.add('d-none');
  cartKey4.remove('d-none');
}
function strukK4(){
  cartKey4.add('d-none');
  strukKey4.remove('d-none');
}


// keyboard 5
function key5(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey5.remove("d-none");
  cartKey5.add('d-none');
}
function backKey5(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey5.add("d-none");
}
function cartK5() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey5.add('d-none');
  cartKey5.remove('d-none');
}
function strukK5(){
  cartKey5.add('d-none');
  strukKey5.remove('d-none');
}


// keyboard 6
function key6(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey6.remove("d-none");
  cartKey6.add('d-none');
}
function backKey6(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey6.add("d-none");
}
function cartK6() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey6.add('d-none');
  cartKey6.remove('d-none');
}
function strukK6(){
  cartKey6.add('d-none');
  strukKey6.remove('d-none');
}


// keyboard 7
function key7(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey7.remove("d-none");
  cartKey7.add('d-none');
}
function backKey7(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey7.add("d-none");
}
function cartK7() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey7.add('d-none');
  cartKey7.remove('d-none');
}
function strukK7(){
  cartKey7.add('d-none');
  strukKey7.remove('d-none');
}


// keyboard 8
function key8(){ 
  getKeyboard.add("d-none");
  getKeyboard2.add("d-none");
  detailKey8.remove("d-none");
  cartKey8.add('d-none');
}
function backKey8(){
  getKeyboard.remove("d-none");
  getKeyboard2.remove("d-none");
  detailKey8.add("d-none");
}
function cartK8() {
  getKeyboard.add('d-none');
  getKeyboard2.add('d-none');
  detailKey8.add('d-none');
  cartKey8.remove('d-none');
}
function strukK8(){
  cartKey8.add('d-none');
  strukKey8.remove('d-none');
}










// mouse 1
function mouse1(){ 
    getMouse.add("d-none");
    getMouse2.add("d-none");
    detailMouse1.remove("d-none");
    cartMouse1.add('d-none');
}
function backMouse1(){
    getMouse.remove("d-none");
    getMouse2.remove("d-none");
    detailMouse1.add("d-none");
}
function cartM1() {
    getMouse.add('d-none');
    getMouse2.add('d-none');
    detailMouse1.add('d-none');
    cartMouse1.remove('d-none');
}
function strukM1(){
  cartMouse1.add('d-none');
  strukMouse1.remove('d-none');
}




// mouse 2
function mouse2(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse2.remove("d-none");
  cartMouse2.add('d-none');
}
function backMouse2(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse2.add("d-none");
}
function cartM2() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse2.add('d-none');
  cartMouse2.remove('d-none');
}
function strukM2(){
  cartMouse2.add('d-none');
  strukMouse2.remove('d-none');
}


// mouse 3
function mouse3(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse3.remove("d-none");
  cartMouse3.add('d-none');
}
function backMouse3(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse3.add("d-none");
}
function cartM3() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse3.add('d-none');
  cartMouse3.remove('d-none');
}
function strukM3(){
  cartMouse3.add('d-none');
  strukMouse3.remove('d-none');
}


// mouse 4
function mouse4(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse4.remove("d-none");
  cartMouse4.add('d-none');
}
function backMouse4(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse4.add("d-none");
}
function cartM4() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse4.add('d-none');
  cartMouse4.remove('d-none');
}
function strukM4(){
  cartMouse4.add('d-none');
  strukMouse4.remove('d-none');
}



// mouse 5
function mouse5(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse5.remove("d-none");
  cartMouse5.add('d-none');
}
function backMouse5(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse5.add("d-none");
}
function cartM5() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse5.add('d-none');
  cartMouse5.remove('d-none');
}
function strukM5(){
  cartMouse5.add('d-none');
  strukMouse5.remove('d-none');
}



// mouse 6
function mouse6(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse6.remove("d-none");
  cartMouse6.add('d-none');
}
function backMouse6(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse6.add("d-none");
}
function cartM6() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse6.add('d-none');
  cartMouse6.remove('d-none');
}
function strukM6(){
  cartMouse6.add('d-none');
  strukMouse6.remove('d-none');
}


// mouse 7
function mouse7(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse7.remove("d-none");
  cartMouse7.add('d-none');
}
function backMouse7(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse7.add("d-none");
}
function cartM7() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse7.add('d-none');
  cartMouse7.remove('d-none');
}
function strukM7(){
  cartMouse7.add('d-none');
  strukMouse7.remove('d-none');
}


// mouse 8
function mouse8(){ 
  getMouse.add("d-none");
  getMouse2.add("d-none");
  detailMouse8.remove("d-none");
  cartMouse8.add('d-none');
}
function backMouse8(){
  getMouse.remove("d-none");
  getMouse2.remove("d-none");
  detailMouse8.add("d-none");
}
function cartM8() {
  getMouse.add('d-none');
  getMouse2.add('d-none');
  detailMouse8.add('d-none');
  cartMouse8.remove('d-none');
}
function strukM8(){
  cartMouse8.add('d-none');
  strukMouse8.remove('d-none');
}


















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

const unduh = document.getElementsByClassName('unduh');
for(let i=0; i<unduh.length; i++){
  unduh[i].addEventListener('click', function(e){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Berhasil Disimpan',
      showConfirmButton: false,
      timer: 1500
    })

    getMouse.remove("d-none");
    getMouse2.remove("d-none");
    getKeyboard.remove('d-none');
    getKeyboard2.remove('d-none');
    strukMouse1.add('d-none');
    strukMouse2.add('d-none');
    strukMouse3.add('d-none');
    strukMouse4.add('d-none');
    strukMouse5.add('d-none');
    strukMouse6.add('d-none');
    strukMouse7.add('d-none');
    strukMouse8.add('d-none');

    strukKey1.add('d-none');
    strukKey2.add('d-none');
    strukKey3.add('d-none');
    strukKey4.add('d-none');
    strukKey5.add('d-none');
    strukKey6.add('d-none');
    strukKey7.add('d-none');
    strukKey8.add('d-none');
  });
}

const dontClikThis = document.getElementsByClassName('dontClickThis');
for(let i = 0; i<dontClikThis.length; i++){
  dontClikThis[i].addEventListener('click', function() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="message/404.html">Why do I have this issue?</a>'
    });
  });
}
