$(document).ready(function () {
    gallery = {
        init: function () {
            var that = this;
            $.getJSON("/gallery/output.js", function (data) {
                that.render(data);
            });
        },
    
        render: function (data) {
            var html, li = "<div id='demonLightgallery'>";
            for (var index in data) {
                li += '<div class="gallery-card animated fadeInUp" data-src="' + data[index].url + '" data-sub-html="<h5>' + data[index].title + '</h5><p>' + data[index].date + '</p>' +
                    '<a href="' + data[index].url + '" class="lazyload">' +
                    // '<img class="lazyload" src="' + data[index].url + '" alt="" />' +
                    '<img class="lazyload" data-original="' + data[index].url + '" alt=""/>' +
                    // '<h2>' + data[index].title + '</h2>' +
                    '<p>' + data[index].title + '</p>' +
                    '</a></div>';
            }
            li += '</div>'
            $(".widget-gallery").append(li);
            $("img.lazyload").lazyload();
            $("#demonLightgallery").lightGallery({
                // thumbnail: true
            });
            

            // setTimeout(function () {
            //     $('.widget-gallery').masonry({
            //         itemSelector: '.gallery-card',
            //         columnWidth: '.gallery-card'
            //     });
            // }, 200)
        }
    }
    
    gallery.init();
})
