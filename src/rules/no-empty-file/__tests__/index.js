import { testRule } from "../../../testUtils"
import rules from "../../../rules"
import { ruleName, messages } from ".."

const rule = rules[ruleName]

testRule(rule, {
  ruleName,
  config: [true],
  skipBasicChecks: true,

  accept: [ {
    code: ".class { }",
  }, {
    code: "   .class { }   ",
  }, {
    code: "/* comment */",
  }, {
    code: "\n.class {}",
  }, {
    code: "\r\n.class {}",
  } ],

  reject: [ {
    code: "",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "   ",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "\t",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "\n",
    description: "no nodes with space before newline",
    message: messages.rejected,
  },  {
    code: "\r\n",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "\n\n\n",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "\r\n\r\n\r\n",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "  \n  ",
    description: "no nodes with space before newline",
    message: messages.rejected,
  }, {
    code: "  \r\n  ",
    description: "no nodes with space before newline",
    message: messages.rejected,
  } ],
})
