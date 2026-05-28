'use server'

import { redirect } from 'next/navigation'
import { createClient } from '../lib/server'

/* =========================================================
   STARTUP SIGNUP
========================================================= */

export async function signupStartup(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('fullName') as string
  const startupName = formData.get('startupName') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Create auth user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
     throw new Error(error.message)
  }

  const user = data.user

  if (!user) {
     throw new Error("user not created")
  }

  // Create profile
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      full_name: fullName,
      role: 'startup',
    })

  if (profileError) {
    throw new Error(profileError.message)
    
  }

  // Create startup
  const { data: startup, error: startupError } = await supabase
    .from('startups')
    .insert({
      founder_id: user.id,
      startup_name: startupName,
    })
    .select()
    .single()

  if (startupError) {
       throw new Error(startupError.message)
  }

  // Add founder as startup member
  await supabase
    .from('startup_members')
    .insert({
      startup_id: startup.id,
      user_id: user.id,
      role: 'Founder',
    })

  redirect('/startup')
}

/* =========================================================
   INDIVIDUAL SIGNUP
========================================================= */

export async function signupIndividual(formData: FormData) {
  const supabase = await createClient()

  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Create auth user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
     throw new Error(error.message)
  }

  const user = data.user

  if (!user) {
     throw new Error("user not created")
  }

  // Create profile
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      full_name: fullName,
      role: 'individual',
      xp: 0,
      level: 1,
    })

  if (profileError) {
    throw new Error(profileError.message)
  }

  redirect('/individual')
}

/* =========================================================
   LOGIN
========================================================= */

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    })

  if (error) {
    throw new Error(error.message)
  }

  const user = data.user

  // Get profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Redirect based on role
  if (profile.role === 'startup') {
    redirect('/startup')
  }

  if (profile.role === 'individual') {
    redirect('/individual')
  }

  redirect('/')
}

/* =========================================================
   LOGOUT
========================================================= */

export async function logout() {
  const supabase = await createClient()

  await supabase.auth.signOut()

  redirect('/')
}
