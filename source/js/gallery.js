gallery = {
    page: 1,
    offset: 20,

    init: function () {
        var that = this;
        console.log('demo');        
        $.getJSON("/gallery/output.json", function (data) {
            that.render(that.page, data);
            console.log('demo');
        });
    },

    render: function (page, data) {
        var begin = (page - 1) * this.offset;
        var end = page * this.offset;
        if (begin >= data.length) return;
        var html, li = "";
        for (var i = begin; i < end && i < data.length; i++) {
            li += '<li><div class="card">' +
                '<a class="img-bg" rel="example_group" href="https://github.com/wangcch/hexoBlog/blob/master/gallery/' + data[i] + '?raw=true"></a>' +
                '<img lazy-src="https://github.com/wangcch/hexoBlog/blob/master/gallery/' + data[i] + '?raw=true" />' +
                '</li>';
        }
        $(".ImageGrid").append(li);
        $(".ImageGrid").lazyload();
        // $("a[rel=example_group]").fancybox();
        this.minigrid();
    },

    minigrid: function() {
        var grid = new Minigrid({
            container: '.ImageGrid',
            item: '.card',
            gutter: 12
        });
        grid.mount();
        $(window).resize(function() {
           grid.mount();
        });
    }
}

gallery.init();
