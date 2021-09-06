// search button getting 
const searchBook = () =>{
    const bookNameInput= document.getElementById('bookNameInput');
    const bookName= bookNameInput.value ;
    console.log(bookName);

  // for clear input value

    bookNameInput.value='';

    // error message 

    if (bookName ==='') {
        showResult.innerHTML=` <h1 class="mx-auto" id="alertMessage">No result found!!!!</h1>`;
    }
    else{
        
      // fetch data 

    
    const url=`https://openlibrary.org/search.json?q=${bookName}`;
    
   

    fetch(url)
    .then(res =>res.json())
    .then(data => displaySearchResult(data.docs));

  
   

  
 

}

        // search result 
    const displaySearchResult = docs =>{
    
        const showResult = document.getElementById('showResult');
        
        showResult.innerHTML='';
        // found data
        foundResult.innerHTML=`<div><h1>result found:${docs.length}</h1>
        <br></div>`

        // error message 
        
        if (docs.length === 0) {
            showResult.innerHTML=` <h1 class="mx-auto" id="alertMessage">No result found!!!!</h1>`;
        }
       else{
        docs.forEach(doc=> {
           
            const div = document.createElement('div');
           
            div.classList.add('col');
            
            
            div.innerHTML=`
            
            <div class="card">
                  <img  src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h2 id="Writter" class="card-title">${doc.title}</h2>
                
                  <h5 id="author" class="card-title">Author Name:${doc.author_name}</h5>

                    <h5 id="publisher" class="card-title">publisher Name:${doc.publisher[0]}</h5>
                    <h5 id="publish_date" class="card-title">publish_date:${doc.first_publish_year}</h5>
                    <p class="card-text">1st Sentence:${doc.first_sentence}</p>
                  </div>
                </div>
            
            
            `
            // author checking 
            const authorCheck= doc.author_name;

          if (authorCheck !== undefined ) {
            showResult.appendChild(div);
              
          }
          
            
            
        });
       
       }
      
      
                 
    }

   

      

    }



        