function countdown(num, callback) {
    setTimeout(function () {
      document.getElementById("countdown").innerText = num;
      callback(num - 1);
    }, 1000);
  }

  countdown(10, function (num) {
    countdown(num, function (num) {
      countdown(num, function (num) {
        countdown(num, function (num) {
          countdown(num, function (num) {
            countdown(num, function (num) {
              countdown(num, function (num) {
                countdown(num, function (num) {
                  countdown(num, function (num) {
                    countdown(num, function (num) {
                      countdown(num, function () {
                        document.getElementById("countdown").innerText =
                          "HAPPY INDEPENDENCE DAY";
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