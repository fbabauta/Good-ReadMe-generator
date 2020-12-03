<<<<<<< HEAD
const axios = require('axios');

const api = {
    async getUser(userResponses)   {
        try { let response = await axios
        
          // Sample URL: https://api.github.com/users/fbabauta
          .get('https://api.github.com/users/${userResponses.username}');
          return response.data;
          
          } catch (error)   {
              console.log(error);
          }
    }
};

=======
const axios = require('axios');

const api = {
    async getUser(userResponses)   {
        try { let response = await axios
        
          // Sample URL: https://api.github.com/users/fbabauta
          .get('https://api.github.com/users/${userResponses.username}');
          return response.data;
          
          } catch (error)   {
              console.log(error);
          }
    }
};

>>>>>>> d89f7c145ebd650dbd96d7214bf9e7fc84928129
module.exports = api;