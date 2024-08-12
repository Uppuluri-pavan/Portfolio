
window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");

    /*-------------Page loader-------------*/

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
});

/*----------------Toggle Navbar-------------------*/
const navToggler = document.querySelector(".nav-toggle");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    const activeSection = document.querySelector("section.active");
    if (activeSection) {
        activeSection.classList.toggle("fade-out");
    }
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/*--------------------Active Section-----------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        
        // Deactivate the current active section
        const currentActiveSection = document.querySelector("section.active");
        if (currentActiveSection) {
            currentActiveSection.classList.remove("active", "fade-out");
        }

        // Activate the clicked section
        const targetSection = document.querySelector(e.target.hash);
        if (targetSection) {
            targetSection.classList.add("active");
            targetSection.scrollIntoView({ behavior: 'smooth' });

        }

        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        
        setTimeout(() => {
            document.body.classList.remove("hide-scrolling");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});



/*--------------------About Tabs-------------------- */

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


/*--------------------portifolio items popup------------------ */

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortifolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);

        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortifolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");

}
document.querySelector(".pp-close").addEventListener("click", togglePortifolioPopup);


// hide popup when clicking outside of it

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortifolioPopup();
    } 
});

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}



