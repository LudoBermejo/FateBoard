var validationRules = require("./../conf/ValidationRules.json");
var validation = {};


validation.validate = function(action, verb, data)
{

    var rule = action + "-" + verb;
    var actionRules =validationRules.actions[rule];

    if(actionRules === undefined)
    {
        return {
            error: {
                code: 422,
                message: rule + " doesn't exists"
            }
        }
    }

    var validationFields = Object.keys(actionRules);

    if(validationFields.length && data == undefined)
    {
        return {
            error: {
                code: 422,
                message: rule + ": You must send the following fields: " + validationFields.join(", ")
            }
        }
    }

    var sendedFields = Object.keys(data);

    var dontSendedFields = validationFields.filter(function(element)
    {
        return sendedFields.indexOf(element) == -1;
    })

    if(dontSendedFields.length)
    {
        return {
            error: {
                code: 422,
                message: rule + ": You must send the following fields: "  +dontSendedFields.join(", ")
            }
        }
    }

    for(var i in validationFields)
    {
        var field = validationFields[i]
        if(actionRules[field].rulesOfValidation == undefined)
        {
            return {
                error: {
                    code: 500,
                    message: rule + " with field " + field + " doesn't have rules of validation"
                }
            }
        }

        for(var j in actionRules[field].rulesOfValidation)
        {
            var ruleToCheck = actionRules[field].rulesOfValidation[j]

            if(validationRules.rulesOfValidation[ruleToCheck] == undefined)
            {
                return {
                    error: {
                        code: 500,
                        message: rule + " with field " + field + ": " + ruleToCheck + " doesn't exists"
                    }
                }


            }

            var ruleToExecute = validationRules.rulesOfValidation[ruleToCheck];
            var regEx = new RegExp(ruleToExecute.rule);
            var resultEx = regEx.test(data[field]);

            if (!resultEx) {

                return {
                    error: {
                        code: 422,
                        message: rule + " in field " + field + ": " + validationRules.rulesOfValidation[ruleToCheck].message
                    }
                }

            }


        }

    }

    return true;
}

module.exports = validation;