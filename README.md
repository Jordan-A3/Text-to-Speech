# Text-to-Speech

  <h1 align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/270px-IBM_logo.svg.png" alt="Minha Figura">
  </h1>
  
  <p align="center">
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
  </p>
  
  <h2><g-emoji alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">💻</g-emoji> Projeto</h2>
  <p> Consiste em uma página web onde o usuario pode fazer um comentario, e pode escutar a leitura desse comentário. </p>
  
  <h2><g-emoji alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Tecnologias</h2>
  <ul>
    <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
    <li><a href="https://reactjs.org" target="_blank">React</a></li>
    <li><a href="https://www.ibm.com/br-pt/cloud/watson-text-to-speech" target="_blank">Watson Text to Speech (TTS)</a></li>
   </ul>
   
   <h2>Clonando o Repositório </h2>
   <pre><code>
    git clone https://github.com/NanyA3/Text-to-Speech.git
    cd Text-to-Speech/server
    npm install
   </code></pre>
   
   <h2>Api: Watson</h2>
   <p>Você precisa criar também as credenciais do 
    <em>Watson</em> 
    no site da 
    <a href="https://cloud.ibm.com/login" rel="nofollow">IBM</a>
    , também não tem segredo, basta se cadastrar, quando estiver logado no menu superior clique em 
    <strong>Catálogo</strong>
    , depois
    procure por 
    <em>Text to Speech</em>
   </p>
   
   <p>clicando nele na nova página vai aparecer um botão "criar" no final da página, uma vez que o serviço for criado, você será redirecionado para a página de                 gerenciamento do serviço que você acabou de criar, no menu lateral esquerdo procure por 
    <strong>Credenciais de Serviços</strong>
    e depois clique em 
    <strong>Auto-generated service credentials</strong>
    destacado abaixo, então copie as 
    <em>Credenciais</em>:
   </p>
   
   <p>Crie uma nova pasta com o nome credencials e dentro dela um arquivo chamado
    <code>watson-nlu.json</code> 
    e dentro desse arquivo você vai colar as credenciais que copiou anteriormente:
   </p>
   
 <pre><span class="pl-kos">{</span>
  <span class="pl-s">"apikey"</span> : <span class="pl-s">"..."</span><span class="pl-kos">,</span>
  <span class="pl-s">"iam_apikey_description"</span> : <span class="pl-s">"..."</span><span class="pl-kos">,</span>
  <span class="pl-s">"iam_apikey_name"</span>: <span class="pl-s">"..."</span><span class="pl-kos">,</span>
  <span class="pl-s">"iam_role_crn"</span>: <span class="pl-s">"..."</span><span class="pl-kos">,</span>
  <span class="pl-s">"iam_serviceid_crn"</span>: <span class="pl-s">"..."</span><span class="pl-kos">,</span>
  <span class="pl-s">"url"</span>: <span class="pl-s">"..."</span>
 <span class="pl-kos">}</span></pre></pre>
 
 <h2>Testando</h2>
 <p>Dentro da pasta <strong>Text-to-Speech/server</strong> você pode abrir o <strong>cmd</strong> ou <strong>powershell</strong> e executar o comando:</p>
 <pre><code>node src/server.js</code></pre>
 <p>Agora com o terminal anterior ainda rodando, abra outro terminal dentro da pasta <strong>Text-to-Speech/frontend</strong> e execute o comando:</p>
 <pre><code>yarn start</code></pre>
 ou
 <pre><code>npm start</code></pre>
 
 O servidor estará rodando na porta 3000.
 
 
 
 
