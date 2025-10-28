// In-memory database
const db = {
  users: [],
  hairTypes: ['3b','3c','4a','4b','4c','4d'],
  creams: [],
  treatments: [
    { name: 'Hidratação', description: 'Repõe água dos fios' },
    { name: 'Nutrição', description: 'Repõe lipídios' },
    { name: 'Reconstrução', description: 'Repõe massa e proteínas' }
  ],
  washes: [],
  progress: []
};

module.exports = db;
