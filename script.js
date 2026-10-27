/* ==========================================================================
   PROJETO L'ESSENCE ROYALE - INTERAÇÕES EM JAVASCRIPT (script.js)
   Responsável: João Victor (Gestor de Conteúdo e JavaScript)
   ========================================================================== */

// 1. Gerenciamento do Carrinho de Compras (Salvo no navegador pelo sessionStorage)
let itensCarrinho = JSON.parse(sessionStorage.getItem('carrinhoPerfumes')) || [];

function atualizarContadorTopo() {
    const elementoContador = document.getElementById('contador-carrinho');
    if (elementoContador) {
        elementoContador.textContent = itensCarrinho.length;
    }
}

function adicionarAoCarrinho(nomePerfume, precoPerfume) {
    itensCarrinho.push({ nome: nomePerfume, preco: precoPerfume });
    sessionStorage.setItem('carrinhoPerfumes', JSON.stringify(itensCarrinho));
    atualizarContadorTopo();

    alert(`✅ "${nomePerfume}" (R$ ${precoPerfume.toFixed(2)}) foi adicionado ao seu carrinho!`);
}

function mostrarResumoCarrinho() {
    if (itensCarrinho.length === 0) {
        alert("🛒 Seu carrinho está vazio no momento. Explore nosso catálogo de perfumes importados!");
        return;
    }

    let listaTexto = "🛒 ITENS NO SEU CARRINHO:\n\n";
    let total = 0;

    itensCarrinho.forEach((item, index) => {
        listaTexto += `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        total += item.preco;
    });

    listaTexto += `\n💰 Total do Pedido: R$ ${total.toFixed(2)}`;
    alert(listaTexto);
}

// 2. Filtro Dinâmico na Página de Catálogo
function filtrarCatalogo(categoriaEscolhida, botaoClicado) {
    const secoes = document.querySelectorAll('.bloco-categoria');
    const botoes = document.querySelectorAll('.btn-filtro');

    // Atualiza o estilo do botão ativo
    botoes.forEach(btn => btn.classList.remove('ativo'));
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }

    // Exibe ou oculta as categorias
    secoes.forEach(secao => {
        const categoriaSecao = secao.getAttribute('data-categoria');
        if (categoriaEscolhida === 'todos' || categoriaSecao === categoriaEscolhida) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
}

// 3. Consultor Olfativo Interativo na Página de Notícias
function recomendarPerfume(ocasiao) {
    const caixaResultado = document.getElementById('resultado-recomendacao');
    if (!caixaResultado) return;

    if (ocasiao === 'dia') {
        caixaResultado.innerHTML = "🍋 <strong>Recomendação para o Dia/Calor:</strong> <em>L'Eau d'Issey Pour Homme (Issey Miyake)</em> ou <em>Fakhar Lattafa</em>. As notas cítricas de Yuzu, maçã verde e bergamota trazem frescor revigorante sem pesar no calor!";
    } else if (ocasiao === 'noite') {
        caixaResultado.innerHTML = "🔥 <strong>Recomendação para a Noite/Frio:</strong> <em>Lattafa Asad</em> ou <em>Good Girl (Carolina Herrera)</em>. Notas intensas de especiarias, baunilha, café e âmbar garantem alta projeção e rastro marcante.";
    } else if (ocasiao === 'elegante') {
        caixaResultado.innerHTML = "✨ <strong>Recomendação para Eventos Formais:</strong> <em>Bleu de Chanel EDP</em> ou <em>YSL Libre</em>. Fragrâncias sofisticadas com fundo amadeirado e floral nobre que transmitem autoridade e elegância.";
    }
}

// 4. Validação e Envio do Formulário de Contato
function enviarFormularioContato(evento) {
    evento.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById('nome').value;
    const assunto = document.getElementById('assunto').value;
    const caixaFeedback = document.getElementById('feedback-contato');

    if (caixaFeedback) {
        caixaFeedback.style.display = 'block';
        caixaFeedback.textContent = `✔ Obrigado, ${nome}! Sua mensagem sobre "${assunto}" foi recebida com sucesso pela equipe L'Essence Royale.`;
    }

    document.getElementById('form-contato').reset();
}

// Inicia o contador assim que a página carrega
document.addEventListener('DOMContentLoaded', atualizarContadorTopo);
