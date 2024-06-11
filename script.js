const htmlInput = document.getElementById("html-input");
      const cssInput = document.getElementById("css-input");
      const jsInput = document.getElementById("js-input");
      const output = document.getElementById("output");

      const run = () => {
        const html = htmlInput.value;
        const css = `<style>${cssInput.value}</style>`;
        const js = `<script>${jsInput.value}<\/script>`;
        const source = `${html}${css}${js}`;
        output.contentDocument.body.innerHTML = source;
        output.contentWindow.eval(jsInput.value);
      };

      const saveToLocalStorage = () => {
        localStorage.setItem("html", htmlInput.value);
        localStorage.setItem("css", cssInput.value);
        localStorage.setItem("js", jsInput.value);
      };

      const loadFromLocalStorage = () => {
        const html = localStorage.getItem("html");
        const css = localStorage.getItem("css");
        const js = localStorage.getItem("js");

        if (html) htmlInput.value = html;
        if (css) cssInput.value = css;
        if (js) jsInput.value = js;

        run();
      };

      htmlInput.onkeyup = () => {
        run();
        saveToLocalStorage();
      };
      cssInput.onkeyup = () => {
        run();
        saveToLocalStorage();
      };
      jsInput.onkeyup = () => {
        run();
        saveToLocalStorage();
      };

      window.onload = loadFromLocalStorage;