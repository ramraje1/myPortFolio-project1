const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const emailSendController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const msg = {
      to: "ramchandramane9960@gmail.com", // your email
      from: process.env.FROM_EMAIL,       // verified sender
      subject: "About Portfolio App",
      html: `
        <h3>Detailed Information</h3>
        <ul>
          <li><b>Name:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Message:</b> ${message}</li>
        </ul>
      `,
    };

    await sgMail.send(msg);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};

module.exports = { emailSendController };
