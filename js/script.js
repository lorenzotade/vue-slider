const app = new Vue({

  el: '#app',

  data: {

    counterImg: 0,

    imgSrc: [
      'img/murray-1.jpeg',
      'img/murray-2.jpeg',
      'img/murray-3.jpeg',
      'img/murray-4.jpeg'
    ]

  },
  methods: {
    
    prevImg() {
      this.counterImg--;
      if (this.counterImg < 0) {
        this.counterImg = (this.imgSrc.length - 1);
      }
    },

    nextImg() {
      this.counterImg++;
      if (this.counterImg === this.imgSrc.length) {
        this.counterImg = 0;
      }
    },
    
    automateCarousel() {
      setInterval(this.nextImg, 3000);
    }

  }

}); 