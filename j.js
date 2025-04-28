function verificarResposta(id, respostaCorreta) {
      const resposta = document.getElementById(id).value.trim().toLowerCase();
      const feedback = document.getElementById("feedback" + id.slice(-1));

      if (resposta.includes(respostaCorreta)) {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Errado, estude mais.";
        feedback.style.color = "red";
      }
    }

    window.addEventListener('scroll', () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        if (posicao < alturaTela - 100) {
          el.classList.add('aparecer');
        }
      });
    });


function calcular() {
      const inputA = document.getElementById("conjuntoA").value;
      const inputB = document.getElementById("conjuntoB").value;

      let A = new Set(inputA.split(",").map(e => e.trim()));
      let B = new Set(inputB.split(",").map(e => e.trim()));

      const uniao = new Set([...A, ...B]);
      const intersecao = new Set([...A].filter(x => B.has(x)));
      const diferencaAB = new Set([...A].filter(x => !B.has(x)));
      const diferencaBA = new Set([...B].filter(x => !A.has(x)));
      const ehSubconjunto = [...A].every(x => B.has(x));

      const resultadoHTML = `
        <p><strong>União (A ∪ B):</strong> { ${[...uniao].join(", ")} }</p>
        <p><strong>Interseção (A ∩ B):</strong> { ${[...intersecao].join(", ")} }</p>
        <p><strong>Diferença (A - B):</strong> { ${[...diferencaAB].join(", ")} }</p>
        <p><strong>Diferença (B - A):</strong> { ${[...diferencaBA].join(", ")} }</p>
        <p><strong>A é subconjunto de B?</strong> ${ehSubconjunto ? "Sim" : "Não"}</p>
      `;

      document.getElementById("resultado").innerHTML = resultadoHTML;
    }