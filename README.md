<h1>Pet Adoption API</h1>

<p><strong>Esta é uma pequena API para adoção de pets!!!</strong></p>

<hr />

<h2>Descrição</h2>
<p>API para gerenciar usuários, pets e adoções em um sistema de adoção de animais. Possui rotas públicas para registro, login e consulta de pets disponíveis, além de rotas protegidas que exigem autenticação e autorização.</p>

<hr />

<h2>Como testar</h2>
<p>No terminal, dentro da pasta do projeto, rode os comandos:</p>
<pre><code>npm install
npm run dev
</code></pre>

<hr />

<h2>Endpoints públicos</h2>
<ul>
    <li><code>POST /users</code> — Cadastro de usuário</li>
    <li><code>POST /login</code> — Login de usuário</li>
    <li><code>GET /pets/available</code> — Lista de pets disponíveis para adoção</li>
</ul>

<hr />

<h2>Endpoints protegidos (necessitam token JWT e autorização)</h2>

<h3>Usuários (somente admin ou dono do recurso)</h3>
<ul>
    <li><code>GET /users</code> — Lista todos os usuários (admin)</li>
    <li><code>GET /users/:id</code> — Busca usuário por ID (admin ou dono)</li>
    <li><code>PUT /users/:id</code> — Atualiza usuário (admin ou dono)</li>
    <li><code>DELETE /users/:id</code> — Remove usuário (admin)</li>
</ul>

<h3>Pets (somente admin)</h3>
<ul>
    <li><code>GET /pets</code> — Lista todos os pets</li>
    <li><code>GET /pets/:id</code> — Busca pet por ID</li>
    <li><code>POST /pets</code> — Adiciona pet</li>
    <li><code>PUT /pets/:id</code> — Atualiza pet</li>
    <li><code>DELETE /pets/:id</code> — Remove pet</li>
</ul>

<h3>Adoções</h3>
<ul>
    <li><code>GET /adoptions</code> — Lista todas as adoções (admin)</li>
    <li><code>POST /adoptions</code> — Registra uma nova adoção (usuário autenticado)</li>
</ul>

<hr />

<h2>Tecnologias usadas</h2>
<ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>JWT para autenticação</li>
    <li>Middleware para autorização por perfil (admin, adopter)</li>
    <li>Banco de dados MySQL (ou outro relacional)</li>
</ul>

<hr />

<h2>Estrutura básica do código</h2>
<ul>
    <li>Rotas públicas em <code>routes/public.routes.js</code></li>
    <li>Rotas protegidas em <code>routes/protected.routes.js</code></li>
    <li>Controladores em <code>controllers/</code></li>
    <li>Middleware de autenticação/autorização em <code>middlewares/auth.middleware.js</code></li>
</ul>
