import jwt from 'jsonwebtoken';

export const Authorization = async (req, res, next) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(401).render("home"); 
    }
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Pasar el token decodificado al próximo middleware
    req.decoded = decoded;
    next(); // Pasar al siguiente middleware o ruta
  } catch (error) {
    // En caso de error al verificar el token retornar error de no autorizado
    return res.status(401).render("home");
  }
};
