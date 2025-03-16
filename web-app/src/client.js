
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uqikxarvqsxkyoanidrn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxaWt4YXJ2cXN4a3lvYW5pZHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTE3MDAsImV4cCI6MjA1NzY4NzcwMH0.vAyjqrWOvkoUBq7KYROF2nlzNUvyGWwrxeJURd2aT4Y'
export const supabase = createClient(supabaseUrl, supabaseKey)