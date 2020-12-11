// Id's boton hamburguesa
var btnBurger = document.getElementById("btnBurger");
var menuOptions = document.getElementById("menuOptions");
var countNewElemnt = 0;

btnBurger.addEventListener("click", function () {
    menuOptions.classList.toggle("hidden");
});

const copyShortLink = (shortLink, idBtn) => {
    let el = document.createElement('input');
    
    el.value = shortLink;
    
    el.setAttribute('readonly', '');
    el.style = { display: 'none' };
    
    document.body.appendChild(el);
    
    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
    document.getElementById(`${idBtn}elm`).innerText = 'Copied!';
    document.getElementById(`${idBtn}elm`).style.cssText = "background-color: hsl(260, 8%, 14%);"
}

const addShortLinkResult = (resLinks, inputLink) => {
    countNewElemnt++;

    let idBtnCopy = 'btnCopyLink'+countNewElemnt;
    let original_link = resLinks.original_link;
    let full_short_link2 = resLinks.full_short_link2;

    inputLink.value = '';
    
    const div = document.createElement('div');

    div.className = 'card_links';

    div.innerHTML = `
    <div class="card_links_content">
        <div class="card_links_original">
            <p>${original_link}</p>
        </div>
        <div class="card_links_short">
            <p>${full_short_link2}</p>
        </div>
        <div 
            class="card_links_btn" 
            id="${idBtnCopy}"
        >
            <button id="${idBtnCopy}elm">Copy</button>
        </div>
    </div>
    `;

    document.getElementById('contentResult').appendChild(div);
    document.getElementById(idBtnCopy).setAttribute('onClick',`copyShortLink('${full_short_link2}', '${idBtnCopy}')`);
};

// shorten link
var URL_BASE = 'https://api.shrtco.de/v2'
var inptShorten = document.getElementById('inptShorten');
var btnShorten = document.getElementById('btnShorten');

btnShorten.addEventListener('click', () => {
    console.log(inptShorten.value)
    let link = inptShorten.value;

    if(link === '' || link == null){
            document.getElementById("inptShorten").style.color = 'hsl(0, 73%, 89%)';
            document.getElementById("inptShorten").style.border = '3px solid hsl(0, 87%, 67%)';
    } 
    
    else {
            document.getElementById("inptShorten").style.color = 'hsl(0, 3%, 69%)';
            document.getElementById("inptShorten").style.border = '0px solid #FFFFFF';
    }

    if (!link) {
        var error = document.getElementById('mensajeError');
        error.style.display = 'block';
        return false;
    }

    var error = document.getElementById('mensajeError');
    error.style.display = 'none';

    fetch(`${URL_BASE}/shorten?url=${link}`, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => addShortLinkResult(data.result, inptShorten));
});