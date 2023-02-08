function req1() {
    fetch('https://jsonplaceholder.typicode.com/albums/1')
      .then((response) => response.json())
      .then(json => {
        const id = json.id;
        const title = json.title;
        document.getElementById("id").innerHTML = id;
        document.getElementById("title").innerHTML = title;
      });
    }
    
    // req1();
    
    function req2() {
      fetch('https://jsonplaceholder.typicode.com/albums/2')
        .then((response) => response.json())
        .then(json => {
          const id = json.id;
          const title = json.title;
          document.getElementById("id").innerHTML = id;
          document.getElementById("title").innerHTML = title;
        });
      }
      
      // req2();
    
      function req3() {
        fetch('https://jsonplaceholder.typicode.com/albums/3')
          .then((response) => response.json())
          .then(json => {
            const id = json.id;
            const title = json.title;
            document.getElementById("id").innerHTML = id;
            document.getElementById("title").innerHTML = title;
          });
        }
        
        // req3();
    
        function req4() {
          fetch('https://jsonplaceholder.typicode.com/albums/4')
            .then((response) => response.json())
            .then(json => {
              const id = json.id;
              const title = json.title;
              document.getElementById("id").innerHTML = id;
              document.getElementById("title").innerHTML = title;
            });
          }
          
          // req4();
