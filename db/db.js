import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
})






export const query = async (text, params) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log('executed query', { text, duration, rows: res.rowCount })
  return res
}
 
export const getClient = () => {
  return pool.connect()
}