module.exports = {
  // Extends the standard conventional commit rules
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Rule 1: references-empty [1, "never"]
    // Level 1 = warning (not error)
    // "never" = commit MUST have a reference (like an issue/ticket number)
    "references-empty": [1, "never"],

    // Rule 2: footer-max-line-length [0, "always"]
    // Level 0 = disabled
    // Means there's no limit on the length of footer lines
    "footer-max-line-length": [0, "always"],

    // Rule 3: body-max-line-length [0, "always"]
    // Level 0 = disabled
    // Means there's no limit on the length of body lines
    "body-max-line-length": [0, "always"],
  },
};
