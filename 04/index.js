
        $(function() {
            $("#btnok").click(function() {
                var fs = Math.random() * 50;
                var speed = parseInt(getSpeed());
                var color = getColor();
                var top = parseInt(Math.random() * $(".screen").height()) - $(".screen span").height();
                $("<span></span>")
                    .text($("#inVal").val())
                    .css({
                        "font-size": fs + "px",
                        "color": color,
                        "left": 100 + '%',
                        "top": top,
                    })
                    .animate({
                        "left": -50 + "%"
                    }, speed, "linear", function() {
                        $(this).remove();
                    })
                    .appendTo(".screen");

                $("input").val("").focus();
            });

            $("#inVal").keyup(function(e) {
                if (e.keyCode == 13) {
                    $("#btnok").click();
                }
            });
            $("#clear").click(function() {
                $("#screen span").remove();
            });
        });

        function getSpeed() {
            var max = 15000;
            var min = 7500;
            var speed = Math.floor(Math.random() * (max - min + 1) + min);
            return speed;
        }

        function getColor() {
            var color1 = Math.floor(Math.random() * 256);
            var color2 = Math.floor(Math.random() * 256);
            var color3 = Math.floor(Math.random() * 256);
            return `rgb(${color1},${color2},${color3})`;
        }
   