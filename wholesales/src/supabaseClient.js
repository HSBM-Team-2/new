// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zqqzpfxqiwfbsfvfuqcu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcXpwZnhxaXdmYnNmdmZ1cWN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NDk5MjAsImV4cCI6MjA0NDAyNTkyMH0.PpEdYx7YLFlwrBd0wchRJiYqzwy2W5z95157PrFf39s';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;