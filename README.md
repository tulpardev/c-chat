# c'chat (categorize-chat) Web Application

Merhaba,
**c'chat** seçilen kategori üzerinde diğer kullanıcılar ile sohbet uygulamasıdır. 
- ReactJs ile yazılmış olup firebase üzerinde deploy edilmiştir. 
- Firebase Authentication ile kullanıcı doğrulaması yapılmaktadır
- Uygulamaya email (sahte Ör: test@gmail.com) ve şifre (min. 6 karakter) ile sign-up olduktan sonra bu kullanıcı bilgileri ile giriş yapabilirsiniz. 
-  4 adet kategori mevcuttur herhangi bir konu seçip o konu ile alakalı sohbet edebilirsiniz.
- Kullanıcı mesajları Firebase Realtime Database üzerinde tutulmaktadır. Eski mesajlar ilgili kategori içinde kalır başka bir kullanıcı girdiğinde eski mesajları ve kimin yazdığını okuyabilir.