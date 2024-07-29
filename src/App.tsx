function App() {


  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc--300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc--300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc--300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700] mx-auto pt-16 prose prose-emerald ">
            <article>
              
              <p>Este é um exemplo básico para testar o plugin de tipografia do Tailwind CSS. A tipografia é essencial para uma boa experiência de leitura, e o Tailwind oferece várias utilidades para estilizar textos de maneira eficaz.</p>

              <h2>Cabeçalhos e Parágrafos</h2>
              <p>O Tailwind CSS permite estilizar diferentes níveis de cabeçalhos, desde <code>&lt;h1&gt;</code> até <code>&lt;h6&gt;</code>. Abaixo estão alguns exemplos:</p>
              <h3>Este é um cabeçalho H3</h3>
              <p>Este é um parágrafo simples. O Tailwind fornece classes para ajustar o espaçamento, tamanho da fonte, cor e muito mais. Por exemplo, você pode usar <code>text-lg</code> para aumentar o tamanho da fonte ou <code>text-gray-700</code> para alterar a cor do texto.</p>
              <h4>Este é um cabeçalho H4</h4>
              <p>Além disso, você pode adicionar <code>font-bold</code> para tornar o texto negrito ou <code>italic</code> para texto em itálico.</p>

              <p>Entre no link e verifica as novidades do tailwind <a href="https://google.com">tailwind.com.br</a></p>
              <h2>Listas</h2>
              <p>Listas ordenadas e não ordenadas também são suportadas:</p>
              <h3>Lista Ordenada</h3>
              <ol>
                <li>Primeiro item da lista</li>
                <li>Segundo item da lista</li>
                <li>Terceiro item da lista</li>
              </ol>
              <h3>Lista Não Ordenada</h3>
              <ul>
                <li>Primeiro item da lista</li>
                <li>Segundo item da lista</li>
                <li>Terceiro item da lista</li>
              </ul>

              <h2>Blocos de Citação</h2>
              <blockquote>
                <p>"A simplicidade é a sofisticação máxima." - Leonardo da Vinci</p>
              </blockquote>

              <h2>Links</h2>
              <p>Para mais informações sobre o Tailwind CSS, visite o <a href="https://tailwindcss.com" target="_blank" class="text-blue-600 hover:underline">site oficial do Tailwind CSS</a>.</p>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
