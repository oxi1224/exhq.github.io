var titles = [
    "i work out",
    "funny",
    "Kara Kara Kara no Kara",
    "26047",
    "Can I Friend You On Bassbook? Lol",
    "im gay",
    "cognrjatulations !!!",
    "futanari",
    "ubuntu (ew)",
    "phantoms are annoying",
    "/give @a hugs 999999",
    "please add command support vendy",
    "mrekk",
    "women fear me",
    "fish fear me",
    "men turn their eyes away from me",
    "as i walk no beast dares makes a sound",
    "i am alone in this barren earth",
    "uptown funk you up",
    "stackoverflow my beloved",
    "*thrusts into you*",
    "also what are these for?",
    "its morbing time",
    "bungling bungus",
    "rate this base.apk Architecture splits: \nconfig.arm64_v8a.apk \nconfig.armeabi_v7a.apk \nconfig.x86_64.apk \n config.x86.apk \n DPI splits: \n config.hdpi.apk \n config.xxhdpi.apk \n Language splits: \nconfig.de.apk \n config.en.apk",
    "Now explode",
    "“message logger when”",
    "A wild ⛧artificialmusik appeared.",
    "IS THAT A MOTHERUCFKCING JOJOI REFERENCE???//?",
    "Cats are not ducks",
    "just farted",
    "ReeK - Making Zurek While Getting A Flandre Fumo Shoved Up My A-",
    "what the fuck is an lsp log",
    "'ewwo evewypony",
    "also, what the fuck is a mustard",
    "727",
    "WYFSI",
    "that time i reincarnated as a toilet in another world",
    "vim >>>>>> emacs",
    "also try out archlinux.org",
    "how to print [[this, this, and, this, all, together as a single string]]?",
    "😢",
    "None.",
    "deez nuts",
    "trolley",
    
] 

document.title = titles[Math.floor(Math.random()*titles.length)];

//button bs
bool = false
var audio 
if (new Date().getMonth() === 9){
    console.log("boo")
    audio = new Audio('boo.mp3')
} else {
    audio = new Audio('for-maeve.mp3')
}
function no() {
    bool = !bool
    if(bool){
        audio.play()
    } else {
        audio.pause()
    }
  }
