import { createClient } from "@supabase/supabase-js";

const projectUrl = "";
const secretKey = "";

export const supabase = createClient(projectUrl, secretKey);
