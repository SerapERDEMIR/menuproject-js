//console.log('Bağlantı Kontrol')
import menu from "./database.js";
//console.log(menu)
const menuContainer = document.getElementById("menu-container");
//console.log(menuContainer)

const filterButton = document.querySelectorAll(".filter-btn");
//console.log(filterButton)
/**
 *Databasen gelen menu dizisini array metdou dönecez
 *Diziden dönen her bir veri için ekrana bir eleman bastırılacak
 *
 */

//Sayfa yüklendiği anda fonksiyonları çalıştırmak için
document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
});
//Sayfa yüklendiğinde menuyü göstermek için
function displayMenu(menuItems) {
  // console.log(menuItems);
  let dispMenu = menuItems.map(
    (menuItem) => `
 <div
 class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
 id="card"
>
 <img
   src=${menuItem.img}
   alt=""
   id="image"
   class="rounded shadow"
 />
 <div>
   <div class="d-flex justify-content-between">
     <h5>${menuItem.title}</h5>
     <p>${menuItem.price} &#8378;</p>
   </div>
   <p class="lead">
     ${menuItem.desc}
   </p>
 </div>
</div>
 `
  );
  dispMenu = dispMenu.join("");
  menuContainer.innerHTML = dispMenu;
}

//Filitreleme işlemi yapan butonları forEach ile dönülüyor
//forEach kullanılıyor çünkü map metado sadece dizilerde kullanılır
filterButton.forEach((button) => {
  //console.log(button)

  //Her bir buttona bir olay dinleyicisi ekleniyor
  button.addEventListener("click", (e) => {
    //htmlde verdiğimiz ataset özellği sayseinde tıklanılan elemanı tespit edebiliyoruz
    const category = e.target.dataset.id;
    //console.log(category);
    //filitrleme yapacak olan fonksiyona o anki tıklanılan butonun categori
    //bilgisi parametre olarak gönderiyoırz
    searchCategory(category);
  });
});

//filitreleme fonksiyonu
function searchCategory(categoryInfo) {
  //console.log(categoryInfo);
  //filter metodu tüm menüyü döner ve verilen paramter doğruslnda yebni dizi geri dönrürü
  const filteredMenu = menu.filter(
    //Eğer benım menumden dönen elemanlardan catogory bilgisi 
    //paramatre olarak gelen categoryInfo ya eşitse sen bu elemanı ekleyrek yeni dizi oluştur
    (menuItem) => menuItem.category === categoryInfo
  );

  //console.log(filteredMenu)
//tıklanılan buton hepsi ise 
  if (categoryInfo === "all") {
    //tüm menüyü göster
    displayMenu(menu);

  }
  //tıklanılan button hepsi değilse
  else {
    //tıklan butondan da dönen diziyi göster
    displayMenu(filteredMenu);
  }
}

// let fiyat='5';

// if(fiyat==='5'){
//     console.log(`Fiyat Biglisi 5 eşit`)
// }else{
//     console.log('fiyat eşit değil')
// }