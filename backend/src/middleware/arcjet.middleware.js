import { aj } from "../config/arcjet.js";

// // Arcjet middleware for rate limiting, bot protection, and security

// export const arcjetMiddleware = async (req, res, next) => {
//   try {
//     const decision = await aj.protect(req, {
//       requested: 1, // each request consumes 1 token
//     });

//     // handle denied requests
//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         return res.status(429).json({
//           error: "Too Many Requests",
//           message: "Rate limit exceeded. Please try again later.",
//         });
//       } else if (decision.reason.isBot()) {
//         return res.status(403).json({
//           error: "Bot access denied",
//           message: "Automated requests are not allowed.",
//         });
//       } else {
//         return res.status(403).json({
//           error: "Forbidden",
//           message: "Access denied by security policy.",
//         });
//       }
//     }

//     // check for spoofed bots
//     if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
//       return res.status(403).json({
//         error: "Spoofed bot detected",
//         message: "Malicious bot activity detected.",
//       });
//     }

//     next();
//   } catch (error) {
//     console.error("Arcjet middleware error:", error);
//     // allow request to continue if Arcjet fails
//     next();
//   }
// };

export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    console.log("Arcjet Decision:", {
      url: req.url,
      isAllowed: decision.isAllowed(),
      reason: decision.reason,
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        console.log("Arcjet: Rate limit exceeded");
        return res.status(429).json({
          error: "Too Many Requests",
          message: "Rate limit exceeded. Please try again later.",
        });
      } else if (decision.reason.isBot()) {
        console.log("Arcjet: Bot detected", decision.reason);
        return res.status(403).json({
          error: "Bot access denied",
          message: "Automated requests are not allowed.",
        });
      } else {
        console.log("Arcjet: Security policy violation", decision.reason);
        return res.status(403).json({
          error: "Forbidden",
          message: "Access denied by security policy.",
        });
      }
    }

    if (decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())) {
      console.log("Arcjet: Spoofed bot detected");
      return res.status(403).json({
        error: "Spoofed bot detected",
        message: "Malicious bot activity detected.",
      });
    }

    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error.message);
    next();
  }
};