let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["I am ThinkBot.. Daniel's personal AI assistant, He assigned me to help in the website."];
let help = ["How may I assist you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["sure thing"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let made = ['This website was made by Daniel Thomas a 14 year old kid. He even created me.']
let ok = ['So I guess we are done.']
let admission = ['Hey all the details related to you childs admission is in our official website  http://iipsr.edu.sa/ ']
let hello = ['Hey there! I am ThinkBot. May I know if I can be of any assistance.']
let about = ['Everything that there is to know about the school is on our official website. Please browse through.']
let ap = ['Yes the school is great for your kid. Browse through our features on the homepage.']
let gb = ['There is a seperate girls and boys section in our school starting from 4th grade.']
let st = ['The strength of each class is from 20-24 students.']
let time = ['For Kindergarden section, the school timings are from 6:30-10:45 and for above sections, the timings are from 6:30-12:45.']
let sy = ['Our school follows CBSE Syllabus.']
let gm = ['Good Morning!']
let ga = ['Good Afternoon!']
let ge = ['Good Evening']
let gn = ['Good Night!']
let tr = ['Yes we have school buses, that can pick your ward to school or drop him home or even both. For further clarification, please visit our official site http://iipsr.edu.sa/ ']
let bye = ['Bye! See you soon.']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I am unable to help with that. You may visit http://iipsr.edu.sa/ for your clarification";
   
   
   
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes( 'can you help me')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('tell me something about you' || 'tell me something about your hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('original')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
        window.open('http://iipsr.edu.sa/');
    }

    if(message.includes('made')){
        let finalresult = made[Math.floor(Math.random() * made.length)];
        speech.text = finalresult;
    }

    if(message.includes('ok')){
        let finalresult = ok[Math.floor(Math.random() * ok.length)];
        speech.text = finalresult;
    }

    if(message.includes('hello')){
        let finalresult = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalresult;
    }

    if(message.includes('admission')){
        let finalresult = admission[Math.floor(Math.random() * admission.length)];
        speech.text = finalresult;
    }

    if(message.includes('about')){
        let finalresult = about[Math.floor(Math.random() * about.length)];
        speech.text = finalresult;
        window.open('http://iipsr.edu.sa/');
    }

    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('strength')){
        let finalresult = st[Math.floor(Math.random() * st.length)];
        speech.text = finalresult;
    }

    if(message.includes('good for')){
        let finalresult = ap[Math.floor(Math.random() * ap.length)];
        speech.text = finalresult;
    }

    if(message.includes('timings')){
        let finalresult = time[Math.floor(Math.random() * time.length)];
        speech.text = finalresult;
    }

    
    if(message.includes('start')){
        let finalresult = time[Math.floor(Math.random() * time.length)];
        speech.text = finalresult;
    }

    if(message.includes('end')){
        let finalresult = time[Math.floor(Math.random() * time.length)];
        speech.text = finalresult;
    }

    if(message.includes('syllabus')){
        let finalresult = sy[Math.floor(Math.random() * sy.length)];
        speech.text = finalresult;
    }

    if(message.includes('girls and boys' || 'boys and girls' )){
        let finalresult = gb[Math.floor(Math.random() * gb.length)];
        speech.text = finalresult;
    }


    if(message.includes('good morning')){
        let finalresult = gm[Math.floor(Math.random() * gm.length)];
        speech.text = finalresult;
    }

    if(message.includes('good afternoon')){
        let finalresult = ga[Math.floor(Math.random() * ga.length)];
        speech.text = finalresult;
    }


    if(message.includes('good evening')){
        let finalresult = ge[Math.floor(Math.random() * ge.length)];
        speech.text = finalresult;
    }

    if(message.includes('good night')){
        let finalresult = gn[Math.floor(Math.random() * gn.length)];
        speech.text = finalresult;
    }

    if(message.includes('transportation')){
        let finalresult = tr[Math.floor(Math.random() * tr.length)];
        speech.text = finalresult;
    }

    
    if(message.includes('bus')){
        let finalresult = tr[Math.floor(Math.random() * tr.length)];
        speech.text = finalresult;
    }


    if(message.includes('buses')){
        let finalresult = tr[Math.floor(Math.random() * tr.length)];
        speech.text = finalresult;
    }


    if(message.includes('bye')){
        let finalresult = bye[Math.floor(Math.random() * bye.length)];
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})


