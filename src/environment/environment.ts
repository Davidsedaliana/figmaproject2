export const host = ' http://localhost:3000/';
export const token = 'https://reqres.in/api/login';
export const environment = {
  category: {
    get: host + 'category'
  },
  posts: {
    get: host + 'posts'
  },
  usersInfo: {
    get: host + 'usersInfo'
  },
  images:{
    get:host+'images'
  },
  contactUs:{
    get:host+'contactUs'
  },
  token:{
    get:token 
  }
}
