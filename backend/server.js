const express = require('express');
const { serve } = require('@novu/framework/express');
const { tmo_1 } = require('./novu/workflows'); 
const app = express();

app.use(express.json());
app.use('/api/novu', serve({ workflows: [tmo_1] })); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
