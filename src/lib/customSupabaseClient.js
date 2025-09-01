import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ilgxqdnvxresxgnqkcmg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3hxZG52eHJlc3hnbnFrY21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTAxMzMsImV4cCI6MjA2MjcyNjEzM30.fQ-pvwNj-qSh1CAnx7XDxm9YL1vpLi-VGtlWiudt4jw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);