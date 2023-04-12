function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Lütfen kullanıcı adı ve şifrenizi girin.");
      return false;
    } else if (username != "kullaniciadi" || password != "sifre123") {
      alert("Kullanıcı adı veya şifre yanlış.");
      return false;
    }
  }
  