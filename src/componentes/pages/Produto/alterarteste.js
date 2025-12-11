

// const atualizarProdutoApi = async (id_produto, dadosProduto) => {
//     try {
//         const carregar ={
//             ...dadosProduto,
//             valor: parseFloat(dadosProduto.valor)     
//         }
//         const resposta = await fetch(`http://localhost:3000/produtos/atualizaProduto/${id_produto}`, {
//             method: 'PUT',
//             headers:{
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(carregar)
//         })
//         return await resposta.json();
//     } catch(erro){
//         console.log('Erro ao atualizar dados na API', erro);
//         throw erro;
//     }
// }
// const fetchProdutos = async () =>{
//     try{
//         const resposta = await fetch(`http://localhost:3000/produtos/getProdutoUsuarioTipo`);
//         const dados = await resposta.json();
//         return dados;
//     }catch(erro){
//         console.log('Erro ao buscar produto', erro);
//         throw erro;
//     }
// }


// export default function Relatorioprodutos(){
//     const [loading, setLoading] = useState(true);
//     const [erro, setErro] = useState(null);

//     const [produtos, setprodutos] = useState([]);
//     const [ProdutoEmEdicao, setProdutoEmEdicao] = useState(null);
//     const [ formDados, setFormDados] = useState({
//         id_produto: '',
//         nome_produto: '',
//         preco_produto: '',
//         descricao_produto: '',
//         imagem_produto: '',
//         id_categoria: ''
//     });
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [editErro, setEditErro] = useState(null);

//     useEffect(() =>{
//         const carregarprodutos = async() =>{
//             try{
//                 setLoading(true);
//                 setErro(null);
//                 const dados = await fetchProdutos();
//                 setprodutos(dados);
//             }catch(erro){
//                 console.log('Não foi possível carregar os produtos: ', erro);
//                 setErro('Não foi possível carregar os produtos: ' + erro);
//             }finally{
//                 setLoading(false);
//             }
//         };
//         carregarprodutos();
//     },[]);

//     const handleInputChange = (e) =>{
//         const {name, value} = e.target;
//         setFormDados(prev => ({...prev, [name]: value}));
//     }

//     const executaEditar = (Produto) => {
//         setProdutoEmEdicao(Produto);

//         setFormDados({
//             id: Produto.id_produto,
//             nome_produto: Produto.nome_produto,
//             preco_produto: Produto.preco_produto.toString(),
//             descricao_produto: Produto.descricao_produto,
//             imagem_produto: Produto.imagem_produto,
//             id_categoria: Produto.id_categoria,
//         });
//         setEditErro(null);
//     };

//     const handleSalvarEdicao = async (e) =>{
//         e.preventDefault();
//         if(!ProdutoEmEdicao) return;

//         setIsUpdating(true);
//         setEditErro(null);

//         try {
//             const carregar ={
//                 id_produto: formDados.id_produto,
//                 nome_produto: formDados.nome_produto,
//                 preco_produto: parseFloat(formDados.preco_produto),
//                 descricao_produto: formDados.descricao_produto,
//                 imagem_produto: formDados.imagem_produto,
//                 id_categoria: formDados.id_categoria,
//             }

//             const ProdutoAtualizada = await atualizarProdutoApi(ProdutoEmEdicao.id_produto, carregar);

//             setprodutos((prevprodutos) => prevprodutos.map((prod) =>
//                 prod.id === ProdutoAtualizada.id ? ProdutoAtualizada : prod
//             ));
//             setProdutoEmEdicao(null);
//             window.location.reload();//reload na página
//         } catch (erro) {
//             console.log('Erro ao salvar edição', erro);
//             setEditErro('Falha ao salvar edição' + erro);
//         }finally{
//             setIsUpdating(false);
//         }
//     }

//     const handleCancelarEdicao = () =>{
//         setShowEditModal(false);
//         setProdutoEmEdicao(null);
//         setEditErro(null);
//     }

//     if(loading){
//         return(
//             <div className="container mt-4 text-center">
//                 <div className='spinner-border text-primary ' role="status">
//                     <span className='visually-hidden'>Carregando...</span>
//                 </div>
//                 <p>Carregando produtos...</p>
//             </div>
//         )
//     }

//     if(erro){
//         return(
//             <div className="container mt-4 text-center">
//                 <div className='alert alert-danger ' role="alert">
//                     {erro}
//                 </div>
//             </div>
//         )
//     }

//     if(produtos.length === 0 && !loading){
//         return(
//             <div className='container mt-4'>
//                 <div className='alert alert-info' role='alert'>Nenhum produto encontrado</div>
//             </div>
//         )
//     }

//     return(
       

//                   <div className="mb-3">
//                     <label htmlFor="descricao" className="form-label">
//                       Descrição
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="descricao"
//                       name="descricao"
//                       value={formDados.descricao}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="valor" className="form-label">
//                       Valor (R$)
//                     </label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       step="0.01"
//                       id="valor"
//                       name="valor"
//                       value={formDados.valor}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="tipo" className="form-label">
//                       Tipo
//                     </label>
//                     <select
//                       className="form-select"
//                       id="tipo"
//                       name="tipo"
//                       value={formDados.aaaaaaaaaaaaa}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="entrada">Entrada</option>
//                       <option value="saida">Saída</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="modal-footer">
                  

//                   {/* ///////// */}
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     disabled={isUpdating}
//                   >
//                     {isUpdating ? (
//                       <>
//                         <span
//                           className="spinner-border spinner-border-sm"
//                           role="status"
//                           aria-hidden="true"
//                         ></span>
//                         Salvando...
//                       </>
//                     ) : (
//                       "Salvar Alterações"
//                     )}
//                   </button>













//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//         <Botao>
//         <Link className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/dashboard">Voltar</Link>
//         </Botao>
//         </Caixa>
       
//         </>
//     );
// }














//   // const executaExcluir = async (idProduto) =>{
//     //     if(window.confirm(`Tem certeza que deseja excluir a prodimentação ID ${idProduto}?`)){
//     //        try {
//     //          const resposta = await fetch(`http://localhost:3000/produtos/excluirProduto/${idProduto}`, {
//     //             method: 'DELETE'
//     //          });
//     //          setprodutos(produtos.filter(prod =>prod.id !== idProduto));
//     //          alert(`prodimentação ID ${idProduto} excluida com sucesso!`);
//     //        } catch (erro) {
//     //          console.error(`Erro ao excluir id ${idProduto} `, erro);
//     //          alert(`Falha ao excluir prodimentação: ${erro.message}`);
//     //        }
//     //     }
//     // }