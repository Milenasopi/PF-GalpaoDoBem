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

export async function uploadImagemSupabase(file) {
  try {
    if (!file) {
      throw new Error("Nenhum arquivo enviado");
    }

    // Gera um nome único
    const filename = `${Date.now()}-${file.name}`;

    // 1) Faz upload
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("GalpaoDoBem")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Erro no upload:", uploadError);
      throw uploadError;
    }

    // 2) Gera URL pública
    const { data: publicUrlData } = supabase.storage
      .from("GalpaoDoBem")
      .getPublicUrl(filename);

    return {
      url: publicUrlData.publicUrl, // <-- URL final sem token
      path: uploadData.path,
    };
  } catch (error) {
    console.error("Erro geral upload:", error);
    throw error;
  }
}

export default uploadImagemSupabase;
