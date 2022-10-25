
let main = document.createElement('h1');
    main.className = 'heading';
    main.innerText = 'About Me';
let divMain= document.querySelector('.frame');
    divMain.className = 'frame';
    divMain.appendChild(main)

let img = document.querySelector('img');
let imgValue=  img.getAttribute('src');
    img.setAttribute('src', "images/sarahh.jpg");
let divImg= document.querySelector('.frame');
    divImg.appendChild(img)

let para = document.createElement('p')
    para.className = 'aboutme';  
    para.innerHTML = `Hi, my name is Sarah Oluwasami, I live in Osogbo, Osun State with my family. <br>
    A family of five, I'm the second child of my parents and the shortest(5.0) in my family.<br> 
    Also an undergraduate student currently studying in Redeemer's University, Ede, Osun State in the Facaulty of Medical Sciences, <br>Department of Physiology. <br> I'm in my third year for my bachelor's degree, presently participating in my SIWES at Uniosun Teaching Hospital, Osogbo, Osun State.<br>
    My goal is to be a Medical Liason Officer in UK which requires a lot of skills and certifications.<br></b></p>
    <p><b>I'm into dropshipping as a side hustle but I just started so, I'm still struggling financially. <br>
    I'm learning <i>fashion designing, programming, how to conduct ECG test and how to interpret an ECG tracing.</i></b>`;
let elemBody = document.querySelector('.frame');
    elemBody.appendChild(para);
