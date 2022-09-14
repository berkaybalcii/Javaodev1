
// let tanımlama operatörü
// let price=100
// let tax=0.18
// let priceTax=price*tax
// let totalPrice=price+priceTax

// console.log tanımladığımız şeyleri ekrana yazmaya yarar 
// console.log("FİYAT: ",price,"KDV ORANI: ",tax,"TOPLAM FİYAT: ",totalPrice)
// let counter=totalPrice

// arttırma işlemi
// counter=counter+1
// console.log(counter)

// boolean veritipi
// let isActive= false
// isActive=true
// console.log(isActive)
// let userName;
// let isuserName=Boolean(userName)
// console.log(isuserName)

// userName='Berkay Balcı'
// console.log("Kullanıcı Adı Var Mı ?",Boolean(userName))

// Veri tipi değiştirme parseInt ve Number ve .tostring() ve parseFloat
// let number1="11px"
// number1=parseInt(number1)
// console.log("number1: ",parseInt(number1),typeof(number1))
// let number2="11px"
// number2=Number(number2)
// console.log("number2: ",parseInt(number2),typeof(number2))
// let number3="11px"
// number3.toString(number3)
// console.log("number3: ",parseInt(number3),typeof(number3))
// let number4="11px"
// number4=parseFloat(number4)
// console.log("number4: ",parseInt(number4),typeof(number4))


// // TEMPLATE LİTERALS KULLANIMI
// let userName="berkay"
// const DOMAIN="nku.edu.tr"
// let email=userName + "@" + DOMAIN
// // console.log("Merhaba ",userName,"sitemize hoşgeldin email adresin: ", email)
// let info=`Merhaba ${userName} sitemize hoşgeldin.. email adresin ${email}
// mail adresinizdeki karakter sayısı ${email.length} tanedir. BORCUNUZ: ${(2+3)*5} TL Günün saat bilgisi: ${new Date().getHours()} 
// kısa isminiz: ${userName[0]}.`
// console.log(info)

// BÜYÜK HARFE ÇEVİRME
// let userName="Berkay Balcı"
// userName=userName.toUpperCase()
// console.log(userName)

// KÜÇÜK HARFE ÇEVİRME
// let userName="Berkay Balcı"
// userName=userName.toLowerCase()
// console.log(userName)


// // ARADIĞIN YERİ BULMA 
// let email="1170606057@nku.edu.tr"
// console.log(email.length) 21
// console.log(email.search("@")) 10
// // console.log(email[10])

// // BELİRLİ BİR YERE KADAR İSTENEN DEĞERLERİ ALMA
// // console.log(email.slice(0,10))

// console.log(email.indexOf(".")) 14
// // let DOMAIN=email.slice(11,21) nku.edu.tr
// // console.log(DOMAIN) nku.edu.tr
// // console.log(DOMAIN.indexOf(".")) ÇIKTI 3 


// BİR YERLERİ DEĞİŞTİRMEK YENİDEN TANIMLAMAK 
// email=email.replace("nku.edu.tr","gmail.com")
// console.log(email)


// Bir şey var mı yok mu true false
// console.log(email.includes("@"))


// Neyle bitti yada başladı endswith startswith
// console.log(email.endsWith("nku.edu.tr"))

// BÜYÜK HARF KÜÇÜK HARF YAPIMI
// let Firstname="BERKAY"
// let Lastname="balcı"
// let FullName=`${Firstname[0].toUpperCase()}${Firstname.slice(1).toLowerCase()} ${Lastname[0].toUpperCase()}${Lastname.slice(1).toLowerCase()}`
// console.log(FullName)

// DOM İŞLEMLERİ
// let title=document.getElementById('title')
// title.innerHTML="Değişen Bilgi"
// console.log(title.innerHTML)
// let link=document.querySelector("#list")
// link.innerHTML+=' değişti'
// link.style.color='red'
// link.classList.add='btn'

//prompt işlemleri
// let FullName=prompt("Lütfen adınızı giriniz: ")
// let title=document.querySelector("#title")
// title.innerHTML=`${title.innerHTML} <br> Merhaba <small style="color:red">${FullName}</small> sitemize hoşgeldin`

// Liste elemanlarından ilk elemanı ve son elemanı bularak bunları değiştirmek
// let lastChild=document.querySelector("ul#list>li:last-child")
// lastChild.innerHTML="last"
// let firstChild=document.querySelector("ul#list>li:first-child")
// firstChild.innerHTML="first"

// Kendi oluşturduğumuz öğeyi başa sona eklemek
// let ulDom=document.querySelector("ul#list")
// let liDom=document.createElement("li")
// liDom.innerHTML="Kendi oluşturduğumuz öğe"
// ulDom.prepend(liDom)
// ulDom.append(liDom)


// Sınıf Ekleme - Sınıf Silme işlemleri
// let greeting=document.querySelector("#greeting")
// greeting.classList.add("text-primary")
// greeting.classList.add("title")
// greeting.classList.add("new-info","third-class","second-class")
// greeting.classList.remove("title","new-info")

// var a=10
// var b=10
// console.log(a==b)
// // EKRANDA ÇIKAN SONUÇ TRUE

