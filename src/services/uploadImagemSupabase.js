import { supabase } from "../services/supabaseClient";

// async function uploadImagemSupabase(file) {
//   alert('uploadImagemSupabase');
//   alert('file:', file);
//   const nomeArquivo = `${Date.now()}-${file.name}`;

//   const { data, error } = await supabase.storage
//     .from("GalpaoDoBem")
//     .upload(nomeArquivo, file);

//   if (error) {
//     console.error("Erro upload supabase", error);
//     alert('erro',error);
//     return null;
//   }

//   const { data: urlData } = supabase.storage
//     .from("GalpaoDoBem")
//     .getPublicUrl(nomeArquivo);

//   return urlData.publicUrl;
// }

// export default uploadImagemSupabase;

async function uploadImagemSupabase(file) {
  const nomeArquivo = `${Date.now()}-${file.name}`;

  // Upload da imagem
  const { error } = await supabase.storage
    .from("GalpaoDoBem")
    .upload(nomeArquivo, file);

  if (error) {
    console.error("Erro upload supabase:", error);
    return null;
  }

  // Gerar URL assinada (token)
  const { data: signedUrlData, error: signedUrlError } = await supabase.storage
    .from("GalpaoDoBem")
    .createSignedUrl(nomeArquivo, 60 * 60 * 24 * 365); // 1 ano

  if (signedUrlError) {
    console.error("Erro gerar token:", signedUrlError);
    return null;
  }

  // Retorna apenas a URL + token
  return signedUrlData.signedUrl;
}

export default uploadImagemSupabase;
