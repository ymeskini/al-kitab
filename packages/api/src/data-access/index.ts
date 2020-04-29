import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/al-kitab', { useNewUrlParser: true });

export const setupDb = () => {
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('DB Connected');
  });
};
