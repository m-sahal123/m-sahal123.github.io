$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var email = $("#email").val();
    var phone = $("#nohp").val();
    var errorMessages = "";

    // Validasi email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessages += '<p class="error-message">Invalid email!</p>';
    }

    // Validasi nomor handphone
    var phonePattern = /^\d{7,13}$/;
    if (!phonePattern.test(phone)) {
      errorMessages +=
        '<p class="error-message">Invalid phone number!, must be 7 - 13 digit</p>';
    }

    // Menampilkan pesan kesalahan
    $("#errorMessages").html(errorMessages);

    // Jika tidak ada kesalahan, submit formulir
    if (errorMessages === "") {
      $("#contactForm")[0].submit();
    }
  });
});
