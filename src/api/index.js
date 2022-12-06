import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user,'for the token');
const token = user?.token;

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
});



export const signup = (formData) => API.post("/signup", formData);
export const signin = (formData) => API.post("/signin", formData);
export const verifyOtp = (formData) =>
  API.post("/verifyotp", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const getAllUsers = () => API.get('/',{
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const followUser = (userId) => API.put(`/follow/${userId}`,{},{
  headers : {
    Authorization: `Bearer ${token}`,
  }
}) 

export const unfollowUser = (userId) => API.put(`/unfollow/${userId}`,{},{
  headers : {
    Authorization: `Bearer ${token}`,
  }
}) 


//POSTS


export const uploadPost  = (formData) =>
  API.post("/posts", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getAllPosts = () => API.get('/posts',{
  headers : {
    Authorization : `Bearer ${token}`
  }
});
export const deletePost = (postId) => API.delete(`/posts/${postId}`,{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const likePost = (postId) => API.patch('/posts/like',{postId},{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const addComment = (comment,postId) => API.post('/posts/comment',{comment,postId},{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const addExperience = (experience)=> API.post('/profile/experience',experience,{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const getProfile = (username)=> API.get(`/profile/${username}`,{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const editAbout = (about)=> API.put('/profile/about',{about},{
  headers : {
    Authorization : `Bearer ${token}`
  }
}) 

export const updateProfilePic = (imageUrl) => API.put('/profile/image',{imageUrl},{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

