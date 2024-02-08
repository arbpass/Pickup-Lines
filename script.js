let allLines= ["Aside from being sexy, what do you do for a living?", "Is your name Google? Because you have everything I’ve been searching for.", "Was your father an alien? Because there’s nothing else like you on Earth!", "You don’t need keys to drive me crazy.", "Are you a keyboard? Because you’re just my type.", "If I could rearrange the alphabet, I’d put ‘I’ and ‘U’ together.", "Can I borrow a kiss? I swear I’ll give it back", "Do you know what would look really good on you? Me.", "I don’t need Instagram, I’m already following you.", "Know what’s on the menu? Me ‘n’ u.", "Your lips look lonely. Let me introduce them to mine", "I’m going to give you a kiss. If you don’t like it, just return it.", "Your hand looks heavy can I hold it for you?", "I’m lost. Can you give me directions to your heart?", "Is your dad a terrorist? Cause you’re the bomb.", "Are you a loan? 'Cause you've got my interest!", "I'm good at algebra; I can replace your X and you wouldn't need to figure out Y", "If I had to rate you from 1 to 10, I'd give you a 9, because I'm the 1 you're missing.", "Are your parents bakers? Because you're a cutie pie!", "What’s your name? Or can I call you mine?", "“Hey, my name’s Microsoft. Can I crash at your place tonight?”"];


let randomNo= Math.floor(Math.random() * 20);
let lines= document.getElementById("lines");
let picbox= document.getElementById("picbox");

lines.innerText= allLines[randomNo];
picbox.innerHTML= `<img id='pic' src='img/${randomNo}.jpg'/>`;
console.log(randomNo);
