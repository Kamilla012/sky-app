const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config'); // Zaimportuj swój klucz JWT_SECRET z odpowiedniego pliku konfiguracyjnego

function authenticateToken(req, res, next) {
  // Pobierz token z nagłówka Authorization
  const token = req.headers['authorization'];

  if (!token) {
    return res.sendStatus(401); // Brak tokena, brak autoryzacji
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Token nieprawidłowy, brak autoryzacji
    }

    // Zdekodowane dane użytkownika są dostępne w req.user
    req.user = user;

    // Przejdź do następnego middleware lub obsługi żądania
    next();
  });
}

module.exports = authenticateToken;
