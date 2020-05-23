new Vue({
  el: '#members',
  data:{
      members:[],
    },
    mounted() {
        axios.get('https://steg.microcms.io/api/v1/members?limit=99',{
            headers: {
                'X-API-KEY': '15fcbc0e-ef8a-4e6f-8111-0811e534fe5d'
            }
        })
        .then(response => {
            this.members = response.data.contents
        })
        .catch(error => {
            console.log('error')
        })
    }
}),
new Vue({
    el: '#works',
    data: {
        works: []
    },
    mounted() {
        axios.get('https://steg.microcms.io/api/v1/works?limit=10', {
            headers: {
                'X-API-KEY': '15fcbc0e-ef8a-4e6f-8111-0811e534fe5d'
            }
        })
        .then(response => {
            this.works = response.data.contents
        })
        .catch(error => {
            console.log('error')
        })
    }
}),
new Vue({
    el: '#news',
    data: {
        news: []
    },
    mounted() {
        axios.get('https://steg.microcms.io/api/v1/news?limit=10', {
            headers: {
                'X-API-KEY': '15fcbc0e-ef8a-4e6f-8111-0811e534fe5d'
            }
        })
        .then(response => {
            this.news = response.data.contents
        })
        .catch(error => {
            console.log('error')
        })
    }
})