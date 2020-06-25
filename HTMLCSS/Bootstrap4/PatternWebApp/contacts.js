function myFunction() {
    var contactFirstName = document.getElementById("fname").value;
    var contactLastName = document.getElementById("lname").value;
    var contactPhone = document.getElementById("phone").value;
    document.getElementById("demo1").textContent = contactFirstName;
    document.getElementById("demo2").textContent = contactLastName;
    document.getElementById("demo3").textContent = contactPhone;
  }