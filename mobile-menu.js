const OpenMenuButton = document.getElementById("OpenMenuButton");
const CloseMenuButton = document.getElementById("CloseMenuButton");
const MobileMenus = document.getElementById("MobileMenus");

function FunctionToShowMobileMenu(ClassListMethod){
    MobileMenus.classList[ClassListMethod]("show-mobile-menus");
    if (MobileMenus.classList.contains("show-mobile-menus")){
        OpenMenuButton.style.display = "none";
        CloseMenuButton.style.display = "block";
        document.documentElement.style.overflow = "hidden";
    }else{
        OpenMenuButton.style.display = "block";
        CloseMenuButton.style.display = "none";
        document.documentElement.style.overflow = "visible";

    }
}

OpenMenuButton.addEventListener("click", () => {
    FunctionToShowMobileMenu("add")
})

CloseMenuButton.addEventListener("click", () => {
    FunctionToShowMobileMenu("remove")
})
