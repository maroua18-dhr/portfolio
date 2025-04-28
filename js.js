//
const menu = document.getElementById('mobile-menu'); //njibo lelement li ID t3eh 'mobile-menu' then save it in 'menu'
const navLinks = document.querySelector('.nav-links'); //njibo element class ='nav-links' (home ,about,projects ) then save it in navLinks

    menu.addEventListener('click', () => { //min ndrko 3la 'menu' ykhdm lcode li t7t
        navLinks.classList.toggle('active'); //min ndrko fl 

        const icon = menu.querySelector("i"); //njibo l 'i' li dakhel fl 'menu' then save it as icon
            icon.classList.toggle("fa-bars");//hadi bch ki ndrko fi bars ywelo X 
            icon.classList.toggle("fa-times");// hna l3aks
            //we use toggle to remove 'fa-bars' then show 'fa-times' at the same time mnb3d l3aks
    });


    const scrollTop = document.getElementById("scrollTop"); //t7ws 3la element li id ='scrollTop' (the up arrow)then save it in 'scrollTop
    window.onscroll = function() { //when we scroll up or down the page ykhdm lcode below
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { //lwla scroll amount for safari w zawja ta3 chrome/firefox/edge ,has the user scrolled down more than 300px?
            scrollTop.classList.add("show");// if the condition is true ==> tzid class 'show' f scrollTop button then make it visible 
        } else {
            scrollTop.classList.remove("show");//the button disapears
        }
    };