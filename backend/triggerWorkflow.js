const axios = require('axios');
const NOVU_SECRET_KEY = '3f0387d001b5d3a8e81fd62535964a00';
const subscriberId = '66fd95c0cf609b13435d1093';
const subscriberEmail = 'g.snehasish@gmail.com';
const subscriberName = 'Novu Demo';

// Function to trigger the workflow
const triggerWorkflow = async () => {
  try {
    const response = await axios.post('https://api.novu.co/v1/events/trigger', {
      name: 'tmo_1',
      to: {
        subscriberId: subscriberId,
        email: subscriberEmail,
      },
      payload: {
        userName: subscriberName,   
        subject: 'Custom Subject for TMO Workflow. HelloWorld',
      },
      bridgeUrl: 'https://8c34c36c-2ea2-421a-b423-a5099b201847.novu.sh/api/novu',
    }, {
      headers: {
        Authorization: `ApiKey ${NOVU_SECRET_KEY}`, 
        'Content-Type': 'application/json',
      },
    });

    console.log('Notification Sent:', response.data);
  } catch (error) {
    console.error('Error sending notification:', error.response ? error.response.data : error.message);
  }
};

triggerWorkflow();
