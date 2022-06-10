function validateForm() {

    let isValid = true;

    var x=document.forms["myForm"]["visitor_name"].value;
    if (x==null || x==""){swal("ГРЕШКА!", "Моля, попълнете полето за име", "error"); isValid = false; return false}
    var x=document.forms["myForm"]["visitor_email"].value;
    var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {swal("ГРЕШКА!", "Моля, въведете валиден имейл адрес!", "error"); isValid = false; return false;}
    var x = document.forms["myForm"]["visitor_phone"].value;
    var phoneno = /^\d{10}$/;
     if (!x.match(phoneno)) {swal("ГРЕШКА!", "Моля, въведете валиден телефонен номер!", "error"); isValid = false; return false }
     var x = document.forms["myForm"]["visitor_password"].value;
     var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (!x.match(passwordRegex)) { swal("ГРЕШКА!", "Паролата трябва да бъде от 8 до 15 символа и да съдържа поне 1 главна буква, 1 малка буква, 1 цифра и 1 специален символ!", "error"); isValid = false; return false }

      if (isValid) {
        swal("ПОЗДРАВЛЕНИЯ!", "Успешно запазихте вашия билет! Ще се свържем с вас възможно най-скоро,с най-добрата оферта!", "success");
      }
  }