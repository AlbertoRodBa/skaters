import * as db from '../db/db.js'

// Obtener todos los skaters
export const getSkaters = async () => {
  const text = "SELECT * FROM skaters"
  const result = await db.query(text)

  return result
}

// Obtener un skater por su correo electrónico
export const getSkater = async(data) => {
  const { email } = data
  const text = "SELECT * FROM skaters WHERE email = $1"
  const values = [email]

  const result = await db.query(text, values)
  return result
}

// Crear un nuevo skater
export const createSkater = async (data) => {
  const { email, nombre, password, anos_experiencia, especialidad, foto } = data // desestructuración
  const text = "INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7)"
  const values = [
    email,
    nombre,
    password,
    anos_experiencia,
    especialidad, 
    foto,
    false  // El estado por defecto al crear es falso
  ]

  const result = await db.query(text, values)
  return result
}

// Actualizar los datos de un skater
export const updateSkater = async (data) => {
  const { email, nombre, password, anos_experiencia, especialidad, estado } = data

  const text = "UPDATE skaters SET nombre = $1, password = $2, anos_experiencia = $3, especialidad = $4, estado = $5 WHERE email = $6 RETURNING *"
  const values = [nombre, password, anos_experiencia, especialidad, estado, email]

  const result = await db.query(text, values)

  return result
}

// Eliminar un skater por su correo
export const deleteStaker = async (data) => {
  const { email } = data

  const text = 'DELETE FROM skaters WHERE email = $1'
  const values = [email]

  const result = await db.query(text, values)

  return result
}

// Actualizar estado de un skater por su id
export const updateSkaterStatus = async (data) => {
  const { estado, id } = data
  const text = 'UPDATE skaters SET estado = $1 WHERE id = $2'
  const values = [estado, id]

  const result = await db.query(text, values)
  return result
}
