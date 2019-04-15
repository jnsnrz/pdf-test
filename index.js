var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                    background: '#fff',
                    width: 25
                },
                {
                    background: '#000',
                    width: 50
                },
                {
                    background: '#fc0000',
                    width: 25
                }
            ]

        },

        {
            background: '#99F',
            updateTime: 800,
            elements: [{
                    background: '#eeeeee',
                    width: 60
                },
                {
                    background: '#ffc0cb',
                    width: 30
                },
                {
                    background: '#00ffff',
                    width: 10
                }
            ]

        },

        {
            background: '#25676F',
            updateTime: 1000,
            elements: [{
                    background: '#ffa500',
                    width: 50
                },
                {
                    background: '#d3ffce',
                    width: 50
                }
            ]

        }

    ]
}


document.addEventListener("DOMContentLoaded", function() {

    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        lines_count = params.lines.length,
        container = document.querySelector(".lines-container");
        

   function createLines() {

        for(var i = 0; i < lines_count; i++) {

            var line = document.createElement("div"),
                elements = params.lines[i].elements;

            line.classList.add("line-container");
            line.style.background = params.lines[i].background;
            line.style.height = (height / lines_count) + "px";

            for(var j = 0; j < elements.length; j++) {

                var element = document.createElement("div");

                element.style.background = elements[j].background; 
                element.style.width = elements[j].width + "%";


                bindInterval(elements[j], params.lines[i].updateTime, element);

                line.appendChild(element);
            }
            
            container.appendChild(line);
        }

    }

   function generateColor() {
        return '#'+ Math.random().toString(16).slice(-6);
   }

   function bindInterval(item, time, el) {

        var timer = setInterval(function() {

            el.style.background = generateColor();

        }, time);

   }

   createLines();

});