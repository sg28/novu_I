
const { workflow } = require('@novu/framework');
const { z } = require('zod');

// Define the workflow with the proper controlSchema and payloadSchema
const tmo_1 = workflow('tmo_1', async ({ step, payload }) => {
    console.log(' step ')
  await step.email('send-email', async (controls) => {
    return {
      subject: controls.subject || 'Default Subject: Workflow Notification',  // Ensure subject is always provided
      body: `Hello ${payload.userName}, This is your TMO 1 Workflow notification.`,
    };
  }, {
    controlSchema: z.object({
      subject: z.string().default('A Successful Test on Novu from {{userName}}'),
    }),
  });
}, {
  payloadSchema: z.object({
    userName: z.string().default('John Doe'),
  }),
});

module.exports = { tmo_1 };

