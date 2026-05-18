import { Request, Response } from "express";
import { pool } from "../../config/db";
import { userServices } from "./user.service";


const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const result = await userServices.createUser(name,email)



    res.status(201).json({
      success: false,
      message: "Data Inserted Succesfully!!",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }

  res.status(201).json({
    success: true,
    message: "APi Is working fine",
  });
}

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser();

    
    res.status(200).json({
      success: true,
      message: "user retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
}

export const userControllers = {
    createUser,getUser
}