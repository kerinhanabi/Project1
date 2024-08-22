const app = Vue.createApp({
    //data , function
    //template:'<h5>I am a template.</h5>'
    data(){
        return{
            ShowProfile: true,
            message: 'Hello Vue',
            Name: 'Kerin Title 1',
            Phoneno: '0123456789',
            Age: '37',
            x: 0,
            y: 0,
            profile: [
                { Name: 'Kerin1', Number: '0123456789', Age: '37', img: 'assets/avatar1.png', isOdd: true, isFav: true },
                { Name: 'Kerin2', Number: '9876543210', Age: '38', img: 'assets/avatar2.png', isOdd: false, isFav: true },
                { Name: 'Kerin3', Number: '1234506789', Age: '38', img: 'assets/avatar3.png', isOdd: true, isFav: false },
            ],
            url:'http://www.google.com/',
            ProfileFav: true,
        
            
        }
    },
    methods: {
        //below are functions
        changeName(nameabc){
            this.Name = nameabc
            //this.Name = 'Kerin Title 2'
            //console.log('you clicked me')
        },
        ToggleShowProfile(){
            this.ShowProfile = !this.ShowProfile
        },
        //mouse event
        MouseEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        //profile add as fav
        ToggleFav(person){
            person.isFav = !person.isFav
        }
    },
    computed:{
        //filter fav person
        filteredProfile(){
            return this.profile.filter((profile) => profile.isFav)
        }
    }
})

app.mount('#app')
//console.log('vue testing calling file')
//console.log("vue testing calling file")