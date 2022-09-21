// נקודת אמצע להערה
const { BadRequestError } = require("../errors");
// למשתנה פיקטיבי הגדרה שלא יוכל לעשות פעולות יקבל הודעת שגיאה
const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("משתמש פיקיטיבי לתצוגה בלבד!!");
  }
  next();
};

module.exports = testUser;