// var a=10
// var b="10"
// console.log(a===b)
// // EKRANDA ÇIKAN SONUÇ FALSE ÇÜNKÜ === HEM DEĞERE HEMDE VERİLERİN TÜRÜNÜN AYNI OLUP OLMADIĞINA BAKAR
// console.log(a!=b)
// // EKRANDA ÇIKAN SONUÇ FALSE ÇÜNKÜ a b ye değer olarak eşit
// console.log(a!==b)
// // EKRANDA ÇIKAN SONUÇ true çünkü a b ye değer olarak eşit fakat tür olarak eşit değil
// var c="kodluyor"
// var d="değişken"
// console.log(c!=d)
// // EKRANDA ÇIKAN SONUÇ TRUE ÇÜNKÜ C İLE D DEĞER OLARAK AYNI DEĞİL 
// console.log(c!==d)
// // EKRANDA ÇIKAN SONUÇ TRUE ÇÜNKÜ TÜR OLARAK AYNI OLSALARDA DEĞER OLARAK AYNI DEĞİL
// console.log(a=10 && c=="kodluyor")
// // EKRANDA ÇIKAN SONUÇ TRUE ÇÜNKÜ A 10'A EŞİT VE C KODLUYOR
// console.log(a>11 && c=="kodluyor")
// // EKRANDA ÇIKAN SONUÇ FALSE ÇÜNKÜ C KODLUYOR OLSADA A 11 DEN BÜYÜK DEĞİL
// console.log(a>11 || c=="kodluyor")
// // YADA MANTIKSAL OPERATÖRÜNÜ KULLANDIĞIMIZ İÇİN EKRANDA ÇIKAN SONUÇ TRUE OLACAK
// console.log(!(a>11 || c=="kodluyor"))
// // EKRANDA ÇIKAN SONUÇ FALSE ÇÜNKÜ ! (DEĞİL) OPERATÖRÜNÜ KULLANDIK VE TRUE OLAN SONUÇ FALSE A DÖNDÜ


// Koşul Yapısı Kullanarak Çalışmak
// let FullName=prompt("Kullanıcı Adınızı Giriniz: ")
// if (FullName.length>0){
//     console.log(`Kullanıcı Adınız: ${FullName}`)

// } else{
//     console.log("Bilginiz yok")
// }


// let n=
// if (n%2==1){
//     console.log("Weird")
    
// } if (n%2==0 &&(2<=n && 5>=n)){
//     console.log("Not Weird")
    
// } if (n%2==0 &&(6<=n && 20>=n)){
//     console.log("Weird")
    
// } 
// if(n>20){
//     console.log("Not Weird")
    
// }
// let n="Welcome to 30 Days of Code!"
// if (n="Welcome to 30 Days of Code!"){
//     console.log("Hello,World.")
//     console.log("Welcome to 30 Days of Code!")
// } else {
//     console.log("dasdasd")
// }


// Koşullu yapılar
// let userName=prompt("Kullanıcı Adınızı Giriniz:")
// let age=prompt("Yaşınızı giriniz: ")
// let info=document.querySelector("#info")
// if(!userName){
//     info.innerHTML="Kullanıcı adınız yok"


// }else if(userName && age>=18){
//     info.innerHTML="Ehliyetinizi alabilirsiniz"

// } else if (!(age>=18)){
//      info.innerHTML="Yaşınız yok yada 18 yaşından küçüksünüz"
// }


// Ternary kullanımı 0 ? username : else
// let userName=prompt("Kullanıcı adınızı giriniz: ")
// let info=document.querySelector("#info")
// info.innerHTML=`${userName.length > 0 ? userName : "Kullanıcı bilginiz bulunamadı"}`



//                    Öğrenci Notlarını Ekrana yazdırma ile ilgili bir uygulama yapımı
// let score=prompt("Notunuzu giriniz: ")
// let textınfo
// let info=document.querySelector("#info")

// const smile=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`
// const sad=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`
// if(score>=0 && score<=100){
//     textınfo=smile
//     info.classList.add(`text-primary`)
//     if(score>=90){
//         textınfo+=" AA"
//         } else if(score>=85){
//         textınfo+=" BA"
//         } else if(score>=80){
//         textınfo+=" BB"
//         } else if(score>=75){
//       textınfo+=" CB"
//         } else if(score>=70){
//       textınfo+=" CC"
//       } else if(score>=65){
//        textınfo+=" DC"
//        } else if(score>=60){
//         textınfo+=" DD"
//         } else if(score>=50){
//       textınfo+=" FD"
//       } else if(score<50){
//         textınfo=`${sad} FF`
//         info.classList.remove(`text-primary`)
//        info.classList.add(`text-danger`)
//        }
  
// } else{
//     console.log("Not bilginiz 0 ile 100 arasında değil")
// }

// info.innerHTML=`${textınfo} -> ${score}`

let userName=prompt("Kullanıcı adınızı giriniz: ")
let info=document.querySelector("#myName")
info.innerHTML=`${userName} `
let saat=document.querySelector("#myClock")
saat.innerHTML=`${new Date()}`
