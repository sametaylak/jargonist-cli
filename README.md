# Jargonist için geliştirilmiş komut satırı uygulaması
- Bu uygulama sayesinde jargonist'te mevcut olan jargonları görebilir ve jargonlar hakkında bilgiye komut satırından ulaşabilirsiniz.
- https://jargon.ist
![Jargonist](https://media.giphy.com/media/dJa2wxxqGkH3oGV83a/giphy.gif)
## Kurulum
```
npm install -g jargonist-cli
```
Uygulamayı sisteminize global bir şekilde kurmalısınız. 
## Kullanım
```
jargonist-cli list
```
Jargonist'te mevcut olan tüm jargonları görebilirsiniz.

```
jargonist-cli look <jargon>
```
Jargonist üzerinde jargon araması yapabilir ve detaylarını görebilirsiniz.
## Örnek Kod
```
jargonist-cli look array

--ÇIKTI--
ARRAY
Array, içeriğine dizinle (satır numarasıyla) erişilen bir veri grubu oluşturmak için kullanılan bir data structuredır.
Örnek olarak;

Code Block
// Array oluşturmak
var myArray = ['a', 'b', 'c'];

// Arrayden bir elemanı okumak
myArray[1]; // 'b'
```


