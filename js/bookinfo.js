var app = new Vue({
  el: "#app",
  data:{
        title: 'Hi',
        books:[],
        value:""
  },
  created(){
    this.fetchData();
  },

  methods:{
    fetchData() {
      fetch("https://api.myjson.com/bins/zyv02",{
        method: "GET"
    })
    .then((response) => {
      return response.json()
  })
  .then((data) => {
    this.books = data.books;
    console.log(this.books);
  })
}
},

computed: {
  getBooks() {
    return this.books.filter(book => book.title.toUpperCase().includes(this.value.toUpperCase()))
  }
},
})