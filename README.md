# Jargonist için geliştirilmiş komut satırı uygulaması
- Bu uygulama sayesinde jargonist'te mevcut olan jargonları görebilir ve jargonlar hakkında bilgiye komut satırından ulaşabilirsiniz.
- https://jargon.ist
## Kurulum
```
npm install -g jargonist-cli
```
Uygulamayı sisteminize global bir şekilde kurmalısınız. 
## Kullanım
```
jargon list
```
Jargonist'te mevcut olan tüm jargonları görebilirsiniz.

```
jargon look <jargon>
```
Jargonist üzerinde jargon araması yapabilir ve detaylarını görebilirsiniz.
## Örnek Kod
```
jargon look array

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


