const GoogleImages = require('google-images');
 
const client = new GoogleImages('CSE ID', 'AIzaSyBzSfe7Wrj-d1toGrOAHnm8FgAfDyS0PCI');
 
client.search('Steve Angello')
    .then(images => {
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         */
    });