import { supabase } from "../services/supabaseClient";

async function uploadImagemSupabase(file) {
  const nomeArquivo = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("imagens")
    .upload(nomeArquivo, file);

  if (error) {
    console.error("Erro upload supabase", error);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from("imagens")
    .getPublicUrl(nomeArquivo);

  return urlData.publicUrl;
}
