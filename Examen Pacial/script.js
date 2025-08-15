(function() {
    const logo = document.getElementById("logo");
    const title = document.getElementById("title");
    const baseTitle = title.textContent;
    const today = () => new Date().toLocaleDateString("es-ES");
    const toggle = () => {
        const regexDate = /\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if (regexDate.test(title.textContent.trim())) {
            title.textContent = baseTitle;
        } else {
            title.textContent = `${today()}`;
        }
    };
    if (logo) logo.addEventListener("click", toggle);
})();