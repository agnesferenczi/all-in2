$(document).ready(function() {
    let jobsToImages = {
        '.alpin-technika': [{ src: 'img/alpin/20180519_093743.jpg' },
            { src: 'img/alpin/20181128_121929.jpg' }, { src: 'img/alpin/IMG_20171123_111642.jpg' }, { src: 'img/alpin/20180519_121042.jpg' }, { src: 'img/alpin/20180531_165857.jpg' }, { src: 'img/alpin/20180519_121037.jpg' }, { src: 'img/alpin/20180518_125041.jpg' }, { src: 'img/alpin/20180518_115047.jpg' }, { src: 'img/alpin/20181022_141316(0).jpg' }
        ],
        '.epitoipari-munkak': [{ src: 'img/img5.jpg' },
            { src: 'img/img6.jpg' }
        ],
        '.galamb-riasztas': [{ src: 'img/galamb/20190523_195257.jpg' },
            { src: 'img/galamb/20181219_134142.jpg' }, { src: 'img/galamb/20180827_202604.jpg' }, { src: 'img/galamb/20181218_145933.jpg' }
        ],
        '.ipari-tisztitas': [{ src: 'img/takaritas/20200713_121747.jpg' },
            { src: 'img/takaritas/20181125_121230.jpg' }, { src: 'img/takaritas/20181128_121930.jpg' }, { src: 'img/takaritas/20201001_143122.jpg' }
        ],
    };

    for (const [selector, images] of Object.entries(jobsToImages)) {
        let elem = $(selector);
        elem.click(function(_e) {
            elem.lightGallery({
                dynamic: true,
                dynamicEl: images,
            });
            return false;
        });
    }
});