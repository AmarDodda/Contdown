function countdown(num, callback) {
    setTimeout(() => {
      document.getElementById("countdown").innerText = num;
      callback(num - 1);
    }, 1000);
  }

  countdown(10, (num) => {
    countdown(num, (num) =>{
      countdown(num, (num)=> {
        countdown(num,  (num) =>{
          countdown(num,  (num)=> {
            countdown(num, (num)=> {
              countdown(num,  (num) =>{
                countdown(num,  (num) =>{
                  countdown(num,  (num) =>{
                    countdown(num, (num) =>{
                      countdown(num,  () =>{
                        document.getElementById("countdown").innerText ="HAPPY INDEPENDENCE DAY";
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });