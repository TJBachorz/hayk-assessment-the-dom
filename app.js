// const header = document.getElementsByTagName('h1')
// header.textContent = "HACKED!"

// console.log(header)


// Change header to "HACKED!"
const header = document.querySelector('h1');
header.textContent = "HACKED!";


// change href links

const links = document.querySelectorAll('a');
// links.map(element => element.href = "https://thebadguys.com");  <-- why doesnt this work?
// for (let e of links) {e.href = "https://thebadguys.com"} <-- works
links.forEach(link => link.href= "https://thebadguys.com");

// add image to start of body

//create 
const section = document.createElement('img');
//manipulate
section.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png";
//append
document.body.prepend(section);


// delete main children

//-- isolates main children p tags
const main = document.querySelectorAll('main > p')
//-- forEach one remove it.
main.forEach(element => element.remove());

// Add <p> tag to body (append)
const warning = document.createElement('p')
warning.textContent = "Your account has been compromised."
document.body.append(warning)

// change days to 0
const days = document.querySelector('main > div > p > span')
days.textContent = "0"


