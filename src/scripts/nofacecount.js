const onclickevent = () => {
    ding.currentTime = 0;
    ding.play();
    nofacecount++;
    document.getElementById("displaycount").textContent = nofacecount;
}

let nofacecount = 0;
const nofacebuttonpush = document.getElementById("nofacebutton");
const ding = new Audio("/assets/otologic-ding04-short.opus");
ding.currentTime = 0;
nofacebuttonpush.addEventListener("click", () => {
    onclickevent();
})
