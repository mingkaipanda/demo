<template>

    <div class="searchBar">
      <input v-model="msg" class="searchInput" type="text" placeholder="Add....." />
      <button @click="updateList(msg)" class="searchButton" type="button" name="button">Add</button>
    </div>
  
    <div class="">
      <h1>{{ msg }}</h1>
      <ul>
        <li v-for="item in list" :key="item.key">
          {{ item.company }}
        </li>
      </ul>
    </div>
  
    <div class="fetchGet">
      <h2>FetchGet</h2>
      <button @click="fetchGET(getURI)" class="searchButton" type="button" name="button">FetchGet</button>
  
      <div class="fetchGetResult" v-if="fetchGetResponse !== null">
        <h3>Totals - {{ fetchGetResponse.total }}</h3>
        <table>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Scoure</th>
            <th>Version</th>
            <th>Description</th>
          </tr>
          <tr v-for="(result, index) in fetchGetResponse.results" :key="result.index">
            <td>{{ index }}</td>
            <td>{{ result.package.name }}</td>
            <td>{{ result.package.scope }}</td>
            <td>{{ result.package.version }}</td>
            <td>{{ result.package.description }}</td>
          </tr>
        </table>
      </div>
    </div>
  
    <div class="fetchPost">
      <h2>FetchPost</h2>
      <button @click="fetchPOST(postURI, postBody)" class="searchButton" type="button" name="button">FetchPost</button>
  
      <div class="fetchPostResult" v-if="fetchPostResponse !== null">
        <table>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Id</th>
          </tr>
          <tr>
            <td></td>
            <td>{{ fetchPostResponse.title }}</td>
            <td>{{ fetchPostResponse.id }}</td>
          </tr>
        </table>
      </div>
    </div>
  
    <div class="axiosGet">
      <h2>AxiosGet</h2>
      <button @click="axiosGET(getURI)" class="searchButton" type="button" name="button">AxiosGet</button>
  
      <div class="axiosGetResult" v-if="axiosGetResponse !== null">
        <h3>Totals - {{ axiosGetResponse.data.total }}</h3>
        <table>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Scoure</th>
            <th>Version</th>
            <th>Description</th>
          </tr>
          <tr v-for="(result, index) in axiosGetResponse.data.results" :key="result.index">
            <td>{{ index }}</td>
            <td>{{ result.package.name }}</td>
            <td>{{ result.package.scope }}</td>
            <td>{{ result.package.version }}</td>
            <td>{{ result.package.description }}</td>
          </tr>
        </table>
      </div>
    </div>
  
    <div class="axiosPost">
      <h2>AxiosPost</h2>
      <button @click="axiosPOST(postURI, postBody)" class="searchButton" type="button" name="button">AxiosPost</button>
  
      <div class="axiosPostResult" v-if="axiosPostResponse !== null">
        <table>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Id</th>
          </tr>
          <tr>
            <td></td>
            <td>{{ axiosPostResponse.data.title }}</td>
            <td>{{ axiosPostResponse.data.id }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  export default {
    name: 'HttpMethods',
    data() {
      return {
        msg : "",
        list :  [
          {
            'company' : 'TESLA'
          },
          {
            'company' : 'APPLE'
          }
        ],
        getURI : "https://api.npms.io/v2/search?q=vue",
        postURI : "https://jsonplaceholder.typicode.com/posts",
        postBody : { title : "Vue POST Request Example"},
        // postBody : '{title: "Vue POST Request Example"}'
        fetchGetResponse : null,
        fetchPostResponse : null,
        axiosGetResponse : null,
        axiosPostResponse : null,
        totalVuePackages : null,
        status : null
      }
    },
    methods: {
      updateList: function(msg) {
        this.list.push({'company' : msg});
      },
      fetchGET: function(uri) {
        fetch(uri)
          .then(response => (this.fetchGetResponse = response.json()))
          .then(data => (this.fetchGetResponse = data))
          // .then(data => (this.totalVuePackages = data.total))
      },
      fetchPOST: function(uri, body) {
        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        };
        fetch(uri, requestOptions)
          .then(response => response.json())
          .then(data => (this.fetchPostResponse = data));
      },
      axiosGET: function(uri) {
        axios.get(uri)
          .then(response => (this.axiosGetResponse = response))
      },
      axiosPOST: function(uri, postBody) {
        axios.post(uri, postBody)
          .then(response => (this.axiosPostResponse = response))
      }
    },
  }
  </script>
  
  <style scoped>
  
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  
  .searchInput {
    padding: 10px;
    width: 250px;
  
    border: 2px solid #ededed;
    border-radius: 10px;
  }
  
  .searchButton {
    margin: 10px;
    padding: 8px 24px;
  
    border: 2px solid #ededed;
    border-radius: 10px;
  
    cursor: pointer;
  }
  
  li {
    display: block;
  }
  
  .axiosGetResult {
    margin: auto;
  }
  
  h2, button {
    margin: 20px;
    display: inline-block;
  }
  
  table {
    margin: auto;
  }
  
  table th {
    /* border: 1px solid; */
    padding: 15px;
    background-color: #ede8e8;
  }
  
  table td {
    /* border: 1px solid; */
    padding: 10px;
    background-color: #f7f2f2;
  }
  
  </style>
  