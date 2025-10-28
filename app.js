const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middleware JWT
const authMiddleware = require('./middleware/auth');

// Swagger setup
const swaggerDocument = require('./resources/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const userRoutes = require('./routes/user');
const hairRoutes = require('./routes/hair');
const creamRoutes = require('./routes/cream');
const treatmentRoutes = require('./routes/treatment');
const washRoutes = require('./routes/wash');
const progressRoutes = require('./routes/progress');

app.use('/user', userRoutes);
app.use('/hair', authMiddleware, hairRoutes);
app.use('/cream', authMiddleware, creamRoutes);
app.use('/treatment', authMiddleware, treatmentRoutes);
app.use('/wash', authMiddleware, washRoutes);
app.use('/progress', authMiddleware, progressRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
