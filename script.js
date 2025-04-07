document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano atual no rodapé
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Referências aos elementos do DOM
    const profileForm = document.getElementById('profileForm');
    const profileInput = document.getElementById('profile');
    const submitButton = document.getElementById('submitButton');
    const resultsContainer = document.getElementById('results');
    
    // Manipulador de evento para o envio do formulário
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const profileValue = profileInput.value.trim();
        
        if (profileValue) {
            // Desabilitar o botão e mostrar estado de carregamento
            submitButton.disabled = true;
            submitButton.textContent = 'Buscando recomendações...';
            
            // Simular tempo de processamento
            setTimeout(function() {
                // Gerar recomendações baseadas no perfil
                generateRecommendations(profileValue);
                
                // Restaurar o botão
                submitButton.disabled = false;
                submitButton.textContent = 'Receber recomendações';
            }, 1500);
        }
    });
    
    // Função para gerar recomendações baseadas no perfil
    function generateRecommendations(profile) {
        // Exemplo de resposta baseado no perfil
        const recommendations = `
            <h1>Ferramentas Recomendadas para Você</h1>
            
            <p>Com base no seu perfil: <strong>"${profile}"</strong>, selecionei estas ferramentas que podem transformar sua experiência:</p>
            
            <div class="tool-card">
                <h2 class="tool-name">Genspark</h2>
                <div class="tool-description">
                    <p><strong>Por que é útil para você:</strong> O Genspark permite criar materiais educacionais personalizados com IA, adaptando conteúdos para diferentes estilos de aprendizagem e necessidades sensoriais.</p>
                    
                    <p><strong>Exemplo prático:</strong> Você pode usar o Genspark para transformar um texto complexo em uma explicação visual com analogias concretas e linguagem simplificada, ideal para diferentes perfis de processamento.</p>
                    
                    <p><strong>Link:</strong> <a href="https://genspark.ai" target="_blank">genspark.ai</a></p>
                </div>
            </div>
            
            <div class="tool-card">
                <h2 class="tool-name">Teachable Machine</h2>
                <div class="tool-description">
                    <p><strong>Por que é útil para você:</strong> Esta ferramenta da Google permite criar modelos de reconhecimento personalizados sem programação, possibilitando desenvolver recursos de acessibilidade adaptados às necessidades específicas.</p>
                    
                    <p><strong>Exemplo prático:</strong> Você pode criar um sistema que reconhece padrões específicos, transformando-os em comandos ou respostas no computador durante atividades interativas.</p>
                    
                    <p><strong>Link:</strong> <a href="https://teachablemachine.withgoogle.com" target="_blank">teachablemachine.withgoogle.com</a></p>
                </div>
            </div>
            
            <div class="tool-card">
                <h2 class="tool-name">Gamma.app</h2>
                <div class="tool-description">
                    <p><strong>Por que é útil para você:</strong> O Gamma permite criar apresentações visualmente atraentes e interativas com ajuda de IA, facilitando a criação de materiais que capturam a atenção de diferentes perfis.</p>
                    
                    <p><strong>Exemplo prático:</strong> Você pode criar uma apresentação com elementos visuais marcantes, transições suaves e estrutura previsível, reduzindo a sobrecarga sensorial enquanto mantém o engajamento.</p>
                    
                    <p><strong>Link:</strong> <a href="https://gamma.app" target="_blank">gamma.app</a></p>
                </div>
            </div>
            
            <div class="tool-card">
                <h2 class="tool-name">Tactiq</h2>
                <div class="tool-description">
                    <p><strong>Por que é útil para você:</strong> Esta ferramenta transcreve automaticamente reuniões e vídeos, permitindo que você ofereça conteúdo em múltiplos formatos para atender diferentes necessidades de processamento.</p>
                    
                    <p><strong>Exemplo prático:</strong> Você pode gravar suas aulas e usar o Tactiq para gerar transcrições precisas, oferecendo aos alunos que processam melhor informações escritas uma alternativa ao conteúdo verbal, além de facilitar revisões e estudos posteriores.</p>
                    
                    <p><strong>Link:</strong> <a href="https://tactiq.io" target="_blank">tactiq.io</a></p>
                </div>
            </div>
            
            <hr>
            
            <p>Espero que estas ferramentas ajudem em seu contexto! Se precisar de sugestões mais específicas, estou à disposição.</p>
        `;
        
        // Atualizar o conteúdo da seção de resultados
        resultsContainer.innerHTML = recommendations;
        
        // Rolar suavemente até os resultados
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
});
