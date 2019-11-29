(function() {
    var selector = document.querySelector('.hero-container');
    var image = selector.querySelector('.block.linkedimageblock.displaymode-full img')
    var c = document.getElementById('canv');
    if (!c) {
        c = document.createElement('canvas');
        c.id = 'canv';
        c.style.position = 'absolute';
        c.style.top = 0;
        c.style.left = 0;
        c.style.width = '100%';
        c.style.height = '100%';
        image.parentNode.appendChild(c);
    }

    // Adjust selector to be position: relative
    selector.style.position = 'relative';

    var $ = c.getContext("2d");

    var h = c.height = image.clientHeight;
    var w = c.width = image.clientWidth;

    var Snow = function() {
        var snow, arr = [];
        var num = 600, tsc = 1, sp = 1;
        var sc = 1.3;
        var t = 0;
        var mv = 20;
        var min = 1;

        function go() {
            window.requestAnimationFrame(go);
            $.clearRect(0, 0, w, h);
            $.fillRect(0, 0, w, h);
            $.fill();
            for (var i = 0; i < arr.length; ++i) {
                f = arr[i];
                f.t += .05;
                f.t = f.t >= Math.PI * 2 ? 0 : f.t;
                f.y += f.sp;
                f.x += Math.sin(f.t * tsc) * (f.sz * .3);
                if (f.y > h + 50) f.y = -10 - Math.random() * mv;
                if (f.x > w + mv) f.x = - mv;
                if (f.x < - mv) f.x = w + mv;
                f.draw();
            }
        };

        function Flake() {
            this.draw = function() {
                this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
                this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
                this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
                $.moveTo(this.x, this.y);
                $.fillStyle = this.g;
                $.beginPath();
                $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
                $.fill();
            };
        };

        for (var i = 0; i < num; ++i) {
            snow = new Flake();
            snow.y = Math.random() * (h + 50);
            snow.x = Math.random() * w;
            snow.t = Math.random() * (Math.PI * 2);
            snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
            snow.sp = (Math.pow(snow.sz * .8, 2) * .15) * sp;
            snow.sp = snow.sp < min ? min : snow.sp;
            arr.push(snow);
        }

        go();
    };

    Snow();

    window.addEventListener('resize', function() {
        c.width = w = image.clientWidth;
        c.height = h = image.clientHeight;
    }, false);

})();
