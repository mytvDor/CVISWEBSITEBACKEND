// const express = require("express");
// const mongoose = require("mongoose");
// // const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// app.use(bodyParser.json());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// const corsOptions = {
//   origin: "*",
//   methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// // app.use(express.json());
// mongoose
//   .connect("mongodb+srv://sumitdhonde0:OP3ZFh4RtwEm1RdJ@cluster100.recamce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster100/cvisfeed")
//   .then(console.log("mongo connected "))
//   .catch((e) => {
//     console.log(e);
//   });

// const userFeed = new mongoose.Schema({
//   firstName: { type: String },
//   lastName: { type: String },
//   email: { type: String },
//   rating: { type: Number },
//   likeMost: { type: String },
//   Improve: { type: String },
//   createdAt: { type: Date, default: Date.now },
// });

// const feedback = mongoose.model("feedback", userFeed);

// app.post("/feedback", async (req, res) => {
//   try {
//     console.log(req.body);
//     await feedback.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       rating: req.body.rating,
//       likeMost: req.body.likeMost,
//       Improve: req.body.Improve,
//     });
//     console.log(req.body);

//     res.status(201).send("added data");
//   } catch (e) {
//     console.log(e);
//     res.status(402).send("posting error");
//   }
// });

// app.get("/feedbackthree", async (req, res) => {
//   try {
//     const latestfeed = await feedback.find().sort({ createdAt: -1 }).limit(3);

//     res.status(200).json(latestfeed);
//   } catch (e) {
//     console.log(e);
//     res.status(500).send("error to fetch ...");
//   }
// });

// const userContact = new mongoose.Schema({
//   firstName: { type: String },
//   lastName: { type: String },
//   email: { type: String },
//   country: { type: String },
//   phone: { type: String },
//   message: { type: String },
// });

// //CONTACT US

// const contact = mongoose.model("contact", userContact);

// app.post("/contact", async (req, res) => {
//   try {
//     console.log(req.body);
//     await contact.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       country: req.body.country,
//       phone: req.body.phone,
//       message: req.body.message,
//     });
//     console.log(req.body);

//     res.status(201).send("added data");
//   } catch (e) {
//     console.log(e);
//     res.status(402).send("posting error");
//   }
// });

// app.listen(5000, () => {
//   console.log("running server  ...");
// });
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(express.json());
// mongoose
//  .connect("mongodb+srv://sumitdhonde0:OP3ZFh4RtwEm1RdJ@cluster100.recamce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster100/cvisfeed")  .then(console.log("mongo connected "))
//   .catch((e) => {
//     console.log(e);
//   });
mongoose
 .connect("mongodb+srv://collabvisioninfosolution:3Bdq1UL48QIV3D5V@cluster0.s5lok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/cvisfeed")  .then(console.log("mongo connected "))
  .catch((e) => {
    console.log(e);
  });
const userFeed = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  rating: { type: Number },
  likeMost: { type: String },
  Improve: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const feedback = mongoose.model("feedback", userFeed);

app.post("/feedback", async (req, res) => {
  try {
    console.log(req.body);
    await feedback.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      rating: req.body.rating,
      likeMost: req.body.likeMost,
      Improve: req.body.Improve,
    });
    console.log(req.body);

    res.status(201).send("added data");
  } catch (e) {
    console.log(e);
    res.status(402).send("posting error");
  }
});

app.get("/feedbackthree", async (req, res) => {
  try {
    const latestfeed = await feedback.find().sort({ createdAt: -1 }).limit(3);

    res.status(200).json(latestfeed);
  } catch (e) {
    console.log(e);
    res.status(500).send("error to fetch ...");
  }
});

const userContact = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  country: { type: String },
  phone: { type: String },
  message: { type: String },
});

//CONTACT US

const contact = mongoose.model("contact", userContact);

