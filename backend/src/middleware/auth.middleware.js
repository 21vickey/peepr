// export  const protectRoute = async (req, res, next) => {
//     if (!req.auth().isAuthenticated) {
//         return res.status(401).json({ message: "Unauthorized - you must be logged in" });
//     }
//     next();
// };
export const protectRoute = async (req, res, next) => {
  console.log("ProtectRoute:", {
    url: req.url,
    isAuthenticated: req.auth?.isAuthenticated,
    userId: req.auth?.userId,
    sessionId: req.auth?.sessionId,
  });
  if (!req.auth?.isAuthenticated) {
    return res.status(401).json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};