
var $ticker1 = $('#news-ticker-1').newsTicker({
    animationType: 'scroll',
    classNamePrefix: 'jq-news-hoge-',
    debug: true
});

describe('jQuery.newsTicker - 1', function() {
    //console.log($ticker1);

    it('getConfg', function() {
        expect($ticker1.getConfig().debug).toBeTruthy();
        expect($ticker1.getConfig().scrollStep).toEqual(5);
        expect($ticker1.getConfig().scrollSecond).toEqual(0.07);
        expect($ticker1.getConfig().interval).toEqual(2000);
        expect($ticker1.getConfig().animationType).toEqual('scroll');
        expect($ticker1.getConfig().classNamePrefix).toEqual('jq-news-hoge-');
    });

    it('getClassName', function() {
        expect($ticker1.getClassName('', true)).toEqual('jq-news-hoge-');
        expect($ticker1.getClassName('')).toEqual('.jq-news-hoge-');
        expect($ticker1.getClassName('', false)).toEqual('.jq-news-hoge-');
    });

    it('getItems', function() {
        //expect($ticker1.getItems().length).toEqual(6);
    });

    it('getItem', function() {
        //var $item = $ticker1.getItem(0);
        //expect($item.text()).toEqual('【コラム】◯◯◯◯が語る、監督交代と△△△△△△△の変化');
    });

    it('getPointer', function() {
        //console.log($ticker1.getPointer());
        expect($ticker1.getPointer()).toEqual(0);
    });

    it('setPointer', function() {
        //console.log($ticker1.getPointer());
        $ticker1.setPointer(5);
        expect($ticker1.getPointer()).toEqual(5);
        $ticker1.tick();
    });

});


/*var $ticker2 = $('#news-ticker-2').newsTicker({
    animationType: 'scroll',
    interval: 3000,
    debug: true
});
console.log($ticker2);
describe('jQuery.newsTicker - 2', function() {
    it('getConfg', function() {
        expect($ticker2.getConfig().debug).toBeTruthy();
        expect($ticker2.getConfig().scrollStep).toEqual(5);
        expect($ticker2.getConfig().scrollSecond).toEqual(0.07);
        expect($ticker2.getConfig().interval).toEqual(3000);
        expect($ticker2.getConfig().animationType).toEqual('scroll');
        expect($ticker2.getConfig().classNamePrefix).toEqual('jq-news-ticker-');
    });
});*/


/*
var hoge = function() {
    return a + 1;
};

describe('Other Tests', function() {

    it('threw hoge exception', function() {
        //expect(hoge).toThrow();
    });

    it('threw hoge exception', function() {
        expect(hoge).toThrow();
        expect(hoge).toThrow('Can\'t find variable: a');
    });

    it('threw hoge exception', function() {
        try {
            hoge();
        } catch (e) {
            expect(e.message).toEqual('Can\'t find variable: a');
        }
    });

    it('threw hoge exception', function() {
        try {
            hoge();
        } catch (e) {
            expect(e.message).toMatch('Can\'t find variable');
        }
    });

    it('threw fuga exception', function() {
        try {
            fuga;
        } catch (e) {
            expect(e.message).toEqual('Can\'t find variable: fuga');
        }
    });

    it('threw moga exception', function() {
        //expect(moga).toThrow();
    });

    //console.log(hoge());
    //console.log(fuga);
});
*/

