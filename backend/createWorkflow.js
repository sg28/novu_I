const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const createWorkflow = async () => {
  try {
    const response = await axios.post('https://api.novu.co/v1/workflows', {
      name: 'tmo_1',
      identifier: 'tmo_1-workflow',
      notificationGroupId: '670320704eb87a56e15e56f5',
      steps: [
        {
          type: 'email',
          active: true,
          template: {
            subject: 'Hello {{userName}}',
            content: 'This is your TMO 1 workflow notification.',
            from: 'no-reply@yourapp.com',
            senderName: 'Your App',
          },
        },
      ],
      isActive: true
    }, {
      headers: {
        Authorization: `ApiKey ${process.env.NOVU_SECRET_KEY}`,  
        'Content-Type': 'application/json',
      },
    });

    console.log('Workflow Created:', response.data);
  } catch (error) {
    console.error('Error creating workflow:', error.response ? error.response.data : error.message);
  }
};
createWorkflow();
 