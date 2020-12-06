$(document).ready(function () {
    let jobsToImages = {
        '.alpin-technika':  [{src: 'img/img3.jpg'},
                             {src: 'img/img4.jpg'}],
        '.epitoipari-munkak': [{src: 'img/img5.jpg'},
                               {src: 'img/img6.jpg'}]
    };

    for (const [selector, images] of Object.entries(jobsToImages)) {
        let elem = $(selector);
        elem.click(function (_e) {
            elem.lightGallery({
                dynamic: true,
                dynamicEl: images,
            });
            return false;
        });
    }
});
