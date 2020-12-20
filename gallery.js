$(document).ready(function() {
    let jobsToImages = {
        '.alpin-technika': [{ src: 'img/alpin/20180519_093743.jpg' },
            { src: 'img/alpin/IMG_20171123_111642.jpg' }, { src: 'img/alpin/20180519_121042.jpg' }, { src: 'img/alpin/20180531_165857.jpg' }, { src: 'img/alpin/20180518_125041.jpg' }, { src: 'img/alpin/20180518_115047.jpg' }, { src: 'img/alpin/elotte-utana4.jpg' }
        ],
        '.epitoipari-munkak': [{ src: 'img/epito/elotte-utana7.jpg' }, { src: 'img/epito/elotte-utana5.jpg' }, { src: 'img/epito/elotte-utana6.jpg' }, { src: 'img/epito/20180714_115348.jpg' },
            { src: 'img/epito/20170521_202607.jpg' }, { src: 'img/epito/20180803_083120.jpg' },
        ],
        '.reklam-kihelyezes': [{ src: 'img/reklam/img3.jpg' },
            { src: 'img/reklam/20180506_223500.jpg' }, { src: 'img/reklam/20180430_143914.jpg' }, { src: 'img/reklam/20180505_161922.jpg' }, { src: 'img/reklam/20180607_212329.jpg' }, { src: 'img/reklam/IMG_20171030_143926.jpg' }, { src: 'img/reklam/IMG_20180309_113805.jpg' }
        ],
        '.fakivagas': [{ src: 'img/favagas/20181205_113240.jpg' }, { src: 'img/favagas/20180921_133112.jpg' }, { src: 'img/favagas/20180830_145038.jpg' }],
        '.galamb-riasztas': [{ src: 'img/galamb/20181218_145933.jpg' }, { src: 'img/galamb/20190523_195257.jpg' }, { src: 'img/galamb/20180827_202604.jpg' }, { src: 'img/galamb/20181219_134142.jpg' }],
        '.ipari-tisztitas': [{ src: 'img/takaritas/20181125_121230.jpg' }, { src: 'img/takaritas/20181128_121930.jpg' }, { src: 'img/takaritas/elotte-utan3.jpg' },
            { src: 'img/takaritas/elotte-utana2.jpg' }
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