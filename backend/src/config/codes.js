const httpCodeObj = {
    200: {
        code: 200,
        description: "Success",
        content: []
    },
    201: {
        code: 200,
        description: "Created",
        content: []
    },
    400: {
        code: 400,
        error: true,
        description: 'Bad Request',
        content: []
    },
    401: {
        code: 401,
        error: true,
        description: "Unauthorized",
        content: []
    },
    402: {
        code: 402,
        error: true,
        description: 'Payment Requireed',
        content: []
    },
    403: {
        code: 403,
        error: true,
        description: 'Forbidden',
        content: []
    },
    404: {
        code: 404,
        error: true,
        description: "Not Found",
        content: []
    },
    405: {
        code: 405,
        error: true,
        description: "Method Not Allowed",
        content: []
    },
    406: {
        code: 406,
        error: true,
        description: "Not Acceptable",
        content: []
    },
    409: {
        code: 409,
        error: true,
        description: "conflict",
        content: []
    },
    500: {
        code: 500,
        error: true,
        description: 'Internal Server Error',
        content: []
    },
}

module.exports.codes = (statusCode, message, content) => {
    let httpCode = httpCodeObj[statusCode]

    if (message) {
        httpCode.description = message
    }
    if (content) {
        httpCode.content = content
    }
    return httpCode
}