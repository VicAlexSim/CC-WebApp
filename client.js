import { createClient } from '@supabase/supabase-js';

const URL = 'https://ebaqaviaiguggyqbvfdo.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViYXFhdmlhaWd1Z2d5cWJ2ZmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjA2NzksImV4cCI6MjA0MDUzNjY3OX0.UgeJ-Hx2KqCBlgXGRFiAhbki2qqt8AECRW6zlAhuGp0';
export const supabase = createClient(URL, API_KEY);