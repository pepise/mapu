
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    alert("Lütfen kullanıcı adı ve şifrenizi girin.");
    return false;
  } else {
    // JSON veritabanını yükle
    fetch("kullanicilar.json")
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
function register() {
  var ad = document.getElementById("ad").value;
  var soyad = document.getElementById("soyad").value;
  var kullaniciadi = document.getElementById("kullaniciadi").value;
  var sifre = document.getElementById("sifre").value;
  var eposta = document.getElementById("eposta").value;

  // Yeni kullanıcı oluştur
  var newUser = {
    "ad": ad,
    "soyad": soyad,
    "username": kullaniciadi,
    "password": sifre,
    "email": eposta
  };

  // Kullanıcıları yükle
  fetch("kullanicilar.json")
    .then(response => response.json())
    .then(data => {
      // Yeni kullanıcı adı mevcut mu diye kontrol et
      var usernameExists = false;
      data.users.forEach(user => {
        if (user.username == kullaniciadi) {
          usernameExists = true;
          return;
        }
      });
      if (usernameExists) {
        alert("Bu kullanıcı adı zaten mevcut.");
        return false;
      } else {
        // Yeni kullanıcıyı ekle
        data.users.push(newUser);

        // Yeni kullanıcıyı kaydet
        var jsonData = JSON.stringify(data);
        fetch("kullanicilar.json", {
          method: "PUT",
          body: jsonData,
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            alert("Kayıt başarılı!");
            window.location.href = "index.html";
          })
          .catch(error => console.error(error));
      }
    })
    .catch(error => console.error(error));
}


      // Eğer kullanıcı adı mevcut değilse, yeni kullanıcıyı e
