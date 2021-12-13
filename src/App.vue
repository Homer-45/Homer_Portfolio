<template>

<header-container></header-container>
<hero-container></hero-container>
<projects-container></projects-container>
<about-container></about-container>
<contact-container></contact-container>
<footer-container></footer-container>
</template>

<script>
  export default {
    data() {
      return {
        link1: 'https://github.com/Homer-45/Lesson-4---The-Monster-Slayer-Game',
        link2: 'https://github.com/Homer-45/The-Learning-source-app',
        link3: 'https://github.com/Homer-45/Find-a-coach-web-app'
      }
    },
  }
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    
    font-family:'Poppins', sans-serif;
}

#home {
    background-color: Black;
}
#projects {
    background-color: Black;
}
#about {
    background-color: Black;
}
#contact{
    background-color: Black;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 1rem 1.5rem;
    color: orange;
    font-size: 17pt;
    text-decoration: none;
    background-color: #1D428A;
    border: 5px solid rgb(0, 0, 0);
}
.list-group-flush>.list-group-item {
    border-width: 0 0 15px;
}
.button
{
	background-color: orange;
	color: black;
	padding: 1rem 2.5rem;
	font-weight: bolder;
	border-radius: .5rem;
	transition: .5s;
};
</style>