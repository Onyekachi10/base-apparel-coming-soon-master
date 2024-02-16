function validateForm() {
    const form = document.forms["myForm"]["email"].value;
    if (form === "") {
      alert("In correct email address");
      return false;
    }
  }