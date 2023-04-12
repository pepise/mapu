function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Lütfen kullanıcı adı ve şifrenizi girin.");
    return false;
  } else {
    // JSON veritabanını yükle
    fetch("users.json")
      .then(response => response.json())
      .then(data => {
        var userExists = false;

        // Kullanıcı adı ve şifreyi kontrol et
        data.users.forEach(user => {
          if (user.username == username && user.password == password) {
            userExists = true;
            return;
          }
        });

        if (userExists) {
          window.location.href = "anasayfa.html";
        } else {
          alert("Kullanıcı adı veya şifre yanlış.");
          return false;
        }
      })
      .catch(error => console.error(error));
  }
}
