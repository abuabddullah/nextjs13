import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // create connection in mongodb compass in NextJSBy6PP db
    const connection = await mongoose.connect(
      `mongodb+srv://NextJSBy6PP:NextJSBy6PP@cluster0.1jtbz.mongodb.net/NextJSBy6PP`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected on: ${connection.connection.host}`);
  } catch (err) {
    console.log(`error`, err);
  }
};

/* 
    const { connection } = await mongoose.connect(
      `mongodb://localhost:27017/NextJSBy6PP`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(`MongoDB connected on: ${connection.host}`);
  } catch (err) {
    console.log(`error`, err);
  }
};
 */
