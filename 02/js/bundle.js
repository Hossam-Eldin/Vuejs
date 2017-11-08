/**
 * Created by Hossam-Eldin on 4/27/2017.
 */

var  app = new Vue({
    el : '#app',
    data :{
        message : 'hello world',
        intro : "hello <p> Name</p>",
        show : false,
        count : 0,
        url :'',
        cleanUrl : '',
        title: " u load it at " + new Date(),
    },
    methods: {
        countUp: function () {
            this.count += 1
        },
        countDown: function () {
                this.count -= 1
        },
        humanizUrl:function () {
            this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

        }
    }
});