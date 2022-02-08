const AutoType = (options)=>{
    this.txtData = options.txtData;
    this.el = document.getElementById(options.elIdName)
    this.txtDataIndex = 0;
    this.period = parseInt(options.period, 10) || 2000;
    this.txt = '';
    this.animateClass = options.animateClass || 'typewrite-cursor-anim';
    this.delay = options.delay || 0
    setTimeout(()=>{
        tick();
    },options.delay)
    this.isDeleting = false;
    this.speed = options.speed || 0

    const tick = ()=>{
        setTimeout(() => {
            // get the index of the text in txtData array
            let i = this.txtDataIndex % this.txtData.length;
            let fullTxt = this.txtData[i];

            //If the word is being deleted, the letters will reduce. Otherwise, the word is inputting and the letter is being added.
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            // Once the txt is empty or same as the txt data, add or remove animation class
            if (this.txt.length === 0 || this.txt.length === fullTxt.length) {
                this.el.classList.add(this.animateClass)
            } else {
                this.el.classList.remove(this.animateClass)
            }

            // replace old text to current text
            this.el.innerHTML = this.txt;

            var _this = this;
            var delta = 200 - Math.random() * 100;

            // delete speed is fast
            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.txtDataIndex++;
                delta = 1000;
            }
            setTimeout(function() {
                _this.tick();
            }, delta);
        }, this.speed)
    }
}
export default AutoType
