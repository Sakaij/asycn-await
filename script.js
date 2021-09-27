(function($) {
    const timer = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    $(async () => {
        const item1 = $('.soushi_item--1'),
            item2 = $('.soushi_item--2'),
            item3 = $('.soushi_item--3');
        await timer(1000);
        item1.fadeIn(1500);
        await timer(1000);
        item2.fadeIn(1500);
        await timer(1000);
        item3.fadeIn(1500);
    })

})(jQuery)