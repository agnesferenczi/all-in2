$(document).ready(function () {
    let alpinTechnique = $('.alpin-technika');
    alpinTechnique.click(function (_e) {
        alpinTechnique.lightGallery({
            dynamic: true,
            dynamicEl: [{
                "src": 'img/img3.jpg'
            },
            {
                "src": 'img/img4.jpg'
            }
            // ,
            //             {
            //     'src': '../static/img/2.jpg',
            //     'thumb': '../static/img/thumb-2.jpg',
            //     'subHtml': "<h4>Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            // }, {
            //     'src': '../static/img/3.jpg',
            //     'thumb': '../static/img/thumb-3.jpg',
            //     'subHtml': "<h4>Coniston Calmness</h4><p>Beautiful morning</p>"
            // }
                       ]
        });
        return false;
    });
});
