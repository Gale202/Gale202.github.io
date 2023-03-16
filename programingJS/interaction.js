document.querySelector(".b_teclab").addEventListener("click", () => {
    document.querySelector(".b_iac").style.color = "black";
    document.querySelector(".b_unse").style.color = "black";
    document.querySelector(".b_egg").style.color = "black";
    document.querySelector(".b_teclab").style.color = "aliceblue";
    document.querySelector(".section_iac").style.display = "none";
    document.querySelector(".section_unse").style.display = "none";
    document.querySelector(".section_egg").style.display = "none";
    document.querySelector(".section_teclab").style.display = "flex";
    
});

document.querySelector(".b_egg").addEventListener("click", () => {
    document.querySelector(".b_iac").style.color = "black";
    document.querySelector(".b_unse").style.color = "black";
    document.querySelector(".b_egg").style.color = "aliceblue";
    document.querySelector(".b_teclab").style.color = "black";
    document.querySelector(".section_teclab").style.display = "none";
    document.querySelector(".section_iac").style.display = "none";
    document.querySelector(".section_unse").style.display = "none";
    document.querySelector(".section_egg").style.display = "flex";
});

document.querySelector(".b_unse").addEventListener("click", () => {
    document.querySelector(".b_iac").style.color = "black";
    document.querySelector(".b_unse").style.color = "aliceblue";
    document.querySelector(".b_egg").style.color = "black";
    document.querySelector(".b_teclab").style.color = "black";
    document.querySelector(".section_teclab").style.display = "none";
    document.querySelector(".section_egg").style.display = "none";
    document.querySelector(".section_iac").style.display = "none";
    document.querySelector(".section_unse").style.display = "flex";
});

document.querySelector(".b_iac").addEventListener("click", () => {
    document.querySelector(".b_iac").style.color = "aliceblue";
    document.querySelector(".b_unse").style.color = "black";
    document.querySelector(".b_egg").style.color = "black";
    document.querySelector(".b_teclab").style.color = "black";
    document.querySelector(".section_teclab").style.display = "none";
    document.querySelector(".section_unse").style.display = "none";
    document.querySelector(".section_egg").style.display = "none";
    document.querySelector(".section_iac").style.display = "flex";
});


