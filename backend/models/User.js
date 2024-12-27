const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: '' },
  joinedCommunities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
});

module.exports = mongoose.model('User', UserSchema);
