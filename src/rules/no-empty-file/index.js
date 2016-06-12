import {
  ruleMessages,
  report,
  validateOptions,
} from "../../utils"

export const ruleName = "no-empty-file"

export const messages = ruleMessages(ruleName, {
  rejected: "Unexpected empty file",
})

export default function (actual) {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, { actual })
    if (!validOptions) { return }

    if (root.toString().replace(/\s/g, "").length > 0) { return }

    report({
      message: messages.rejected,
      node: root,
      result,
      ruleName,
    })
  }
}
