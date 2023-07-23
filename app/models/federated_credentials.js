const mongoose = require('mongoose');

const federatedCredentialsStructure = {
  userId: String,
  provider: String,
  subject: String,
};

// Define User schema
const federatedCredentialsSchema = new mongoose.Schema(federatedCredentialsStructure);

// Define User model
const FederatedCredentials = mongoose.model('FederatedCredentials', federatedCredentialsSchema);

module.exports = FederatedCredentials;