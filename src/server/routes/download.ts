import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/download-guide", (_req, res) => {
  const filePath = path.resolve("/home/ubuntu/2D_Pixel_RPG_Dev_Guide.md");
  
  if (fs.existsSync(filePath)) {
    res.download(filePath, "2D_Pixel_RPG_Dev_Guide.md");
  } else {
    res.status(404).send("文件未找到");
  }
});

export default router;
