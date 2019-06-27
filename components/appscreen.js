class Feature{
    constructor(appscreen){
        this.appscreen = appscreen;
        

        this.data = appscreen.dataset.phone;
        

        this.phone = appscreen.querySelector('img');
        

        this.text = appscreen.querySelector('p');
        

        this.phone.addEventListener('click', (event)=>{
            return this.selectPhone();
        })
    }

    selectPhone(){
        const text = document.querySelector(`p[data-phone="${this.data}"]`)

        text.classList.toggle('hide');
    }
}



const appscreen = document.querySelectorAll('.appscreen');


appscreen.forEach((screen)=>{
    return new Feature(screen);
})