app.post("/contact", async (req, res) => {
  try {
    console.log(req.body);
    await contact.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      phone: req.body.phone,
      message: req.body.message,
    });

    // const transporter = nodemailer.createTransport({
    //   service: "hotmail",
    //   auth: {
    //     user: "Collabvisionin@outlook.com",
    //     pass: "Collabvision@2025",
    //   },
    // });

    // const mailOptions1 = {
    //   from: "Collabvisionin@outlook.com",
    //   to: "sumitdhonde0@gmail.com",
    //   subject: `Portfolio name`,
    //   html: ` 
    //   <html>
    //   <head>
    //     <style>
    //       body {
    //         font-family: Arial, sans-serif;
    //         color: #333;
    //         background-color: #f9f9f9;
    //         margin: 0;
    //         padding: 20px;
    //       }
    //       .container {
    //         max-width: 600px;
    //         margin: 0 auto;
    //         background-color: #e3e3e3;
    //         padding: 20px;
    //         border-radius: 8px;
    //         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    //       }
    //       h2 {
    //         color: #333;
    //         font-size: 24px;
    //         margin-bottom: 20px;
    //       }
    //       p {
    //         font-size: 16px;
    //         line-height: 1.5;
    //         margin: 10px 0;
    //       }
    //       .imgcont {
    //          width: 100%;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       margin: 30px;
    //       }
    //       .imgcont img {
    //         width: auto;
    //         max-width: 70%;
    //         height: auto;
    //         border-radius: 8px;
    //       }
    //       .social-links {
    //         margin-top: 20px;
    //         text-align: center;
    //       }
    //       .social-links a {
    //         display: inline-block;
    //         margin: 0 10px;
    //       }
    //       .social-links img {
    //         width: 32px;
    //         height: 32px;
    //         border-radius: 4px;
    //       }
    //       .divider {
    //         margin: 20px 0;
    //         border-top: 1px solid #ddd;
    //       }
    //       .footer {
    //         font-size: 14px;
    //         color: #888;
    //         margin-top: 20px;
    //         text-align: center;
    //       }
    //     </style>
    //   </head>
    //   <body>
    //     <div class="container">
    //       <h2>Thank You, name!</h2>
    //       <p>We have received your message and appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible.</p>
    //       <div class="imgcont">
    //         <img src="https://drive.google.com/uc?export=view&id=1-D_ogWstFSXE9G3PRDT4UfwY9Dt0rfSZ" alt="Thank You Image">
    //       </div>
    //       <div class="divider"></div>
    //       <p>Follow us on social media for updates:</p>
    //       <div class="social-links">
    //         <a href="https://www.linkedin.com/in/sumit-dhonde/" target="_blank">
    //           <img src="https://simmachines.com/wp-content/uploads/2017/07/Symbol-LinkedIn.jpg" alt="LinkedIn Logo">
    //         </a>
    //         <a href="https://x.com/SumitDhonde5" target="_blank">
    //           <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1722961712~exp=1722965312~hmac=f2b3cb8a8b7b80946ae7be5203da4594a229cf261c7bc16a297fd7a41e357213&w=826" alt="Twitter Logo">
    //         </a>
    //         <a href="https://www.showwcase.com/sumitdhonde" target="_blank">
    //           <img src="https://play-lh.googleusercontent.com/XOzPJm3Uvfe8-xoLuGKCCIz2ssJp0GBspMa7jnvCbHAMxzJbvxxO84zqNGmc6VhGE0dQ=w480-h960" alt="Showwcase Logo">
    //         </a>
    //         <a href="https://github.com/Sumitdhonde/" target="_blank">
    //           <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo">
    //         </a>
    //         <a href="https://dev.to/mytv_dor_35113e7aa7f055df" target="_blank">
    //           <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="Dev.to Logo">
    //         </a>
    //       </div>
    //       <p class="footer">Best regards,<br>Sumit Dhonde<br></p>
    //     </div>
    //   </body>
    //   </html>`,
    // };

    // const mailOptions2 = {
    //   from: "Collabvisionin@outlook.com",
    //   to: "sumitdhonde0@gmail.com",
    //   subject: `From CVIS hi`,
    //   html: `  <ul>
    //       <li><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</li>
    //       <li><strong>Email:</strong> ${req.body.email}</li>
    //       <li><strong>Contact:</strong> ${req.body.phone}</li>
    //       <li><strong>country:</strong> ${req.body.country}</li>
    //                 <li><strong>message:</strong> ${req.body.message}</li>

    //     </ul>`,
    // };

    // // Send the email
    // // await transporter.sendMail(mailOptions1);
    // await transporter.sendMail(mailOptions2);
 const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "Collabvisionin@outlook.com",
        pass: "collabvision@2025",
      },
    });
    // user: "sumitportfolio@outlook.com",
    // pass: "7zaQd8jpYAeQGzG",
    const mailOptions1 = {
      from: "Collabvisionin@outlook.com",
      to: "mytvdor@gmail.com",
      subject: `Portfolio ${req.body.firstName}`,
      html: ` 
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #e3e3e3;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
          }
          .imgcont {
             width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 30px;
          }
          .imgcont img {
            width: auto;
            max-width: 70%;
            height: auto;
            border-radius: 8px;
          }
          .social-links {
            margin-top: 20px;
            text-align: center;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
          }
          .social-links img {
            width: 32px;
            height: 32px;
            border-radius: 4px;
          }
          .divider {
            margin: 20px 0;
            border-top: 1px solid #ddd;
          }
          .footer {
            font-size: 14px;
            color: #888;
            margin-top: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Thank You, ${req.body.firstName}!</h2>
          <p>We have received your message and appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible.</p>
          <div class="imgcont">
            <img src="https://drive.google.com/uc?export=view&id=1-D_ogWstFSXE9G3PRDT4UfwY9Dt0rfSZ" alt="Thank You Image">
          </div>
          <div class="divider"></div>
          <p>Follow us on social media for updates:</p>
          <div class="social-links">
            <a href="https://www.linkedin.com/in/sumit-dhonde/" target="_blank">
              <img src="https://simmachines.com/wp-content/uploads/2017/07/Symbol-LinkedIn.jpg" alt="LinkedIn Logo">
            </a>
            <a href="https://x.com/SumitDhonde5" target="_blank">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1722961712~exp=1722965312~hmac=f2b3cb8a8b7b80946ae7be5203da4594a229cf261c7bc16a297fd7a41e357213&w=826" alt="Twitter Logo">
            </a>
            <a href="https://www.showwcase.com/sumitdhonde" target="_blank">
              <img src="https://play-lh.googleusercontent.com/XOzPJm3Uvfe8-xoLuGKCCIz2ssJp0GBspMa7jnvCbHAMxzJbvxxO84zqNGmc6VhGE0dQ=w480-h960" alt="Showwcase Logo">
            </a>
            <a href="https://github.com/Sumitdhonde/" target="_blank">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo">
            </a>
            <a href="https://dev.to/mytv_dor_35113e7aa7f055df" target="_blank">
              <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="Dev.to Logo">
            </a>
          </div>
          <p class="footer">Best regards,<br>Sumit Dhonde<br></p>
        </div>
      </body>
      </html>`,
    };

    const mailOptions2 = {
      from: "Collabvisionin@outlook.com",
      to: "sumitdhonde0@gmail.com",
      subject: `From CVIS hi`,
      html: `  <ul>
          <li><strong>Name:</strong> ${req.body.firstName} ${req.body.lastName}</li>
          <li><strong>Email:</strong> ${req.body.email}</li>
          <li><strong>Contact:</strong> ${req.body.phone}</li>
          <li><strong>country:</strong> ${req.body.country}</li>
                    <li><strong>message:</strong> ${req.body.message}</li>

        </ul>`,
    };

    // Send the email
    // await transporter.sendMail(mailOptions1);
    await transporter.sendMail(mailOptions2);
    console.log("hi");
    console.log(req.body);

    res.status(201).send("added data");
  } catch (e) {
    console.log(e);
    res.status(402).send("posting error");
  }
});

app.listen(5000, () => {
  console.log("running server  ...");
});

