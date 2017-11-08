/**
 * Created by Hossam-Eldin on 4/28/2017.
 */

var reddit = new Vue({
    el: '#reddit',
    data:{
        tag :'',
        outPut:''
    },

    watch:{
        tag: function () {
                this.outPut= '';
                if (this.tag.length == 3){
                    this.lookupTag()
                }
        }
    },

    methods:{
        lookupTag:_.debounce(function () {
            var app = this
            app.outPut ="searching....."
            axios.get('https://www.reddit.com/r/' + app.tag  +'/top/.json?limit=10&sort=hot')
                .then(function (response) {
                    app.outPut =response.data.data.children.map(function (item) {
                            return item.data.title
                    })
                    // console.log(response.data.data.children.map(function(item) {
                    //     return item.data.id;
                    // }))
                })
                .catch(function (error) {
                        app.outPut = "invalid"
                })
        }, 500)
    }
});