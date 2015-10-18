Template.heroGalaxy.helpers({
    images: function() {
        var fileNames = [];
        var allowedImages = [10, 19, 21, 22];

        for(var i = 3; i <= 29; i++) {
            if(~allowedImages.indexOf(i))
                fileNames.push({src: '/images/products/Image'+i+'.jpg'});
        }

        return fileNames;
    }
});
