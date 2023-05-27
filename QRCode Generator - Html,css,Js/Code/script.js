let val = document.getElementById("text_Box");
let box = document.getElementById("img_box");
let qrimg = document.getElementById("qr_img");
document.getElementById("btn").onclick = () => {
  if (val.value.length > 0) {
    qrimg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      val.value;

      box.classList("show_img");
  }
};
