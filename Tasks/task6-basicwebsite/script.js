// ----------------------------------------search 



//<div class="col5"> 
//            <input type="text" class="search" placeholder="Search" id="search" oninput="searchFunction()" />
//</div>

function searchFunction() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';                                           //clear results

    if (query.length === 0) {
      return;
    }

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&utf8=&format=json&origin=*`)
      .then(response => response.json())
      .then(data => {
        const searchResults = data.query.search;
        if (searchResults.length === 0) {
          resultsContainer.innerHTML = '<div class="result-item">Sonuç bulunamadı</div>';
        } else {
          searchResults.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `<strong>${item.title}</strong><br>${item.snippet}...`;
            resultsContainer.appendChild(div);
          });
        }
      })
      .catch(error => {
        console.error('Arama sırasında bir hata oluştu:', error);
        resultsContainer.innerHTML = '<div class="result-item">Arama sırasında bir hata oluştu</div>';
      });
  }


//----------------------------------------------------------------

function loadMore() {
    document.getElementById("none").style.display = "block";
    document.getElementById("load").style.display = "none";
    document.getElementById("load1").style.display = "block";
  }
  function loadMore1() {
    document.getElementById("none").style.display = "none";
    document.getElementById("load").style.display = "block";
    document.getElementById("load1").style.display = "none";
  }