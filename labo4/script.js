const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        display: block;
        margin: 1rem auto;
        max-width: 720px;
        }
        h2 { margin: 0 0 .5rem 0; font-size: 1.25rem; text-align: center; }
        .cNoticia {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
        text-align: center;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 4px 12px rgba(0,0,0,.08);
        transition: transform 800ms, background-color 800ms;
        background: #fff;
        }
        .cNoticia:hover {
        transform: scale(1.03);
        background-color: blueviolet;
        color: #fff;
        }
        .iNoticia {
        width: 200px;
        max-width: 100%;
        height: auto;
        border-radius: .5rem;
        }
    </style>

    <h2><slot name="tNoticia"></slot></h2>
    <div class="cNoticia">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit quidem perferendis,
        ex libero dignissimos tempora ipsam dolores quod deserunt unde numquam natus vel odio nostrum
        commodi temporibus accusamus eos?
        </p>
        <img
        src="https://thumbs.dreamstime.com/b/mundo-logo-template-del-alambre-110256670.jpg"
        class="iNoticia"
        alt="Imagen de noticia"
        />
    </div>
`;

class TempNoticia extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }
}

class ComponenteIndividual extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const estilo = document.createElement('style');
        estilo.textContent = `
        .cParrafo { font-size: 1.5rem; color: lightgreen; }
        .cImagen { width: 200px; cursor: pointer; }
    `;

        const p = document.createElement('p');
        p.className = 'cParrafo';
        p.textContent = 'Esto es un texto de componente Individual';

        this.img = document.createElement('img');
        this.img.className = 'cImagen';
        this.img.src = 'https://images.seeklogo.com/logo-png/14/1/tool-logo-png_seeklogo-140867.png';
        this.img.alt = 'Logo';

        this.shadowRoot.append(estilo, p, this.img);
        this._onImgClick = () => this.toggleImagen();
    }

    toggleImagen() {
        this.img.hidden = !this.img.hidden;
    }

    eventoClick(mostrar) {
        this.img.hidden = !mostrar;
    }

    connectedCallback() {
        this.img.addEventListener('click', this._onImgClick);
    }

    disconnectedCallback() {
        this.img.removeEventListener('click', this._onImgClick);
    }
}

customElements.define('temp-noticia', TempNoticia);
customElements.define('temp-individual', ComponenteIndividual);