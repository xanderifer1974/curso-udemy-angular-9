module.exports = (req, res, next) => {
    if (req.method === 'POST') {
      req.body.id = Math.floor(Math.random() * 1000); // Simula a geração de um ID
    }
    next();
  };
  