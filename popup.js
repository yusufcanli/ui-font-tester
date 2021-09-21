function layout() {
    let fstyle = `
    <style id="fstyle">
        .f-w0y182c * { margin:0; padding:0; margin-bottom: 5px; outline:0; color: #616161;}
        #f-wc0y182c { cursor: pointer; font-size: 30px; color: #616161; position: absolute; right: 0; top: 0; margin: 0 30px 0 0; width: 0; padding: 0;}
        .f-w0y182c p {margin-bottom: 5px; font-size: 20px; text-align: center; color: #484848; margin: 30px 0px 10px 0px; clear: both;}
        .f-w0y182c select, #f-se0y182c {border: 0; background: white; border-radius: 30px; padding: 20px 10px; box-shadow: 0px 4px 13px 0px #d2d2d2; width:350px; font-size: 20px;}
        #f-b0y182c { position: fixed; left: 0; background: #0286c2; padding: 15px; border-top-right-radius: 50%; border-bottom-right-radius: 50%; top: 15%; z-index:9999 }
        .f-w0y182c { display:none;font-family: 'arial'; position: fixed; left: 0; top: 0; height:100vh; background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); padding: 20px; box-shadow: 0px 0px 14px 0px #00000085; z-index:99999;; text-align:center;}
        #f-r0y182c { padding: 10px; width: 100%; }
        #f-se0y182c { text-align: left; padding: 20px; }
        .f-w0y182c button { cursor: pointer; background: #48a0d6; color: white; border: 0; margin: 15px; border-radius: 30px; padding: 20px 10px; box-shadow: 0px 4px 13px 0px #d2d2d2; font-size: 20px; width: 100%; }
        .f-rd0y182c { display: flex; justify-content: center; align-items: center; }
        #f-ss0y182c {width:350px; background: #47bd41;}
        button:disabled { background: #b0e2ae !important; }
        #f-ssc0y182c {display:none;}
        </style>
    `;
    let svg = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">  <image id="image0" width="60" height="60" x="0" y="0"
    xlink:href="data:image/png;base64,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" />
</svg>`;
    let lay = `
    <a id="f-b0y182c" href="#">${svg}</a>
    <div class="f-w0y182c">
        <button id="f-wc0y182c">-</button>
        <div class="f-con0y182c">
            <p>Select a Font:</p>
            <select name="f-s0y182c" id="f-s0y182c">
                <option value="0" disabled selected>Select a Font</option>
            </select>
        </div>
        <div class="f-con0y182c">
        <p>Select Font-Weight</p>
        <select name="f-we0y182c" id="f-we0y182c">
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>
        </select>
        </div>
        <p>Font-Size:</p>
        <div class="f-rd0y182c">
                <input type="range" value="0" min="5" max="100" step="2" name="f-r0y182c" id="f-r0y182c"><p><p id="f-rs0y182c">15</p>px</p>
        </div>
        <p>Add Selectors (class, tag, attr, id):</p>
        <textarea value="0" id="f-se0y182c" type="text" placeholder="Divide selectors with comma"></textarea>
        <div class="f-rd0y182c">
        <button id="f-run0y182c">Run</button>
        <button id="f-re0y182c" style="background: #f34141;">Reset</button>
        </div>
        <button disabled id="f-ss0y182c">Take Styles</button>
        <p id="f-ssc0y182c">Copied to clipboard!</p>
    </div>`;
    document.querySelector('head').innerHTML += fstyle;
    document.querySelector('body').innerHTML += lay;
    document.querySelector('#f-b0y182c').addEventListener('click', () => {
        let wrp = document.querySelector('.f-w0y182c');
        if (wrp.style.display == 'block') {
            wrp.style.display = 'none';
        } else {
            get_fonts();
            wrp.style.display = 'block';
        }
    })

    document.querySelector('#f-run0y182c').addEventListener('click', () => {
        let val = document.querySelector('#f-s0y182c').value;
        let wei = document.querySelector('#f-we0y182c').value;
        let sel = document.querySelector('#f-se0y182c').value;
        if (val == "0") {
            document.querySelector('#f-s0y182c').style.background = '#ffb7b7';
        }
        if (sel == '') {
            document.querySelector('#f-se0y182c').style.background = '#ffb7b7';
        } else {
            if (document.getElementById("f-st0y182c")) {
                document.querySelector('#f-st0y182c').remove();
                let style = `${sel} {font-family: '${val}'; font-weight: ${wei} }`;
                document.querySelector('head').innerHTML += `
                <style id="f-st0y182c">
                    @import url('https://fonts.googleapis.com/css?family=${val}');
                    ${sel} {
                        font-family: '${val}';
                        font-weight: ${wei};
                    }
                </style>`;
                document.querySelector('#f-ss0y182c').removeAttribute('disabled');
            } else {
                let style = `${sel} {font-family: '${val}'; font-weight: ${wei} }`;
                document.querySelector('head').innerHTML += `
                <style id="f-st0y182c">
                    @import url('https://fonts.googleapis.com/css?family=${val}');
                    ${sel} {
                        font-family: '${val}';
                        font-weight: ${wei};
                    }
                </style>`;
                document.querySelector('#f-ss0y182c').removeAttribute('disabled');
                document.querySelector('#f-ssc0y182c').style.display = 'none';
            }
        }
    })

    document.querySelector('#f-r0y182c').addEventListener('change', () => {
        let rng = document.querySelector('#f-r0y182c').value;
        document.querySelector('#f-rs0y182c').innerHTML = rng;
        let sel = document.querySelector('#f-se0y182c').value;
        if (document.getElementById("f-st0y182c")) {
            document.getElementById("f-st0y182c").innerHTML += `${sel} {font-size: ${rng}px; }`;
        }
    })

    document.querySelector('#f-wc0y182c').addEventListener('click', () => {
        document.querySelector('.f-w0y182c').style.display = 'none';
    })
    document.querySelector('#f-re0y182c').addEventListener('click', () => {
        if (document.querySelector('#f-st0y182c')) {
            document.querySelector('#f-st0y182c').remove();
        }
        document.querySelector('#f-ss0y182c').setAttribute('disabled', 'true');
        document.querySelector('#f-ssc0y182c').style.display = 'none';
    })
    document.querySelector('#f-ss0y182c').addEventListener('click', () => {
        let ct = document.querySelector('#f-st0y182c');
        let ta = document.createElement("textarea");
        ta.value = ct.textContent;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("Copy");
        ta.remove();
        document.querySelector('#f-ssc0y182c').style.display = 'block';
    })
}

function get_fonts() {
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBEmwZRL4xqXCihLopFRrEgc-HzskXHuK4')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let html = '';
            let i = 0;
            Object.keys(data.items).forEach(function (font) {
                html += `<option value="${data.items[i].family}">${data.items[i].family}</option>`;
                i++;
            })
            document.querySelector('#f-s0y182c').innerHTML += html;
        })
}

layout();