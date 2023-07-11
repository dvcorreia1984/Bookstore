class Books{
  creatObject(){
    this.books = [
         {
           Id: 1,
           Title: 'Lorem ipsum',
           Author: 'Testeroo Testyy',
         },
         {
           Id: 2,
           Title: 'Second Books',
           Author: 'Testeroo Testyy',
         },
       ];
 }

 displayBookks()
 {
    const x=this.books;
    let book="";
     for (let i = 0; i < x.length; i += 1) {
       book += `<p>${x[i].Title}</p>`;
       book += `<p>${x[i].Author}</p>`;
       book += `<button onclick="a. removebooks(${x[i].Id});">Remove</button><br>`;
       book += '<hr>';
     }
     document.getElementById('display').innerHTML = book;
 }
}
  
